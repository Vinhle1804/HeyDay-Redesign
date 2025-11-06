import Image from "next/image";
import Dropdown from "./component/dropdown";
import { gameplayData } from "@/data/data";
import Header from "@/components/header/header";

export default function Nhap() {
  // Chia đôi mảng
  const midpoint = Math.ceil(gameplayData.length / 2);
  const col1 = gameplayData.slice(0, midpoint);
  const col2 = gameplayData.slice(midpoint);

  return (
<div>
    <Header/>
    <div className="relative w-full h-[782px] flex justify-center items-center overflow-hidden">
      <Image
        src="/image/bg-khoi.png"
        alt="HeyDay Background"
        fill
        quality={100}
        priority
        className="object-cover z-0 opacity-80"
      />

      <div className="relative z-10 flex flex-col items-start gap-6">
        <div
          className="text-[50px] leading-[72px] uppercase font-normal font-[Cinzel]
          bg-linear-to-b from-[#FEFFBC] to-[#FFC671]
          text-transparent bg-clip-text"
        >
          Game play
        </div>

        {/* Grid dropdown */}
        <div className="flex gap-[16.51px]">
          {/* Cột 1 */}
          <div className="flex flex-col gap-4">
            {col1.map((item, index) => (
              <Dropdown key={index} title={item.title} content={item.content} />
            ))}
          </div>

          {/* Cột 2 */}
          <div className="flex flex-col gap-4">
            {col2.map((item, index) => (
              <Dropdown key={index} title={item.title} content={item.content} />
            ))}
          </div>
        </div>
      </div>
    </div>
</div>
  );
}
