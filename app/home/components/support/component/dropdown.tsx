"use client";
import Image from "next/image";
import { useState } from "react";
import gocSp from "../../../../../public/image/goc-sp.svg";

interface DropdownProps {
  title: string;
  content: string;
}

export default function Dropdown({ title, content }: DropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full bg-transparent ">
      <div
        onClick={() => setOpen(!open)}
        className={`relative flex flex-col justify-between items-center p-6 border border-yellow-600 cursor-pointer font-semibold
        }`}
      >
        <Image
          src={gocSp}
          alt="top-left"
          width={40}
          height={40}
          className="absolute top-0 left-0 rotate-270"
        />
        <Image
          src={gocSp}
          alt="top-right"
          width={40}
          height={40}
          className="absolute top-0 right-0"
        />

        <Image
          src={gocSp}
          alt="bottom-left-content"
          width={40}
          height={40}
          className="absolute bottom-0 left-0 rotate-180"
        />
        <Image
          src={gocSp}
          alt="bottom-right-content"
          width={40}
          height={40}
          className="absolute bottom-0 right-0 rotate-90"
        />
        <div className="flex justify-between w-full">
          <span className="font-cinzel font-normal text-[22px] leading-[33px] tracking-[-0.02em] uppercase bg-linear-to-r from-[#FEFFBC] to-[#FFC671] bg-clip-text text-transparent">
            {title}
          </span>

          <span
            className={`hidden sm:block relative w-[33px] h-[31px] transition-transform ${
              open ? "rotate-180" : ""
            }`}
          >
            <Image src="/image/downcrop-button.svg" alt="arrow-icon" fill />
          </span>
        </div>

        {open && (
          <p className="font-montserrat font-normal pt-6 text-[13.76px] leading-[22.01px] tracking-[0] text-white">
            {content}
          </p>
        )}
      </div>
    </div>
  );
}
