"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const [hide, setHide] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // nếu scroll xuống → ẩn
      if (currentScroll > lastScrollY && currentScroll > 100) {
        setHide(true);
      } else {
        // scroll lên → hiện
        setHide(false);
      }

      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 pt-[33px]left-0 w-full h-[125.31px] flex justify-center items-center backdrop-blur-md z-50 transition-transform duration-300 ${
        hide ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="flex w-[1172px] justify-between items-center gap-10">

        {/* Logo */}
        <div className="relative h-[95.31px] w-[150.46px] cursor-pointer" onClick={() => scrollTo("about")}>
          <Image
            src="/image/logo.png"
            alt="Logo"
            fill
            quality={100}
            priority
            className="object-contain"
          />
        </div>

        {/* Nav */}
        <div className="flex justify-center items-center w-[680px] h-full gap-[33px]  bg-linear-to-b from-[#FEFFBC] to-[#FFC671]
             text-transparent bg-clip-text">
          <button onClick={() => scrollTo("about")} className="font-roboto text-[20px] tracking-[0.13em] uppercase hover:text-yellow-500 transition">About</button>
          <button onClick={() => scrollTo("feature")} className="font-roboto text-[20px] tracking-[0.13em] uppercase hover:text-yellow-500 transition">Game features</button>
          <button onClick={() => scrollTo("support")} className="font-roboto text-[20px] tracking-[0.13em] uppercase hover:text-yellow-500 transition">community</button>
          <button onClick={() => scrollTo("footer")} className="font-roboto text-[20px] tracking-[0.13em] uppercase hover:text-yellow-500 transition">support</button>
        </div>

        {/* Button */}
        <div className=" relative w-[216px] h-[62.41px] flex items-center justify-center">
      <Image
            src="/image/chieuchi.png"
            alt="Logo"
            fill
            quality={100}
            priority
            className="object-contain"
          />
                <Image
            src="/image/hoavanchieuchi.png"
            alt="Logo"
            fill
            quality={100}
            priority
            className="object-contain"
          />
<p className="relative  text-center uppercase text-[18px] font-[Cinzel] font-bold tracking-wider ">Available Soon</p>
        </div>
      </div>
    </header>
  );
}
