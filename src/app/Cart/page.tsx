import React from "react";
import Image from "next/image";

const Cart = () => {
  return (
    <div className="w-full px-20 bg-[#F9F9F9]">
      <div>
        <h1 className="text-[36px] text-[#2A254B] font-normal mb-4">Your shopping cart</h1>

        {/* Flex Container for Product, Quantity, and Total on the Same Line */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-[14px] text-[#2A254B] text-gray-600">Product</p>
          <p className="text-[14px] text-[#2A254B] text-gray-600">Quantity</p>
          <p className="text-[14px] text-[#2A254B] text-gray-600">Total</p>
        </div>

        {/* Flex Container for First Product, Quantity, and Total */}
        <div className="flex justify-between items-center mb-6">
          {/* Product Section */}
          <div className="flex items-center gap-6">
            <Image src={"/silk.png"} alt="silk" width={109} height={134} />
            <div>
              <h1 className="text-xl font-medium mb-2">Graystone vase</h1>
              <p className="w-[179px] text-[#2A254B] text-[14px] mb-2">
                A timeless ceramic vase with a tri-color grey glaze.
              </p>
              <p className="text-lg font-semibold">£85</p>
            </div>
          </div>

          {/* Quantity Section */}
          <div className="flex gap-4">
            <Image src={"/Stepper.png"} alt="stepper" width={122} height={46} />
          </div>

          {/* Total Section */}
          <div>
            <p className="text-[#2A254B] text-lg font-semibold">£85</p>
          </div>
        </div>

        {/* Flex Container for Second Product, Quantity, and Total */}
        <div className="flex justify-between items-center mb-6">
          {/* Product Section */}
          <div className="flex items-center gap-6">
            <Image src={"/pro.png"} alt="pro" width={109} height={134} />
            <div>
              <h1 className="text-xl font-medium mb-2">Basic white vase</h1>
              <p className="w-[179px] text-[#2A254B] text-[14px] mb-2">
                Beautiful and simple, this is one for the classics.
              </p>
              <p className="text-lg font-semibold">£85</p>
            </div>
          </div>

          {/* Quantity Section */}
          <div className="flex gap-4">
            <Image src={"/Stepper.png"} alt="stepper" width={122} height={46} />
          </div>

          {/* Total Section */}
          <div>
            <p className="text-[#2A254B] text-lg font-semibold">£125</p>
          </div>
        </div>
      </div>

      <hr className="w-full border-b-2 border-[#EBE8F4]" />

      {/* Subtotal Section */}
      <div className="w-full h-[240px] border border-[#F9F9F9] px-20">
        <div className="w-full h-full border-2 border-[#F9F9F9] p-8 flex justify-end flex-col items-end">
          <div className="text-right mb-4">
            <h1 className="font-ClashDisplay text-[#4E4D93] font-normal text-[20px]">
              Subtotal
            </h1>
            <p className="text-black text-lg font-normal">£210</p>
            <p className="text-black text-[#4E4D93] mb-4">Taxes and shipping are calculated at checkout</p>
          </div>

          {/* Go to Checkout Button */}
          <span className="w-full flex justify-end">
            <button className="bg-[#2A254B] w-[172px] h-[56px] text-white capitalize text-black text-sm">
              Go to checkout
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
