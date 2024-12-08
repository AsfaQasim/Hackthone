import React from 'react';
import Image from 'next/image';

interface CeramicsProps {
  heading?: string; // Marked as optional
}

const Ceramics: React.FC<CeramicsProps> = ({ heading = 'New Ceramics' }) => {
  return (
    <div className='w-full px-20 min-h-[70vh]'>
      {/* Dynamic Heading */}
      <div className='mb-10'>
        <h1 className='font-ClashDisplay text-[32px] font-normal'>
          {heading} {/* Use the optional heading prop */}
        </h1>
      </div>

      {/* Responsive grid columns */}
      <div className="max-w-[1308px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Column 1 */}
        <div className="transform hover:scale-105 transition-all duration-300">
          <div className="bg-[#F5F5F5] flex justify-center items-center">
            <div className="w-[305px] h-[375px] relative">
              <Image
                src="/hero.png"
                alt="hero"
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

        {/* Column 2 */}
        <div className="transform hover:scale-105 transition-all duration-300">
          <div className="bg-[#F5F5F5] flex justify-center items-center">
            <div className="w-[305px] h-[375px] relative">
              <Image
                src="/Parent.png"
                alt="parent"
                layout="fill"
                className="object-cover"
              />
            </div>
          </div>
          {/* Text below the image */}
          <div className="mt-4 text-start">
            <h1 className="font-medium text-[16px]">Rustic Vase Set</h1>
            <p className="text-[14px] text-gray-600">£155</p>
          </div>
        </div>

        {/* Column 3 */}
        <div className="transform hover:scale-105 transition-all duration-300">
          <div className="bg-[#F5F5F5] flex justify-center items-center">
            <div className="w-[305px] h-[375px] relative">
              <Image
                src="/silk.png"
                alt="silk"
                layout="fill"
                className="object-cover"
              />
            </div>
          </div>
          {/* Text below the image */}
          <div className="mt-4 text-start">
            <h1 className="font-medium text-[16px]">The Silky Vase</h1>
            <p className="text-[14px] text-gray-600">£125</p>
          </div>
        </div>

        {/* Column 4 */}
        <div className="transform hover:scale-105 transition-all duration-300">
          <div className="bg-[#F5F5F5] flex justify-start items-center">
            <div className="w-[305px] h-[375px] relative">
              <Image
                src="/lamp.png"
                alt="lamp"
                layout="fill"
                className="object-cover"
              />
            </div>
          </div>
          {/* Text below the image */}
          <div className="mt-4 text-start">
            <h1 className="font-medium text-[16px]">The Lucy Lamp</h1>
            <p className="text-[14px] text-gray-600">£399</p>
          </div>
        </div>

        {/* View Collection Button */}
        <div className='pt-16 pl-[470px]'>
          <button className="bg-[#F9F9F9] h-[56px] w-[200px] flex justify-center items-center text-black hover:bg-slate-500 mt-8">
            View Collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ceramics;
