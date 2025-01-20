"use client";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";

interface Product {
  _id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  dimensions: {
    depth: string;
    height: string;
    width: string;
  };
  slug: string;
}

const Wishlist = () => {
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);

  // Initialize wishlist from localStorage
  useEffect(() => {
    const initializeWishlist = () => {
      const storedWishlist = localStorage.getItem("wishlist");
      if (storedWishlist) {
        setWishlist(JSON.parse(storedWishlist));
      }
    };
    initializeWishlist();
  }, []);

  // Fetch wishlist items from Sanity
  useEffect(() => {
    const fetchProducts = async () => {
      if (wishlist.length === 0) return;

      try {
        const query = `*[_type=="product" && _id in $ids] {
          _id,
          name,
          price,
          description,
          "image": image.asset->url,
          dimensions,
          slug
        }`;
        const productData = await client.fetch(query, { ids: wishlist });
        setWishlistItems(productData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [wishlist]);

  // Remove item from wishlist
  const handleRemove = (id: string) => {
    const updatedWishlist = wishlist.filter((itemId) => itemId !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-blue-900">
        Your Wishlist
      </h3>
      <div className="space-y-6">
        {wishlistItems.length > 0 ? (
          wishlistItems.map((item) => (
            <div
              key={item._id}
              className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-lg p-4 space-y-4 md:space-y-0 md:space-x-4"
            >
              {/* Image Section */}
              <div className="flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.name || "Product Image"}
                  height={120}
                  width={120}
                  className="rounded-md object-contain"
                />
              </div>

              {/* Content Section */}
              <div className="flex-grow text-center md:text-left">
                <h5 className="text-lg md:text-xl font-semibold text-gray-800">
                  {item.name || "Unnamed Product"}
                </h5>
                <h5 className="text-md md:text-lg font-medium text-gray-600 mt-2">
                  $ {item.price}
                </h5>
              </div>

              {/* Button Section */}
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors text-sm md:text-base"
                onClick={() => handleRemove(item._id)}
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-600">
            <h4 className="text-xl md:text-2xl font-semibold">
              Your Wishlist is empty!
            </h4>
            <p className="mt-2">Add items to your wishlist to see them here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
