import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full h-[704px] bg-[#FFFFFF] flex items-center justify-center px-20"> {/* Ensure this div spans full width with padding */}
      <div className="w-full max-w-[1280px] h-[584px] bg-[#2A254B] flex">
        {/* Left Section: Placeholder for Content */}
        <div className="flex-grow p-8 text-white py-16 px-8 flex flex-col justify-start">
          <h1 className="text-[32px] font-normal font-ClashDisplay w-[513px] h-[90px] leading-tight">
            The furniture brand for the future, with timeless designs
          </h1>

          {/* Button Section */}
          <button className="bg-[#F9F9F926] h-[56px] w-[234px] flex justify-center items-center text-white hover:bg-slate-500 mt-8">
            View Collection
          </button>

          {/* Second Text Section with Satoshi font */}
          <h2 className="font-satoshi text-[18px] mt-40 w-[602px]">
            A new era in eco-friendly furniture with Avelon, the French luxury
            retail brand with nice fonts, tasteful colors, and a beautiful way to
            display things digitally using modern web technologies.
          </h2>
        </div>

        {/* Right Section: Image */}
        <div className="flex-shrink-0">
          <Image
            src="/hero.png"
            alt="hero"
            width={520}
            height={584}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
