import React from 'react';
import Image from 'next/image';
import { IoMdArrowDropdown } from 'react-icons/io';
import Ceramics2 from '../component/ceramics2';

const Products = () => {
  return (
    <>
    <div className="w-full  h-[50vh]">
      {/* Background Image */}
      <Image
        src="/bgframe.png"
        alt="bgframe"
        width={1440}
        height={209}
      />

      {/* Filters and Sorting */}
      <div className="flex justify-between items-center mt-3 px-20">
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
   <Ceramics2/>
</>
  );
};

export default Products;
