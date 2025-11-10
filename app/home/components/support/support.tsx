import Image from "next/image";
import { gameplayData } from "@/data/data";
import Dropdown from "./component/dropdown";

export default function Nhap() {
  // Chia đôi mảng
  const midpoint = Math.ceil(gameplayData.length / 2);
  const col1 = gameplayData.slice(0, midpoint);
  const col2 = gameplayData.slice(midpoint);

  return (
    <div id="support" className="relative w-full py-6 flex justify-center items-center overflow-hidden">
      <Image
        src="/image/bg-khoi.png"
        alt="HeyDay Background"
        fill
        quality={100}
        priority
        className="object-cover z-0 opacity-80"
      />

      <div className="relative z-10 flex flex-col  items-start gap-6 container">
        <div
          className="text-[50px] leading-[72px] uppercase font-normal font-[Cinzel]
          bg-linear-to-b from-[#FEFFBC] to-[#FFC671]
          text-transparent bg-clip-text"
        >
          Game play
        </div>

        {/* Grid dropdown */}
        <div className="lg:flex w-full gap-4">
          {/* Cột 1 */}
          <div className="flex  flex-col lg:w-1/2 gap-4">
            {col1.map((item, index) => (
              <Dropdown key={index} title={item.title} content={item.content} />
            ))}
          </div>

          {/* Cột 2 */}
          <div className="flex flex-col lg:w-1/2 gap-4">
            {col2.map((item, index) => (
              <Dropdown key={index} title={item.title} content={item.content} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
