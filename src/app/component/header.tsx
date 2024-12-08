import React from "react";
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  return (
    <div className="relative max-w-full bg-[#FFFFFF] font-satoshi">
      {/* Header Section */}
      <header className="w-full h-[70px] flex items-center justify-between px-8">
        {/* Left Section: Search Icon */}
        <div className="flex items-center">
          <CiSearch size={24} className="text-gray-600 cursor-pointer" />
        </div>

        {/* Center Section: Text */}
        <h1 className="text-center text-xl font-normal text-black">Avian</h1>

        {/* Right Section: Shopping Cart and User Icon */}
        <div className="flex items-center space-x-4">
          <MdOutlineShoppingCart size={24} className="text-gray-600 cursor-pointer" />
          <FaRegUserCircle size={24} className="text-gray-600 cursor-pointer" />
        </div>
      </header>

      {/* Divider Line */}
      <hr className="w-full border-b-2 border-gray-300" />

      {/* Navigation Links */}
      <nav className="flex justify-center items-center gap-8 py-4">
        <Link href="/" className="text-[#726E8D] hover:text-black transition-all">
          Plant Pots
        </Link>
        <Link href="/" className="text-[#726E8D] hover:text-black transition-all">
          Ceramics
        </Link>
        <Link href="/" className="text-[#726E8D] hover:text-black transition-all">
          Tables
        </Link>
        <Link href="/" className="text-[#726E8D] hover:text-black transition-all">
          Chairs
        </Link>
        <Link href="/" className="text-[#726E8D] hover:text-black transition-all">
          Crockery
        </Link>
        <Link href="/" className="text-[#726E8D] hover:text-black transition-all">
          Table Ware
        </Link>
        <Link href="/" className="text-[#726E8D] hover:text-black transition-all">
          Cutlery
        </Link>
      </nav>
    </div>
  );
};

export default Header;

