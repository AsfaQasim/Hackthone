import React from 'react';
import Image from 'next/image';

const Brand = () => {
  return (
    <div>
      <div className='flex justify-center text-[#2A254B] font-ClashDisplay font-normal text-[24px] py-7'>
        What makes our brand different
      </div>
      <div className='h-[355px] w-full px-20'>
        {/* Container for each item */}
        <div className='flex justify-between items-start space-x-8'>
          
          {/* First Item */}
          <div className='flex flex-col items-start'>
            <Image
              src='/Delivery.png'
              alt='delivery'
              width={24}
              height={24}
            />
            <h1 className='w-[119px] text-[20px] font-normal font-ClashDisplay'>
              Next day as standard
            </h1>
            <p className='w-[270px] h-[48px] font-normal'>
              Order before 3pm and get your order the next day as standard
            </p>
          </div>

          {/* Second Item */}
          <div className='flex flex-col items-start'>
            <Image
              src='/Checkmark.png'
              alt='check'
              width={24}
              height={24}
            />
            <h1 className='w-[119px] text-[20px] font-normal font-ClashDisplay'>
              Made by true artisans
            </h1>
            <p className='w-[270px] h-[48px] font-normal'>
              Handmade crafted goods made with real passion and craftsmanship
            </p>
          </div>

          {/* Third Item */}
          <div className='flex flex-col items-start'>
            <Image
              src='/Purchase.png'
              alt='purchase'
              width={24}
              height={24}
            />
            <h1 className='w-[119px] text-[20px] font-normal font-ClashDisplay'>
              Unbeatable prices
            </h1>
            <p className='w-[270px] h-[48px] font-normal'>
              For our materials and quality you won't find better prices anywhere
            </p>
          </div>

          {/* Fourth Item */}
          <div className='flex flex-col items-start'>
            <Image
              src='/Sprout.png'
              alt='sprout'
              width={24}
              height={24}
            />
            <h1 className='w-[119px] text-[20px] font-normal font-ClashDisplay'>
              Recycled packaging
            </h1>
            <p className='w-[270px] h-[48px] font-normal'>
              We use 100% recycled packaging to ensure our footprint is manageable
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Brand;
