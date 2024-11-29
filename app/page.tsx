"use client";

import AddToCart from "./svgComponents/AddToCart";
import Checkout from "./svgComponents/Checkout";
import { useState } from "react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";

export default function Home() {
  const [cartTitle, setCartTitle] = useState("add to cart");

 
    function handleClick() {
      if (cartTitle === "add to cart") {
        setCartTitle("checkout");
      } else {
        setCartTitle("add to cart");
      }
    }
    

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={handleClick}
        className={`${cartTitle === "checkout" ? "bg-yellow-500 text-black hover:bg-yellow-700 border-none hover:text-white" : ""} h-12 pl-8 capitalize flex items-center border border-zinc-700 rounded hover:bg-zinc-900 transition-all duration-300 relative overflow-hidden w-44`}
      >
        {/* Icon Wrapper */}
        <div className="relative w-10 h-10 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={cartTitle + "-icon"}
              initial={{ y: "-100%" }}
              animate={{ y: "0%" }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.3, easing: easeInOut }}
              className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
            >
              {cartTitle === "checkout" ? (
                <Checkout fill="currentColor" width="20px" height="20px" />
              ) : (
                <AddToCart fill="transparent" stroke="currentColor" width="20px" height="20px" />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Text Wrapper */}
        <div className="relative w-full h-5 text-left pl-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={cartTitle}
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.1, easing: easeInOut }}
              className="absolute top-0 left-0 w-full text-left"
            >
              {cartTitle}
            </motion.div>
          </AnimatePresence>
        </div>
      </button>
    </div>
  );
}
