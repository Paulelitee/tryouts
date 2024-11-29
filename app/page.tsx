"use client";

import AddToCart from "./svgComponents/AddToCart";
import Checkout from "./svgComponents/Checkout";
import { useState } from "react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import ProgressBar from "./svgComponents/components/ProgressBar";
import ControlButton from "./svgComponents/components/ControlButton";

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
    <div className="flex flex-col gap-10 justify-center items-center h-screen p-10">
      <ProgressBar />
    </div>
  );
}
