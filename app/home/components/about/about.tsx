import Image from "next/image";
import { platform, social } from "@/data/data";
import Header from "@/components/header/header";



export default function About() {
  return (
    <div id="about" className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* Ảnh nền */}
      <Image
        src="/image/bg.png"
        alt="HeyDay Background"
        fill
        quality={100}
        priority
        className="object-cover z-0"
      />
<Header/>
      {/* Thanh social bên trái */}
      <div className="absolute flex items-center z-10 justify-between md:top-[89%] md:left-[25%] md:gap-10  lg:top-[31%] lg:left-[7.29%] lg:w-[7.445%] lg:h-[412px] lg:flex-col ">
        {social.map((item, index) => {
          return (
            <div key={index} className="relative md:w-[88px] md:h-20">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-contain"
              />
            </div>
          );
        })}
      </div>

      {/* Nội dung trung tâm */}
      <div className="relative z-20 flex flex-col items-center min-h-screen ">
        <div
          className="absolute left-1/2 -translate-x-1/2 
                w-[250px] h-[250px] 
                md:w-[50%] md:h-[60%] md:top-[-15%] 
                lg:w-[28.48%] lg:h-[50.6%] lg:top-[5.78%]"
        >
          <Image
            src="/image/lightball.png"
            alt="light ball"
            fill
            className="object-contain"
          />
        </div>

        {/* Logo chữ */}
        <div className="absolute w-[300px] h-[120px] md:w-[35.93%] md:h-[26.11%] md:top-[19%] lg:top-[43.18%]">
          <Image
            src="/image/logoheyday.png"
            alt="HeyDay Text Logo"
            fill
            className="object-contain"
          />
        </div>

        <div className="absolute flex justify-center items-center md:w-[75.6%] md:h-[16.88%] md:top-[40.94%] lg:top-[64.94%] ">
          <Image
            src="/image/light.png"
            alt="light"
            fill
            quality={100}
            priority
            className="object-cover z-1"
          />
          <p
            className="font-[Cinzel] text-[56px] text-center font-extrabold md:text-amber-500 lg:text-black"
          >
            RISE & CONQUER
          </p>
        </div>

        {/* Nút nền tảng */}
        <div className="absolute flex md:top-[78.73%] md:h-[7.03%] md:gap-2 lg:top-[78.73%]">
          {platform.map((item, index) => (
            <div
              key={index}
              className="flex flex-1 items-center justify-center md:py-2.5 md:px-5 md:gap-2.5"
            >
              <div className="relative flex items-center justify-center md:w-14 md:h-14">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-contain brightness-0"
                />
              </div>
              <p className="text-black uppercase whitespace-nowrap md:font-bold md:text-base ">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
