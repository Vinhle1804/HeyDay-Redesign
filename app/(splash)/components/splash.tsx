"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import HomePage from "../../home/page";
import WelcomePage from "./welcome";

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
        <HomePage />
      </motion.div>
    );
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <div
        className="absolute inset-0 z-10 cursor-pointer"
        onClick={handleClick}
      >
        <WelcomePage />
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
