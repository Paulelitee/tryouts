"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { easeIn, easeInOut, motion } from "framer-motion";

// Define the type for the form data
type FormOneData = {
  fullName: string;
  email: string;
  phone: string;
};

const inputClass =
  "bg-zinc-950 w-full mt-2 py-3 px-4 border rounded border-zinc-600 focus:outline-none focus:border-teal-500";

// Define the props for the FormOne component
type FormOneProps = {
  onNext: (data: FormOneData) => void; // Function type for the onNext prop
};

export default function FormOne({ onNext }: FormOneProps) {
  // Initialize React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormOneData>(); // Explicitly set the form data type

  // Watch for input values
  const fullName = watch("fullName", "");

  // Handle form submission
  const onSubmit = (data: FormOneData) => {
    console.log("Form One Data:", data);
    onNext(data); // Pass data to parent component to proceed to the next step
  };

  return (
    <div className="w-full mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Full Name */}
        <div className="relative mb-4">
          <motion.label
            transition={{
              duration: 0.8,
              ease: easeInOut
              
            }}
            htmlFor="fullName"
            className={`absolute left-3 transition-all ${
              fullName
                ? "-top text-xs text-teal-500 bg-zinc-950 px-2 left-0 mx-2"
                : "top-6 text-sm text-zinc-500 left-4"
            }`}
          >
            Full Name
          </motion.label>
          <input
            type="text"
            id="fullName"
            {...register("fullName", { required: "Full name is required" })} // Register with React Hook Form
            className={`${inputClass} ${
              errors.fullName ? "border-red-500" : ""
            }`}
          />
          {errors.fullName && (
            <p className="text-sm text-red-500 mt-1">{errors.fullName.message}</p>
          )}
        </div>
      </form>
    </div>
  );
}
