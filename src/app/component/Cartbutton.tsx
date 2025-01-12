"use client";
import React from "react";

// Define a type for the cartItem
interface CartItem {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
  title: string;
}

function CartButton({ cartItem }: { cartItem: CartItem }) {
  const addToCart = () => {
    localStorage.setItem("item", JSON.stringify(cartItem));
  };

  return (
    <button
      className="bg-[#2A254B] h-[56px] w-[143px] flex justify-center items-center text-white"
      onClick={addToCart}
    >
      Add to cart
    </button>
  );
}

export default CartButton;
