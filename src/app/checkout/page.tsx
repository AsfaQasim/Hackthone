"use client";
import { useState } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RootState } from "../Cart/redux/store";
import { client } from "@/sanity/lib/client";

export default function CheckoutPage() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zipCode: "",
    phone: "",
    email: "",
  });

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (total: number, item: { price: number; quantity: number }) =>
      total + item.price * (item.quantity || 1),
    0
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };
  const handlePlaceOrder = async () => {
    // Validation check
    if (!formValues.firstName || !formValues.lastName || !formValues.address) {
      toast.error("Please fill in all the required fields.");
      return;
    }
  
    // Prepare cartItems with valid references
    const cartItemsWithReferences = cartItems.map((item) => {
      if (!item._id || (typeof item._id !== 'string' && typeof item._id !== 'number')) {
        console.error("Invalid _id in cart item:", item);
        toast.error("Invalid product in cart. Please try again.");
        throw new Error("Invalid product in cart.");
      }
      return {
        _type: "reference",
        _ref: String(item._id), 
      };
    });
  
    const orderData = {
      _type: "order",
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      address: formValues.address,
      city: formValues.city,
      zipCode: formValues.zipCode,
      phone: formValues.phone,
      email: formValues.email,
      cartItems: cartItemsWithReferences,
      total: subtotal,
      discount: 0,
      orderDate: new Date().toISOString(),
    };
  
    try {
      const response = await client.create(orderData);
      console.log("Order created successfully:", response);
      localStorage.removeItem("appliedDiscount");
      toast.success("Order placed successfully!");
    } catch (error) {
      console.error("Error creating order:", error);
      toast.error("Failed to place order. Please try again.");
    }
  };
  

  return (
    <div className="min-h-screen bg-gray-50">
      <ToastContainer />
      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">Checkout</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Order Summary */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div key={item._id} className="flex items-center mb-4">
                  <Image
                    src={item.image || "/default-image.jpg"} // Fallback for missing image
                    alt={item.name || "Product Image"} // Fallback for missing name
                    width={60}
                    height={60}
                    className="rounded-md"
                  />
                  <div className="ml-4">
                    <p>{item.name || "Unnamed Product"}</p>
                    <p>Price: ${item.price?.toFixed(2) || "0.00"}</p>
                    <p>Qty: {item.quantity || 1}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>Your cart is empty.</p>
            )}
            <p className="font-bold">
              Subtotal: ${subtotal.toFixed(2) || "0.00"}
            </p>
          </div>

          {/* Billing Info */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4">Billing Info</h3>
            <div>
              <label htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                value={formValues.firstName}
                onChange={handleInputChange}
                className="w-full p-2 border rounded mt-2"
                placeholder="Enter your first name"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                value={formValues.lastName}
                onChange={handleInputChange}
                className="w-full p-2 border rounded mt-2"
                placeholder="Enter your last name"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="address">Address</label>
              <input
                id="address"
                value={formValues.address}
                onChange={handleInputChange}
                className="w-full p-2 border rounded mt-2"
                placeholder="Enter your address"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="city">City</label>
              <input
                id="city"
                value={formValues.city}
                onChange={handleInputChange}
                className="w-full p-2 border rounded mt-2"
                placeholder="Enter your city"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="zipCode">Zip Code</label>
              <input
                id="zipCode"
                value={formValues.zipCode}
                onChange={handleInputChange}
                className="w-full p-2 border rounded mt-2"
                placeholder="Enter your zip code"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                value={formValues.phone}
                onChange={handleInputChange}
                className="w-full p-2 border rounded mt-2"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                value={formValues.email}
                onChange={handleInputChange}
                className="w-full p-2 border rounded mt-2"
                placeholder="Enter your email address"
              />
            </div>
            <button
              className="bg-[#2A254B] text-white w-full py-3 rounded-lg mt-4 hover:bg-[#3c3567]"
              onClick={handlePlaceOrder}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}