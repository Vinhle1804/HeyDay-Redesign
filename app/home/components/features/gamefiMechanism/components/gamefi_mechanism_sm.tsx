"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { gamefiSections } from "@/data/data";

export default function GamefiMechanism() {
  return (
    <div id="gamefi" className="w-full h-[750px] lg:h-[850px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500 }}
        loop={true}
        className="w-full h-full"
      >
        {gamefiSections.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">

              {/* Ảnh nền lớn */}
              <Image
                src="/image/bg2.png"
                alt={item.title}
                fill
                className="object-cover"
              />


              {/* Nội dung */}
              <div className="relative z-10 text-center max-w-[700px] lg:max-w-[900px] px-6 lg:px-12">
                
                <h2   className="text-[50px] leading-[72px] uppercase font-normal font-[Cinzel] 
             bg-linear-to-b from-[#FEFFBC] to-[#FFC671] 
             text-transparent bg-clip-text start">
                  {item.title}
                </h2>
                <p  className="text-[24px] leading-10 font-normal font-[Montserrat] text-white">
                  {item.description}
                </p>

                {/* Ảnh đại diện nhỏ */}
                <div className="flex justify-center mt-4 lg:mt-6">
                  <div className="relative w-[380px] h-[380px]">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
