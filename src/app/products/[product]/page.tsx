"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Ceramics from "../../component/ceramics"; // Assuming components are correct
import Brand from "../../component/brand";
import Club from "../../component/club";
import { client } from "@/sanity/lib/client"; // Correct client import
import { useDispatch } from "react-redux"; // For managing the cart
import Loader from "@/app/component/loader"; // Assuming loader is correct
import { add } from "@/app/Cart/redux/cartslice"; // Cart action import

export interface Product {
  quantity: number;
  productName: string;
  inventory: number;
  _id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  dimensions: {
    depth: string;
    height: string;
    width: string;
  };
  slug: string;
}

const Page = ({ params }: { params: { product: string } }) => {
  const { product } = params;
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [data, setData] = useState<Product | null>(null);
  const dispatch = useDispatch();

  // Initialize Wishlist from localStorage
  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
  }, []);

  // Add/Remove Item from Wishlist
  const handleAddToWishList = (id: string) => {
    if (wishlist.includes(id)) {
      const updatedWishlist = wishlist.filter((itemId) => itemId !== id);
      setWishlist(updatedWishlist);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    } else {
      const updatedWishlist = [...wishlist, id];
      setWishlist(updatedWishlist);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    }
  };

  // Fetch Product Details
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const query = `*[_type=="product" && _id == $ids] {
          _id,
          name,
          price,
          description,
          quantity,
          "image": image.asset->url,
          dimensions,
          slug
        }`;
        const productData = await client.fetch(query, { ids: product }); 
        console.log(productData);
        setData(productData[0]);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [product]);

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <Loader />
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!data) {
      alert("Product data is not available.");
      return;
    }

    const cartItem = {
      _id: data.slug,
      title: data.name,
      price: data.price,
      image: data.image,
      quantity: 1,
      name: data.name, 
      description: data.description,
    };

    dispatch(add(cartItem));
    alert("Item added to cart!");
  };

  return (
    <>
      {/* Main Product Section */}
      <div className="min-h-[70vh] w-full flex flex-col md:flex-row items-center justify-center px-4 sm:px-8 lg:px-16 py-8">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={data.image}
            alt="product"
            width={721}
            height={759}
            className="object-contain"
            priority 
          />
        </div>

        {/* Product Details Section */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left px-4 sm:px-8 py-8">
          <h1 className="font-normal text-[28px] sm:text-[36px] text-[#2A254B]">
            {data.name}
          </h1>
          <p className="font-normal text-[20px] sm:text-[24px] text-left">
            $ {data.price}
          </p>
          <p className="text-[#2A254B] font-bold mt-4">Description</p>
          <p className="text-[#2A254B] mt-4 font-[clash] ">{data.description}</p>
          <div className="mt-4">
            <p className="text-[#2A254B]">Premium material</p>
            <p className="text-[#2A254B]">Handmade upholstery</p>
            <p className="text-[#2A254B]">Quality timeless classic</p>
          </div>

          {/* Dimensions Section */}
          <div className="mt-8">
            <p className="font-bold text-center">Dimensions</p>
            <div className="flex flex-wrap justify-start gap-4 mt-4 text-[#2A254B]">
              <div>
                <p>Height</p>
                <p className="font-semibold">{data.dimensions.height}</p>
              </div>
              <div>
                <p>Width</p>
                <p className="font-semibold">{data.dimensions.width}</p>
              </div>
              <div>
                <p>Depth</p>
                <p className="font-semibold">{data.dimensions.depth}</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            {/* Add to Cart Button */}
            <div className="flex justify-center md:justify-start mt-8">
              <button
                onClick={handleAddToCart}
                className="bg-[#2A254B] h-[56px] w-[143px] flex justify-center items-center text-white
                 hover:bg-[#3c3567] transition"
              >
                Add to Cart
              </button>
            </div>

            {/* Add to Wishlist Button */}
            <div className="flex justify-center md:justify-start mt-8">
              <button
                onClick={() => handleAddToWishList(data._id)}
                className="bg-[#2A254B] h-[56px] w-fit px-5 flex justify-center items-center text-white hover:bg-[#3c3567] transition"
              >
                {/* Heart Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill={wishlist.includes(data._id) ? "red" : "none"}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  />
                </svg>
                <span className="ml-2">Wishlist</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Components */}
      <div className="mt-12">
        <Ceramics heading="You might also like" />
        <Brand />
        <Club />
      </div>
    </>
  );
};

export default Page;
