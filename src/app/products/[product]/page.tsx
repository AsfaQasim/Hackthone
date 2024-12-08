import React from "react";
import Image from "next/image";
import Ceramics  from "../../component/ceramics";
import Brand from "../../component/brand";
import Club from "../../component/club";

const Page = () => {
  return (
    <>
      <div className="min-h-[70vh] w-full flex items-center justify-center">
        <div className="w-1/2">
          <Image src={"/product.png"} alt="product" width={721} height={759} />
        </div>
        <div className="w-1/2 flex flex-col items-start text-left px-16 py-">
          <h1 className="w-[281px] h-[44px] font-normal text-[36px]">
            The Dandy Chair
          </h1>
          <p className="font-normal text-[24px] text-left">£250</p>
          <p className="text-[#2A254B]">Description</p>
          <br />
          <br />
          <p className="text-[#2A254B]">
            A timeless design, with premium materials features as one of our most
            popular and iconic pieces. The dandy chair is perfect for any stylish
            living space with beech legs and lambskin leather upholstery.
          </p>
          <br />
          <br />
          <p className="text-[#2A254B]">Premium material</p>
          <p className="text-[#2A254B]">Handmade upholstery</p>
          <p className="text-[#2A254B]">Quality timeless classic</p>

          {/* Dimensions section */}
          <div className="mt-12 text-center">
            <p className="font-bold">Dimensions</p>
            <div className="flex justify-center items-center gap-8 mt-4 text-[#2A254B]">
              <p>Height</p>
              <p>Width</p>
              <p>Depth</p>
            </div>
            <div className="flex justify-center items-center gap-8 mt-4 text-[#2A254B]">
              <p>110cm</p>
              <p>75cm</p>
              <p>50cm</p>
            </div>
            <div className="flex justify-center items-center gap-8 mt-4 text-[#2A254B]">
              <p>Amount</p>
              <Image src={"/Stepper.png"} alt="stepper" width={122} height={46} />
            </div>
          </div>

          <div className="px-16 ml-72">
            <button className="bg-[#2A254B] h-[56px] w-[143px] flex justify-center items-center text-white mt-8">
              Add to cart
            </button>
          </div>
        </div>
      </div>
<br />
<br />
      {/* Ceramics Component placed at the end */}
      <Ceramics  heading="You might also like"/>
      <br />
      <br />
      <Brand/>
      <br />
      <br />
      <Club/>
  
    </>
  );
};

export default Page;
