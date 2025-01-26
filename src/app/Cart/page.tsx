"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { RootState } from "./redux/store";
import { remove } from "./redux/cartslice";
import { CartItem } from "./redux/cartslice";

const Cartpage: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Remove item from the cart
  const handleRemove = (id: string) => {
    console.log("[Component] Dispatching remove for ID:", id);
    dispatch(remove(id));
  };

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + parseFloat(item.price.toString()),
    0
  );

  // Handle checkout action
  const handleCheckout = () => {
    console.log("Proceeding to Checkout...");
    alert(`Total: $${totalPrice.toFixed(2)}. Proceeding to checkout!`);
   
};
  // Prevent server-side rendering issues
  if (!isMounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-blue-900">
        Your Cart
      </h3>
      <div className="space-y-6">
        {cartItems.length > 0 ? (
          <>
            {/* Render Cart Items */}
            {cartItems.map((item: CartItem) => (
              <div
                key={item._id}
                className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-lg p-4 space-y-4 md:space-y-0 md:space-x-4"
              >
                {/* Image Section */}
                <div className="flex-shrink-0">
                  <Image
                    src={item.image || "/default-image.jpg"}
                    alt={item.title || "Product Image"}
                    height={120}
                    width={120}
                    className="rounded-md object-contain"
                  />
                </div>

                {/* Content Section */}
                <div className="flex-grow text-center md:text-left">
                  <h5 className="text-lg md:text-xl font-semibold text-gray-800">
                    {item.title || "Unnamed Product"}
                  </h5>
                  <h5 className="text-md md:text-lg font-medium text-gray-600 mt-2">
                    ${item.price}
                  </h5>
                </div>

                {/* Remove Button */}
                <button
                  className="bg-[#2A254B] text-white px-4 py-2 rounded hover:bg-[#3c3567] transition-colors text-sm md:text-base"
                  onClick={() => handleRemove(String(item._id))} // Ensure ID is a string
                >
                  Remove
                </button>
              </div>
            ))}

            {/* Checkout Section */}
            <div className="bg-white shadow-md rounded-lg p-6 mt-8">
              <h4 className="text-xl md:text-2xl font-semibold text-gray-800">
                Cart Summary
              </h4>
              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-medium text-gray-600">
                  Total Price:
                </span>
                <span className="text-xl font-bold text-blue-900">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <button
                className="bg-[#2A254B] text-white w-full py-3 rounded-lg mt-6 text-lg font-semibold hover:bg-slate-600 transition-colors"
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        ) : (
          // Empty Cart Message
          <div className="text-center text-gray-600">
            <h4 className="text-xl md:text-2xl font-semibold">
              Your cart is empty!
            </h4>
            <p className="mt-2">Add items to your cart to see them here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cartpage;
