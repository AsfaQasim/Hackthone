"use client"
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart, MdMenu } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative max-w-full bg-[#FFFFFF] font-satoshi">
      {/* Header Section */}
      <header className="w-full h-[70px] flex items-center justify-between px-4 lg:px-8">
        {/* Left Section for Large Screens */}
        <div className="lg:flex hidden items-center">
          <CiSearch size={24} className="text-gray-600 cursor-pointer" />
        </div>

        {/* Center Section: Text (Avian) */}
        <h1 className="text-lg lg:text-xl font-normal text-black text-left lg:text-center">
          Avian
        </h1>

        {/* Right Section */}
        <div className="flex items-center space-x-4 lg:space-x-6">
          {/* Small Screens: Search Icon and Hamburger */}
          <div className="lg:hidden flex items-center space-x-4">
            <CiSearch size={24} className="text-gray-600 cursor-pointer" />
            <MdMenu
              size={28}
              className="text-gray-600 cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </div>

          {/* Large Screens: Shopping Cart and User Icons */}
          <div className="hidden lg:flex items-center space-x-4">
            <MdOutlineShoppingCart size={24} className="text-gray-600 cursor-pointer" />
            <FaRegUserCircle size={24} className="text-gray-600 cursor-pointer" />
          </div>
        </div>
      </header>

      {/* Divider Line */}
      <hr className="w-full border-b-2 border-gray-300" />

      {/* Navigation Links */}
      <nav
        className={`lg:flex justify-center items-center gap-8 py-4 transition-all duration-300 ease-in-out ${
          menuOpen
            ? "flex-col opacity-100 translate-y-0"
            : "hidden opacity-0 translate-y-8"
        } lg:flex lg:flex-row lg:py-0 lg:gap-8`}
      >
        {/* Links shown in the hamburger menu for small screens and default large screens */}
        <Link
          href="/"
          className="text-[#726E8D] hover:text-black transition-all py-2"
        >
          Home
        </Link>
        <Link
          href="/about"
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
          href="/cart"
          className="text-[#726E8D] hover:text-black transition-all py-2"
        >
          Cart
        </Link>
      </nav>
    </div>
  );
};

export default Header;
