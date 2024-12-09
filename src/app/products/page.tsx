import React from "react";
import Image from "next/image";
import { IoMdArrowDropdown } from "react-icons/io";
import Ceramics2 from "../component/ceramics2";

const Products = () => {
  return (
    <>
      <div className="w-full">
        {/* Background Image */}
        <div className="w-full">
          <Image src="/bgframe.png" alt="bgframe" width={1440} height={209} className="w-full object-cover"/>
        </div>

        {/* Filters and Sorting */}
        <div className="flex justify-between items-center mt-3 md:px-20 p-3 md:text-base sm:text-sm text-xs">
          {/* Left Section */}
          <div className="flex gap-8 items-center">
            <div className="flex items-center gap-2">
              <h1>Category</h1>
              <IoMdArrowDropdown />
            </div>
            <div className="flex items-center gap-2">
              <h1>Product type</h1>
              <IoMdArrowDropdown />
            </div>
            <div className="flex items-center gap-2">
              <h1>Price</h1>
              <IoMdArrowDropdown />
            </div>
            <div className="flex items-center gap-2">
              <h1>Brand</h1>
              <IoMdArrowDropdown />
            </div>
          </div>

          {/* Right Section (Sorting) */}
          <div className="flex items-center gap-4">
            <h1>Sorting by:</h1>
            <h1>Date added</h1>
            <IoMdArrowDropdown />
          </div>
        </div>
      </div>
      <Ceramics2 />
    </>
  );
};

export default Products;
