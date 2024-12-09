import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="max-w-full h-[704px] bg-[#FFFFFF] flex items-center justify-center xl:mx-20 md:mx-10">
      <div className="w-full md:h-[584px] h-full bg-[#2A254B] flex flex-col lg:flex-row">
        {/* Left Section: Placeholder for Content */}
        <div className="flex-1 p-8 text-white py-16 px-8 flex flex-col justify-start order-2 lg:order-1">
          <h1 className={`text-[32px] font-normal font-[clash] w-[513px] h-[90px] leading-tight`}>
            The furniture brand for the future, with timeless designs
          </h1>

          {/* Button Section */}
          <button className="bg-[#F9F9F926] h-[56px] w-[234px] flex justify-center items-center text-white hover:bg-slate-500 mt-10 order-1 lg:order-2">
            View Collection
          </button>

          {/* Second Text Section with Satoshi font */}
          <h2 className={`font-[satoshi] text-[18px] mt-40 w-[602px] order-2 lg:order-3`}>
            A new era in eco-friendly furniture with Avelon, the French luxury
            retail brand with nice fonts, tasteful colors, and a beautiful way to
            display things digitally using modern web technologies.
          </h2>
        </div>

        {/* Right Section: Image */}
        <div className="h-full hidden lg:block order-1 lg:order-2">
          <Image
            src="/hero.png"
            alt="hero"
            width={520}
            height={584}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
