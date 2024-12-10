import React from "react";
import Image from "next/image";
import About2 from "../component/about";
import Link from "next/link";

const About = () => {
  return (
    <>
    <div className="w-full  px-20 py-12">
      {/* Top Section */}
      <div className="flex items-center justify-between">
        {/* Left Side */}
        <div className="w-1/2">
          <h1 className="font-normal text-[#2A254B] text-[24px] sm:text-[32px] md:text-[30px] leading-tight">
            A brand built on the love of craftmanship, quality and outstanding
            customer service
          </h1>
        </div>

        {/* Right Side (Button) */}
        <div className="flex justify-end w-1/2">
        <Link href = "/products">
          <button className="bg-[#F9F9F9] h-[56px] w-[200px] flex justify-center items-center
           text-black hover:bg-slate-500 sm:mt-8">
            View our products
          </button>
          </Link>
        </div>
      </div>

      {/* Grid Section */}
      <div className="max-w-[1308px] grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-y-16 gap-x-6 mt-12">
        {/* Column 1 (spans 2 columns on large screens) */}
        <div className="lg:col-span-2">
          <div className="bg-[#2A254B] flex flex-col justify-start items-start w-full h-[375px] p-6 gap-6">
            {/* Heading */}
            <h1 className="font-normal text-[32px] text-[#FFFFFF]">
              It started with a small idea
            </h1>
            {/* Subtext */}
            <p className="text-[18px] font-normal text-[#FFFFFF]">
              A global brand with local beginnings, our story began in a small
              studio in South London in early 2014
            </p>
            {/* Button with gap */}
            <Link href="/products">
            <button className="bg-[#dbd6f8] h-[56px] w-[150px] flex justify-center items-center text-black hover:bg-slate-500 mt-14">
              View Collection
            </button>
            </Link>
          </div>
        </div>

        {/* Column 2 (spans 2 columns on large screens) */}
        <div className="lg:col-span-2">
          <div className="bg-[#F5F5F5] flex justify-center items-center">
            <div className="w-full h-[375px] relative">
              <Image
                src="/block.png"
                alt="image"
                layout="fill"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <About2/>
</>
  );
};

export default About;
