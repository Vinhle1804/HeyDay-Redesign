"use client";
import { useState } from "react";
import Image from "next/image";
import { gamefiSections } from "@/data/data";

export default function GamefiMechanism() {
  const [activeTitle, setActiveTitle] = useState(gamefiSections[0].title);


  const currentSection =
    gamefiSections.find((items) => items.title === activeTitle) ||
    gamefiSections[0];


  return (
    <div className="relative w-full h-[696px] overflow-hidden bg-black">
      <Image
        src="/image/bg2.png"
        alt="HeyDay Background"
        fill
        quality={100}
        priority
        className="object-cover z-0 opacity-80"
      />

      <div className="relative z-10 flex items-center justify-center w-full h-[418.72px] ">
        <div className="text-white w-[579px] h-[267.36px] top-[65px]">
          <p
            className="text-[50px] leading-[72px] uppercase font-normal font-[Cinzel] 
             bg-linear-to-b from-[#FEFFBC] to-[#FFC671] 
             text-transparent bg-clip-text start"
          >
            GameFi Mechanism
          </p>

          <p
            className="text-[40px] leading-14 uppercase font-normal font-[Cinzel]
             bg-linear-to-b from-[#FEFFBC] to-[#FFC671]
             text-transparent bg-clip-text"
          >
            {currentSection.title}
          </p>
          <p
           className="text-[24px] leading-10 font-normal font-[Montserrat] text-white"
          >
            {currentSection.description}
          </p>
        </div>

        <div className="relative w-[672px] h-[418.72px] top-[17px]">
          <Image
            src={currentSection.mainImageUrl}
            alt={currentSection.title}
            fill
            className="object-contain transition-opacity"
          />
        </div>
      </div>

      <div className="flex justify-center gap-5 mt-7">
        {gamefiSections.map((items, index) => (
          <div
            key={index} 
            onClick={() => setActiveTitle(items.title)} 
            className={`
                            relative w-[174.01px] md:h-[166.65px] cursor-pointer 
                            
                            ${
                              activeTitle === items.title
                                ? " scale-120"
                                : "opacity-70 hover:opacity-100"
                            }
                        `}
          >
            <Image
              src={items.src}
              alt={items.title}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
