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
      <h3 className="text-2xl font-bold text-center mb-8 text-blue-900">Your Cart</h3>
      
      <div className="space-y-6 max-w-4xl mx-auto">
        {cartItems.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cartItems.map((item: CartItem) => (
                <div
                  key={item._id}
                  className="flex flex-col sm:flex-row items-center bg-white shadow-md rounded-lg p-4 space-y-4 sm:space-y-0 sm:space-x-4"
                >
                  <Image
                    src={item.image || "/default-image.jpg"}
                    alt={item.title || "Product Image"}
                    height={120}
                    width={120}
                    className="rounded-md object-contain"
                  />
                  <div className="flex-grow text-center sm:text-left">
                    <h5 className="text-lg font-semibold">{item.title}</h5>
                    <p className="text-gray-600">${item.price}</p>
                    <p className="text-gray-500">Qty: {item.quantity || 1}</p>
                  </div>
                  <button
                    className="bg-[#2A254B] text-white px-4 py-2 w-full sm:w-auto hover:bg-[#3c3567] rounded-md"
                    onClick={() => handleRemove(String(item._id))}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto">
              <h4 className="text-xl font-semibold text-center sm:text-left">Cart Summary</h4>
              <p className="text-lg text-center sm:text-left">Total: ${totalPrice.toFixed(2)}</p>
              <button
                className="bg-[#2A254B] text-white w-full py-3 rounded-lg mt-4 hover:bg-[#3c3567]"
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
