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
        <span className="w-[500px] h-12 relative flex">
              <input
                type="text"
                className="h-full w-full bg-[#F9F9F9] px-4 focus:outline-none text-white"
                placeholder="your@email.com"
              />
              <button className="bg-[#2A254B] absolute top-0 right-0 h-full w-24 text-white capitalize text-black text-sm">
                sign up
              </button>
            </span>

      </div>
    </div>
  );
};

export default Club;
