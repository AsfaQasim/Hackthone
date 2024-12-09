import React from 'react';
import Image from 'next/image';

import localFont from 'next/font/local';



const satoshi = localFont({
  src: '/fonts/Satoshim.woff', 
  variable: '--font-satoshi',
  weight: '100 900',
});




const Brand = () => {
  return (
    <div>
      <div className={`${satoshi.className} max-w-full flex justify-center text-[#2A254B] font-normal text-[24px] py-7`}>
        What makes our brand different
      </div>
      <div className="h-[355px] w-full px-8 lg:px-20">
        {/* Container for each item */}
        <div className="flex flex-wrap justify-between items-start space-y-8 lg:space-y-0 lg:space-x-8">
          
          {/* First Item */}
          <div className="flex flex-col items-start w-full sm:w-[48%] lg:w-[23%]">
            <Image
              src="/Delivery.png"
              alt="delivery"
              width={24}
              height={24}
            />
            <h1 className={`${satoshi.className} w-[119px] text-[20px] font-normal`}>
              Next day as standard
            </h1>
            <p className={`${satoshi.className} w-[270px] h-[48px] font-normal`}>
              Order before 3pm and get your order the next day as standard
            </p>
          </div>

          {/* Second Item */}
          <div className="flex flex-col items-start w-full sm:w-[48%] lg:w-[23%]">
            <Image
              src="/Checkmark.png"
              alt="check"
              width={24}
              height={24}
            />
            <h1 className={`${satoshi.className} w-[119px] text-[20px] font-normal`}>
              Made by true artisans
            </h1>
            <p className={`${satoshi.className} w-[270px] h-[48px] font-normal`}>
              Handmade crafted goods made with real passion and craftsmanship
            </p>
          </div>

          {/* Third Item */}
          <div className="flex flex-col items-start w-full sm:w-[48%] lg:w-[23%]">
            <Image
              src="/Purchase.png"
              alt="purchase"
              width={24}
              height={24}
            />
            <h1 className={`${satoshi.className} w-[119px] text-[20px] font-normal`}>
              Unbeatable prices
            </h1>
            <p className={`${satoshi.className} w-[270px] h-[48px] font-normal`}>
              For our materials and quality you won&apos;t find better prices anywhere
            </p>
          </div>

          {/* Fourth Item */}
          <div className="flex flex-col items-start w-full sm:w-[48%] lg:w-[23%]">
            <Image
              src="/Sprout.png"
              alt="sprout"
              width={24}
              height={24}
            />
            <h1 className={`${satoshi.className} w-[119px] text-[20px] font-normal`}>
              Recycled packaging
            </h1>
            <p className={`${satoshi.className} w-[270px] h-[48px] font-normal`}>
              We use 100% recycled packaging to ensure our footprint is manageable
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
