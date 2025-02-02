"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { RootState } from "./redux/store";
import { remove } from "./redux/cartslice";
import { CartItem } from "./redux/cartslice";
import { useRouter } from "next/navigation";

const Cartpage: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const router = useRouter();

  // Remove item from the cart
  const handleRemove = (id: string) => {
    dispatch(remove(id));
  };

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  // Handle checkout action
  const handleCheckout = () => {
    alert(`Total: $${totalPrice.toFixed(2)}. Proceeding to checkout!`);
    router.push("/checkout");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <h3 className="text-2xl font-bold text-center mb-8 text-blue-900">
        Your Cart
      </h3>

      <div className="space-y-6">
        {cartItems.length > 0 ? (
          <>
            {cartItems.map((item: CartItem) => (
              <div
                key={item._id}
                className="flex flex-col sm:flex-row items-center bg-white shadow-md rounded-lg p-4 space-y-4 sm:space-y-0 sm:space-x-4"
              >
                {/* Product Image */}
                <Image
                  src={item.image || "/default-image.jpg"}
                  alt={item.title || "Product Image"}
                  height={120}
                  width={120}
                  className="rounded-md object-contain"
                />

                {/* Product Details */}
                <div className="flex flex-col flex-grow text-center sm:text-left">
                  <h5 className="text-lg font-semibold">{item.title}</h5>
                  <p className="text-gray-600">${item.price}</p>
                  <p className="text-gray-500">Qty: {item.quantity || 1}</p>
                </div>

                {/* Remove Button */}
                <button
                  className="bg-[#2A254B] text-white px-4 py-2 w-full sm:w-auto  hover:bg-[#3c3567]"
                  onClick={() => handleRemove(String(item._id))}
                >
                  Remove
                </button>
              </div>
            ))}

            {/* Cart Summary */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h4 className="text-xl font-semibold">Cart Summary</h4>
              <p className="text-lg">Total: ${totalPrice.toFixed(2)}</p>
              <button
                className="bg-[#2A254B] text-white w-full py-3  mt-4 hover:bg-[#3c3567]"
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        ) : (
          <div className="text-center text-gray-600">
            <h4>Your cart is empty!</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cartpage;
