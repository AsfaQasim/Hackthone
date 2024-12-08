import React from 'react';
import Image from 'next/image';

const Product = () => {
  return (
    <div className='w-full px-20 min-h-[100vh] py-24'>
      {/* Heading */}
      <div className='mb-10'>
        <h1 className='font-ClashDisplay text-[32px] font-normal'>
          Our popular products
        </h1>
      </div>

      {/* Responsive grid columns */}
      <div className="max-w-[1308px] grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Column 1 (spans 2 columns on large screens) */}
        <div className="lg:col-span-2">
          <div className="bg-[#F5F5F5] flex justify-center items-center">
            <div className="w-full h-[375px] relative">
              <Image
                src="/Large.png"
                alt="large"
                layout="fill"
                className="object-cover"
              />
            </div>
          </div>
          {/* Text below the image */}
          <div className="mt-4 text-start">
            <h1 className="font-medium text-[16px]">The Poplar suede sofa</h1>
            <p className="text-[14px] text-gray-600">£980</p>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <div className="bg-[#F5F5F5] flex justify-center items-center">
            <div className="w-[305px] h-[375px] relative">
              <Image
                src="/hero.png"
                alt="parent"
                layout="fill"
                className="object-cover"
              />
            </div>
          </div>
          {/* Text below the image */}
          <div className="mt-4 text-start">
            <h1 className="font-medium text-[16px]">The Dandy Chair</h1>
            <p className="text-[14px] text-gray-600">£250</p>
          </div>
        </div>

        {/* Column 3 */}
        <div>
          <div className="bg-[#F5F5F5] flex justify-center items-center">
            <div className="w-[305px] h-[375px] relative">
              <Image
                src="/chair2.png"
                alt="silk"
                layout="fill"
                className="object-cover"
              />
            </div>
          </div>
          {/* Text below the image */}
          <div className="mt-4 text-start">
            <h1 className="font-medium text-[16px]">The Dandy Chair</h1>
            <p className="text-[14px] text-gray-600">£250</p>
          </div>
        </div>
        
      </div>
      <div className='pt-16 pl-[470px]'> <button className="bg-[#F9F9F9] h-[56px] w-[200px]  flex justify-center items-center text-black hover:bg-slate-500 mt-8">
            View Collection
          </button></div>
      
      </div>
  
  );
};

export default Product;
