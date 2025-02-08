"use client";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../Cart/redux/store";

const Header = () => {
  // Accessing the state using RootState
  const cartItems = useSelector((state: RootState) => state.cart.items.length);

  return (
    <div className="relative max-w-full bg-white font-satoshi">
      {/* Header Section */}
      <header
        className="w-full h-[70px] flex items-center justify-between px-4 md:px-8 fixed top-0 left-0 z-50 
      shadow-md bg-white"
      >
        {/* Left Section: Search Icon */}
        <div className="hidden md:block">
          <CiSearch size={24} className="text-gray-600 cursor-pointer" />
        </div>

        {/* Center Section: Brand Name */}
        <h1 className="text-lg md:text-xl font-normal text-black text-center font-[clash]">
          Avian
        </h1>

        {/* Right Section: Icons */}
        <div className="flex items-center space-x-4">
          {/* Search Icon for Mobile */}
          <CiSearch
            size={24}
            className="text-gray-600 cursor-pointer md:hidden"
          />

          {/* Shopping Cart Icon with Badge */}
          <Link href="/Cart" className="relative">
            <MdOutlineShoppingCart
              size={24}
              className="text-gray-600 cursor-pointer"
            />
            {cartItems > 0 && (
              <span
                className="absolute top-[-5px] right-[-5px] bg-red-500 text-white text-xs w-5 h-5
              rounded-full flex items-center justify-center"
              >
                {cartItems}
              </span>
            )}
          </Link>

         
       
        </div>
       
      </header>

      {/* Divider Line */}
      <hr className="w-full border-b-2 border-gray-300 mt-[70px]" />

      {/* Navigation Links */}
      <nav className="flex flex-wrap justify-center gap-4 lg:gap-8 py-4">
        <Link
          href="/"
          className="text-[#726E8D] hover:text-black transition-all py-2"
        >
          Home
        </Link>
        <Link
          href="/About"
          className="text-[#726E8D] hover:text-black transition-all py-2"
        >
          About
        </Link>
        <Link
          href="/products"
          className="text-[#726E8D] hover:text-black transition-all py-2"
        >
          Products
        </Link>
        <Link
          href="/Cart"
          className="text-[#726E8D] hover:text-black transition-all py-2"
        >
          Cart
        </Link>
      </nav>
    </div>
  );
};

export default Header; 
