import React from "react";
import Image from "next/image"; // Import Image component from Next.js

const Studio = () => {
  return (
    <div>
      <div className="w-full h-full bg-[#FFFFFF] md:px-20 py-10 flex items-center md:flex-row flex-col">
        {/* Left Side (Text) */}
        <div className="md:w-1/2 w-full md:p-12 p-4 py-20 md:m-auto">
          <h1 className="font-normal text-[24px] mb-4 text-[#2A254B]">
            From a studio in London to a global brand with over 400 outlets
          </h1>
          <p className="font-normal text-[16px] text-[#505977] mb-8">
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
        <div className="md:w-1/2 w-full md:h-[700px] h-[500px] relative">
          <Image
            src="/bg.png" 
            alt="Studio Image"
            layout="fill" // Make the image fill the parent div
            // objectFit="cover"
            className="object-cover"
          />
        </div>
      </div>

      {/* Button Section */}
      <div className='w-full py-6'>
        <button className="bg-[#F9F9F9] mx-auto flex justify-center items-center text-black hover:bg-slate-500 mt-8 px-8 py-3 font-normal">
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default Studio;
