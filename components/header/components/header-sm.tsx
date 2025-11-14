"use client";

import { useState, useEffect } from "react";
import MobileMenu from "./mobile-menu";
import Image from "next/image";

export default function HeaderSm() {
  const [hide, setHide] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // Scroll xuống → ẩn
      if (currentY > lastScrollY && currentY > 80) {
        setHide(true);
      } else {
        // Scroll lên → hiện
        setHide(false);
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className="relative">
      <div
        className={`
          fixed top-0 left-0 z-50 lg:hidden w-full 
          bg-transparent backdrop-blur-md px-5
          h-20 md:h-25 flex items-center transition-transform duration-300
          ${hide ? "-translate-y-full" : "translate-y-0"}
        `}
      >
        {/* Cột trái: để trống */}
        <div className="w-10 md:w-25"></div>

        {/* Logo giữa */}
        <div
          className="mx-auto relative h-20 w-20 md:w-25 md:h-25 cursor-pointer"
          onClick={() => scrollTo("about")}
        >
          <Image
            src="/image/logo.png"
            alt="Logo"
            fill
            quality={100}
            priority
            className="object-contain"
          />
        </div>

        {/* Menu bên phải */}
        <div className="w-auto flex justify-end items-center">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
