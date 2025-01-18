"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IoMdArrowDropdown } from "react-icons/io";
import Ceramics2 from "../component/ceramics2";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import product from "../component/product";

interface Product {
  _id: any;
  name: string;
  dimensions: string;
  description: string;
  imageUrl: string;
  slug: string;
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  // Fetch data from Sanity
  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"]{
       _id,
        name,
        dimensions{depth , height, width},
        description,
        "imageUrl": image.asset->url,
        "slug": slug.current
      }`;

      try {
        const data = await client.fetch(query);
        setProducts(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <>
      <div className="w-full">
        {/* Background Image */}
        <div className="w-full">
          <Image
            src="/bgframe.png"
            alt="bgframe"
            width={1440}
            height={209}
            className="w-full object-cover"
          />
        </div>

        {/* Filters and Sorting */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-3 md:px-20 p-3 md:text-base sm:text-sm text-xs">
          {/* Left Section: Filters */}
          <div className="flex flex-wrap gap-8 items-center justify-center md:justify-start w-full">
            <div className="flex items-center gap-2">
              <h1 className="font-normal">Category</h1>
              <IoMdArrowDropdown />
            </div>
            <div className="flex items-center gap-2">
              <h1 className="font-normal">Product type</h1>
              <IoMdArrowDropdown />
            </div>
            <div className="flex items-center gap-2">
              <h1 className="font-normal">Price</h1>
              <IoMdArrowDropdown />
            </div>
            <div className="flex items-center gap-2">
              <h1 className="font-normal">Brand</h1>
              <IoMdArrowDropdown />
            </div>
          </div>

          {/* Right Section: Sorting */}
          <div className="flex items-center gap-4 mt-4 md:mt-0 w-full md:w-auto justify-center md:justify-start">
            <h1 className="font-normal">Sorting by:</h1>
            <h1 className="font-normal">Date added</h1>
            <IoMdArrowDropdown />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {products.map((product, index) => (
          <Link href={`products/${product._id}`} key={index}>
            <div  className="p-4 border rounded shadow-lg">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={500}
                height={500}
                className="w-full h-48 object-cover mb-4"
              />
              <h2 className="text-lg font-bold">{product.name}</h2>
              <p className="text-sm text-gray-600">{product.description}</p>
              <span className="block mt-2 text-gray-700">
                Dimensions: {product.dimensions}
              </span>
            </div>
          </Link>
        ))}
     </div>
      <Ceramics2 />
    </>
  );
};

export default Products;
