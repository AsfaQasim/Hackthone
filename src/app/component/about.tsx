import React from "react";
import Image from "next/image";
import Brand from "./brand";
import Club from "./club";

const About2 = () => {
  return (
    <>
    <div className="w-full h-[450px] flex bg-[#F5F5F5]"> {/* Increased height */}
      {/* Left Side: Image */}
      <div className="w-1/2 relative h-full">
        <Image
          src="/about.png"
          alt="image"
          layout="fill"
          className="object-cover"
        />
      </div>

      {/* Right Side: Text */}
      <div className="w-1/2 bg-[#F9F9F9] flex flex-col justify-center items-start p-6 gap-6 h-full">
        {/* Heading */}
        <h1 className="font-normal text-[32px] text-[#2A254B]">
          Our service isn&apos;t just personal, it&apos;s actually hyper personally
          exquisite
        </h1>
        {/* Subtext */}
        <p className="text-[18px] font-normal text-[#2A254B]">
          A global brand with local beginnings, our story began in a small
          studio in South London in early 2014
        </p>
        <p className="text-[16px] text-[#2A254B]">
          When we started Avion, the idea was simple. Make high-quality
          furniture affordable and available for the mass market. Handmade, and
          lovingly crafted furniture and homeware is what we live, breathe and
          design so our Chelsea boutique became the hotbed for the London
          interior design community.
        </p>
        {/* Button */}
        <button className="bg-[#FFFFFF] h-[56px] w-[150px] flex justify-center items-center text-black hover:bg-slate-500">
          Get in touch
        </button>
      </div>
    </div>
  <Brand/>
  <Club/>
    </>
  );
};

export default About2;

