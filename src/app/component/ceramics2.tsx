import React from 'react'
import Image  from 'next/image';


interface CeramicsProps {
  heading?: string; // Marked as optional
}

const Ceramics2: React.FC<CeramicsProps> = ({ heading = 'New Ceramics' }) => { // Default value provided
  return (
    
<div>
      {/* Responsive grid columns */}
      <div className="max-w-[1308px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-20">
        {/* Column 1 */}
        <div>
          <div className="bg-[#F5F5F5] flex justify-center items-center">
            <div className="w-[305px] h-[375px] relative transform hover:scale-105 transition-all duration-300">
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
        <div>
          <div className="bg-[#F5F5F5] flex justify-center items-center">
            <div className="w-[305px] h-[375px] relative transform hover:scale-105 transition-all duration-300">
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
        <div>
          <div className="bg-[#F5F5F5] flex justify-center items-center">
            <div className="w-[305px] h-[375px] relative transform hover:scale-105 transition-all duration-300">
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
        <div>
          <div className="bg-[#F5F5F5] flex justify-start items-center">
            <div className="w-[305px] h-[375px] relative transform hover:scale-105 transition-all duration-300">
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

      
   
             {/* Column 5 */}
             <div>
          <div className="bg-[#F5F5F5] flex justify-start items-center">
            <div className="w-[305px] h-[375px] relative transform hover:scale-105 transition-all duration-300">
              <Image
                src="/lamps.png"
                alt="lamp"
                layout="fill"
                className="object-cover"
              />
            </div>
          </div>
          {/* Text below the image */}
          <div className="mt-4 text-start">
            <h1 className="font-medium text-[16px]">The vase set</h1>
            <p className="text-[14px] text-gray-600">£500</p>
          </div>
        </div>
     {/* Column 6 */}
     <div>
          <div className="bg-[#F5F5F5] flex justify-start items-center">
            <div className="w-[305px] h-[375px] relative transform hover:scale-105 transition-all duration-300">
              <Image
                src="/vase.png"
                alt="lamp"
                layout="fill"
                className="object-cover"
              />
            </div>
          </div>
          {/* Text below the image */}
          <div className="mt-4 text-start">
            <h1 className="font-medium text-[16px]">The vase</h1>
            <p className="text-[14px] text-gray-600">£400</p>
          </div>
        </div>
   {/* Column 7*/}
   <div>
          <div className="bg-[#F5F5F5] flex justify-start items-center">
            <div className="w-[305px] h-[375px] relative transform hover:scale-105 transition-all duration-300">
              <Image
                src="/chairs.png"
                alt="lamp"
                layout="fill"
                className="object-cover"
              />
            </div>
          </div>
          {/* Text below the image */}
          <div className="mt-4 text-start">
            <h1 className="font-medium text-[16px]">The chair</h1>
            <p className="text-[14px] text-gray-600">£600</p>
          </div>
        </div>
  {/* Column 8*/}
  <div>
          <div className="bg-[#F5F5F5] flex justify-start items-center">
            <div className="w-[305px] h-[375px] relative transform hover:scale-105 transition-all duration-300">
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
            <h1 className="font-medium text-[16px]">Fancy chair</h1>
            <p className="text-[14px] text-gray-600">£800</p>
          </div>
        </div>
{/* Column 9*/}
<div>
          <div className="bg-[#F5F5F5] flex justify-start items-center">
            <div className="w-[305px] h-[375px] relative transform hover:scale-105 transition-all duration-300">
              <Image
                src="/Parent.png"
                alt="pot"
                layout="fill"
                className="object-cover"
              />
            </div>
          </div>
          {/* Text below the image */}
          <div className="mt-4 text-start">
            <h1 className="font-medium text-[16px]">The pot</h1>
            <p className="text-[14px] text-gray-600">£600</p>
          </div>
        </div>

     {/* Column 10*/}
<div>
          <div className="bg-[#F5F5F5] flex justify-start items-center">
            <div className="w-[305px] h-[375px] relative transform hover:scale-105 transition-all duration-300">
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
            <h1 className="font-medium text-[16px]">The Silk</h1>
            <p className="text-[14px] text-gray-600">£789</p>
          </div>
        </div>
             {/* Column 11*/}
<div>
          <div className="bg-[#F5F5F5] flex justify-start items-center">
            <div className="w-[305px] h-[375px] relative transform hover:scale-105 transition-all duration-300">
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
            <p className="text-[14px] text-gray-600">£344</p>
          </div>
        </div>
                     {/* Column 12*/}
<div>
          <div className="bg-[#F5F5F5] flex justify-start items-center">
            <div className="w-[305px] h-[375px] relative transform hover:scale-105 transition-all duration-300">
              <Image
                src="/chair2.png"
                alt="chair"
                layout="fill"
                className="object-cover"
              />
            </div>
          </div>
          {/* Text below the image */}
          <div className="mt-4 text-start">
            <h1 className="font-medium text-[16px]">The chair</h1>
            <p className="text-[14px] text-gray-600">£399</p>
          </div>
        </div>
      </div>
      <div className='pb-3 pl-[500px]'> <button className="bg-[#F9F9F9] h-[56px] w-[200px]  flex justify-center items-center text-black hover:bg-slate-500 mt-8">
            View Collection
          </button></div>
      </div>
    
    
  );
};

export default Ceramics2;
