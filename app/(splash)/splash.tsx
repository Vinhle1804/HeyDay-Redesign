"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import HomePage from "../home/page";

export default function Splash() {
  const [showTransition, setShowTransition] = useState(false);
  const [showHome, setShowHome] = useState(false);

  const handleAnimationComplete = () => {
    setShowHome(true);
    setShowTransition(false);
  };

  const handleClick = () => {
    setShowTransition(true);
  };

  if (showHome) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full h-full"
      >
   <HomePage/>

      </motion.div>
    );
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/*  Trang About */}
      <div className="absolute inset-0 z-10 cursor-pointer h-50 w-50 text-yellow-300" onClick={handleClick}>
<h1>click voo day</h1>
      </div>

      {/* Hiệu ứng zoom */}
      {showTransition && (
        <motion.div
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 50, opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          onAnimationComplete={handleAnimationComplete}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full z-50"
        />
      )}
    </div>
  );
}
