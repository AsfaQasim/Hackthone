import React from "react";
import Image from "next/image"; // Import Image component from Next.js

const Studio = () => {
  return (
    <div>
      <div className="w-full h-screen bg-[#FFFFFF] px-20 py-16 flex items-center">
        {/* Left Side (Text) */}
        <div className="w-1/2 pr-8">
          <h1 className="font-normal w-[514px] h-[68px] text-[24px] mb-4 text-[#2A254B]">
            From a studio in London to a global brand with over 400 outlets
          </h1>
          <p className="font-normal text-[16px] w-[536px] h-[132px] text-[#505977] mb-8">
            When we started Avion, the idea was simple. Make high quality
            furniture affordable and available for the mass market.
            <br />
            <br /> Handmade,
            and lovingly crafted furniture and homeware is what we live, breathe
            and design so our Chelsea boutique became the hotbed for the London
            interior design community.
          </p>
        </div>

        {/* Right Side (Image) */}
        <div className="w-1/2 h-full relative">
          <Image
            src="/bg.png" 
            alt="Studio Image"
            layout="fill" // Make the image fill the parent div
            objectFit="cover" // Ensures the image covers the whole div while maintaining aspect ratio
            className="object-cover"
          />
        </div>
      </div>

      {/* Button Section */}
      <div className="px-20 relative bottom-14">
        <button className="bg-[#F9F9F9] h-[56px] w-[200px] flex justify-center items-center text-black hover:bg-slate-500 mt-0">
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default Studio;
