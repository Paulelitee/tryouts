"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { easeInOut, motion } from "framer-motion";

// Define the type for the form data
type FormOneData = {
  fullName: string;
  email: string;
  phone: string;
};

const inputClass = 'bg-zinc-950 w-full mt-1 p-2 border rounded border-zinc-600 focus:outline-none'

// Define the props for the FormOne component
type FormOneProps = {
  onNext: (data: FormOneData) => void; // Function type for the onNext prop
};

export default function FormOne({ onNext }: FormOneProps) {


    const [top, setTop] = useState('10px')

  // Initialize React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormOneData>(); // Explicitly set the form data type

  // Handle form submission
  const onSubmit = (data: FormOneData) => {
    console.log("Form One Data:", data);
    onNext(data); // Pass data to parent component to proceed to the next step
  };

  return (
    <div className="w-full mx-auto p-6 ">
      <h1 className="text-xl font-bold mb-4">Personal Information</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Full Name */}
        <div className="mb-4 relative">
          <motion.label
            transition={{
                duration: 0.5,
                easings: easeInOut,
                delay: 0.2
            }}
            style={{top: top}}
            htmlFor="fullName"
            className="floating-label  bg-zinc-950 text-sm font-medium">
            Full Name
          </motion.label>
          <input
            onFocus={() => setTop('-10px')}
            onBlurCapture={() => setTop('10px')}
            type="text"
            id="fullName"
            {...register("fullName", { required: "Full name is required" })}
            className={`${inputClass} ${
              errors.fullName ? "border-red-500" : null
            }`}
          />
          {errors.fullName && (
            <p className="text-sm text-red-500 mt-1">{errors.fullName.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
            })}
            className={`${inputClass} ${
              errors.email ? "border-red-500" : null
            }`}
          />
          {errors.email && (
            <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10,15}$/,
                message: "Enter a valid phone number",
              },
            })}
            className={`${inputClass} ${
              errors.phone ? "border-red-500" : null
            }`}
          />
          {errors.phone && (
            <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Next Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Next
        </button>
      </form>
    </div>
  );
}
