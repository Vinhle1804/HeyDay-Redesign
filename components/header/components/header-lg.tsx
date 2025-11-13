"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { navItems } from "@/data/data";

export default function HeaderLg() {
  const [hide, setHide] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [active, setActive] = useState("about");

  // Cuộn đến section
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" });
  };

  // Ẩn/hiện header khi cuộn
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollY && currentScroll > 100) {
        setHide(true);
      } else {
        setHide(false);
      }

      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);


  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 150; 

      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActive(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy);
    handleScrollSpy()

    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  return (
    <header
      onMouseEnter={() => setHide(false)}
      onMouseLeave={() => setHide(true)}
      className={`fixed top-0 pt-[33px] left-0 w-full h-[125px] flex justify-center items-center backdrop-blur-md z-50 transition-transform duration-300 ${
        hide ? "-translate-y-[90%]" : "translate-y-0"
      }`}
    >
      <div className="flex container justify-between items-center gap-10">
        {/* Logo */}
        <div
          className="relative h-[95.31px] w-[150.46px] cursor-pointer"
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

        {/* Nav */}
        <div className="flex justify-center items-center w-[680px] h-full gap-[33px] text-transparent bg-clip-text bg-gradient-to-b from-[#FEFFBC] to-[#FFC671]">
          {navItems.map((item) => (
            <div
              key={item.id}
              className="relative flex items-center h-full justify-center px-6 py-2 whitespace-nowrap"
            >
              {active === item.id && (
                <div className="absolute w-[50px] h-20 left-[-5px]">
                  <Image src="/image/muitentrai.png" fill alt="arrow left"  />
                </div>
              )}

              <button
                onClick={() => {
                  scrollTo(item.id);
                  setActive(item.id);
                }}
                className={`font-roboto text-[20px] tracking-[0.13em] uppercase transition ${
                  active === item.id
                    ? "text-yellow-400"
                    : "text-[#FEFFBC] hover:text-yellow-500"
                }`}
              >
                {item.label}
              </button>

              {active === item.id && (
        <div className="absolute w-[50px] h-20 right-[-5px]">
                  <Image src="/image/muitenphai.png" fill alt="arrow left"  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="relative w-[216px] h-[62.41px] flex items-center justify-center">
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
          <p className="relative text-center uppercase text-[18px] font-[Cinzel] font-bold tracking-wider">
            Available Soon
          </p>
        </div>
      </div>
    </header>
  );
}
