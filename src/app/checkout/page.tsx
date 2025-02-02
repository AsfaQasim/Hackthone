"use client";
import { useState } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RootState } from "../Cart/redux/store";
import { client } from "@/sanity/lib/client";
import { CartItem } from "../Cart/redux/cartslice";

export default function CheckoutPage() {
  const cartItems: CartItem[] = useSelector(
    (state: RootState) => state.cart.items
  );
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zipCode: "",
    phone: "",
    email: "",
  });
  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    address: false,
    city: false,
    zipCode: false,
    phone: false,
    email: false,
  });

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (total: number, item: CartItem) =>
      total + item.price * (item.quantity || 1),
    0
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
    setFormErrors({
      ...formErrors,
      [e.target.id]: false, // Clear the error when the user types
    });
  };

  const validateForm = () => {
    let valid = true;
    let errors = { ...formErrors };

    // Check for empty fields
    Object.keys(formValues).forEach((field) => {
      if (!formValues[field as keyof typeof formValues]) {
        errors[field as keyof typeof formErrors] = true;
        valid = false;
      }
    });

    setFormErrors(errors);
    return valid;
  };

  const handlePlaceOrder = async () => {
    // Validation check
    if (!validateForm()) {
      toast.error("Please fill in all the required fields.");
      return;
    }

    // Check if cart is empty
    if (cartItems.length <= 0) {
      toast.error("Your cart is empty.");
      return;
    }

    // Log cartItems for debugging
    console.log("Cart Items:", JSON.stringify(cartItems, null, 2));

    // Prepare cartItems with valid references
    const cartItemsWithReferences = cartItems.map((item) => {
      // Ensure item._id is a string
      const itemId = item._id;

      if (!itemId) {
        console.error("Missing _id in cart item:", item);
        toast.error("Invalid product in cart. Please try again.");
        throw new Error("Invalid product in cart.");
      }

      return {
        _type: "reference",
        _ref: itemId,
      };
    });

    console.log(
      "Cart Items with References:",
      JSON.stringify(cartItemsWithReferences, null, 2)
    );

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

    console.log("Order Data:", JSON.stringify(orderData, null, 2));

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
                    src={item.image || "/default-image.jpg"} 
                    alt={item.name || "Product Image"} 
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
                className={`w-full p-2 border rounded mt-2 ${formErrors.firstName ? "border-red-500" : ""}`}
                placeholder="Enter your first name"
                required
              />
              {formErrors.firstName && <p className="text-red-500">First name is required.</p>}
            </div>
            <div className="mt-4">
              <label htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                value={formValues.lastName}
                onChange={handleInputChange}
                className={`w-full p-2 border rounded mt-2 ${formErrors.lastName ? "border-red-500" : ""}`}
                placeholder="Enter your last name"
                required
              />
              {formErrors.lastName && <p className="text-red-500">Last name is required.</p>}
            </div>
            <div className="mt-4">
              <label htmlFor="address">Address</label>
              <input
                id="address"
                value={formValues.address}
                onChange={handleInputChange}
                className={`w-full p-2 border rounded mt-2 ${formErrors.address ? "border-red-500" : ""}`}
                placeholder="Enter your address"
                required
              />
              {formErrors.address && <p className="text-red-500">Address is required.</p>}
            </div>
            <div className="mt-4">
              <label htmlFor="city">City</label>
              <input
                id="city"
                value={formValues.city}
                onChange={handleInputChange}
                className={`w-full p-2 border rounded mt-2 ${formErrors.city ? "border-red-500" : ""}`}
                placeholder="Enter your city"
                required
              />
              {formErrors.city && <p className="text-red-500">City is required.</p>}
            </div>
            <div className="mt-4">
              <label htmlFor="zipCode">Zip Code</label>
              <input
                id="zipCode"
                value={formValues.zipCode}
                onChange={handleInputChange}
                className={`w-full p-2 border rounded mt-2 ${formErrors.zipCode ? "border-red-500" : ""}`}
                placeholder="Enter your zip code"
                required
              />
              {formErrors.zipCode && <p className="text-red-500">Zip code is required.</p>}
            </div>
            <div className="mt-4">
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                value={formValues.phone}
                onChange={handleInputChange}
                className={`w-full p-2 border rounded mt-2 ${formErrors.phone ? "border-red-500" : ""}`}
                placeholder="Enter your phone number"
                required
              />
              {formErrors.phone && <p className="text-red-500">Phone number is required.</p>}
            </div>
            <div className="mt-4">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                value={formValues.email}
                onChange={handleInputChange}
                className={`w-full p-2 border rounded mt-2 ${formErrors.email ? "border-red-500" : ""}`}
                placeholder="Enter your email address"
                required
              />
              {formErrors.email && <p className="text-red-500">Email is required.</p>}
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
