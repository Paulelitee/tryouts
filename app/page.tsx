"use client";


import { useState } from "react";
import ProgressBar from "./svgComponents/components/ProgressBar";

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
