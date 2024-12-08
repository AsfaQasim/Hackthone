import React from "react";

const Club = () => {
  return (
    <div className="w-full h-[481px] border border-[#F9F9F9] px-20">
      <div className="w-full h-full border-2 border-[#F9F9F9] p-8 flex flex-col justify-center items-center">
        <h1 className="font-ClashDisplay font-normal text-[36px] text-center mb-4 w-[571px]">
          Join the club and get the benefits
        </h1>
        <p className="text-center mb-4">
          Sign up for our newsletter and receive exclusive offers on new ranges,
          sales, pop-up stores, and more.
        </p>
        <div className="flex items-center w-full px-80 mt-3">
  <input
    type="email"
    placeholder="your@gmail.com"
    className="p-3 border-[#F9F9F9]"
  />
  <button className="bg-black h-[50px] w-[118px] flex justify-center items-center text-white hover:bg-black rounded-sm">
    Sign Up
  </button>
</div>

      </div>
    </div>
  );
};

export default Club;
