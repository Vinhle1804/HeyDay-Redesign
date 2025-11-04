import Image from "next/image";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function Support() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* Ảnh nền */}
      <Image
        src="/image/bg-khoi.png"
        alt="HeyDay Background"
        fill
        quality={100}
        priority
        className="object-cover z-0"
      />


    </div>
  );
}
