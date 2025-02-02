"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Ceramics from "../../component/ceramics";
import Brand from "../../component/brand";
import Club from "../../component/club";
import { client } from "@/sanity/lib/client";
import { useDispatch } from "react-redux";
import Loader from "@/app/component/loader";
import { add } from "@/app/Cart/redux/cartslice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  dimensions?: {
    depth?: string;
    height?: string;
    width?: string;
  };
  slug: string;
  quantity: number;
  inventory?: number;
}

const Page = ({ params }: { params: { product: string } }) => {
  const { product } = params;
  const [data, setData] = useState<Product | null>(null);
  const dispatch = useDispatch();

  // Load wishlist from localStorage if it exists
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedWishlist = localStorage.getItem("wishlist");
      if (storedWishlist) {
        // wishlist is set but not used in this component
        console.log("Wishlist loaded from localStorage", JSON.parse(storedWishlist));
      }
    }
  }, []);

  // Fetch product data from Sanity
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const query = `*[_type=="product" && _id == $ids][0] {
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

        if (productData) {
          setData(productData);
        } else {
          console.error("Product not found");
          toast.error("Product not found.");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
        toast.error("Failed to fetch product details.");
      }
    };

    fetchProduct();
  }, [product]);

  const handleAddToCart = () => {
    if (!data) {
      toast.error("Product data is not available.");
      return;
    }

    if (data.inventory && data.quantity >= data.inventory) {
      toast.error("Out of stock.");
      return;
    }

    const cartItem = {
      _id: data._id,
      title: data.name,
      price: data.price,
      image: data.image,
      quantity: 1,
      name: data.name,
      description: data.description,
    };

    dispatch(add(cartItem));
    toast.success("Item added to cart!");
  };

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <div className="min-h-[70vh] w-full flex flex-col md:flex-row items-center justify-center px-4 sm:px-8 lg:px-16 py-8">
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={data.image || "/default-image.jpg"}
            alt={data.name || "Product Image"}
            width={721}
            height={759}
            className="object-contain"
            priority
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-start text-left px-4 sm:px-8 py-8">
          <h1 className="font-normal text-[28px] sm:text-[36px] text-[#2A254B]">{data.name}</h1>
          <p className="font-normal text-[20px] sm:text-[24px] text-left">${data.price}</p>

          <p className="text-[#2A254B] font-bold mt-4">Description</p>
          <p className="text-[#2A254B] mt-4 font-[clash]">{data.description}</p>

          <div className="mt-4">
            <p className="text-[#2A254B]">Premium material</p>
            <p className="text-[#2A254B]">Handmade upholstery</p>
            <p className="text-[#2A254B]">Quality timeless classic</p>
          </div>

          <div className="mt-8">
            <p className="font-bold text-center">Dimensions</p>
            <div className="flex flex-wrap justify-start gap-4 mt-4 text-[#2A254B]">
              {data.dimensions?.height && (
                <div>
                  <p>Height</p>
                  <p className="font-semibold">{data.dimensions.height}</p>
                </div>
              )}
              {data.dimensions?.width && (
                <div>
                  <p>Width</p>
                  <p className="font-semibold">{data.dimensions.width}</p>
                </div>
              )}
              {data.dimensions?.depth && (
                <div>
                  <p>Depth</p>
                  <p className="font-semibold">{data.dimensions.depth}</p>
                </div>
              )}
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex justify-center md:justify-start mt-8">
              <button
                onClick={handleAddToCart}
                className="bg-[#2A254B] h-[56px] w-[143px] flex justify-center items-center text-white hover:bg-[#3c3567] transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <Ceramics heading="You might also like" />
        <Brand />
        <Club />
      </div>
    </>
  );
};

export default Page;
