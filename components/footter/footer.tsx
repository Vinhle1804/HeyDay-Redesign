import { social } from "@/data/data";
import Image from "next/image";

export default function Footer() {
  return (
    <div id="footer" className="relative w-full h-[] overflow-hidden bg-black">
      {/* Background */}
      <Image
        src="/image/bg-luachay.png"
        alt="HeyDay Background"
        fill
        quality={100}
        priority
        className="object-cover z-0"
      />

      {/* Main Content */}
      <div className="relative container z-10 flex flex-col items-center justify-center w-full py-16 md:py-24 px-4">
        {/* Title Section */}
        <div className="text-center mb-10 md:mb-14 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-[Cinzel]  bg-linear-to-b from-[#FEFFBC] to-[#FFC671]
             text-transparent bg-clip-text tracking-wide mb-6">
            GAMEXSTUDIO
          </h1>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 md:w-16 h-px bg-gradient-to-r from-transparent via-amber-500 to-amber-500"></div>
            <div className="w-3 h-3 bg-amber-500 rotate-45"></div>
            <div className="w-24 md:w-32 h-px bg-amber-500"></div>
            <div className="w-3 h-3 bg-amber-500 rotate-45"></div>
            <div className="w-12 md:w-16 h-px bg-gradient-to-l from-transparent via-amber-500 to-amber-500"></div>
          </div>

          {/* Description (đã chỉnh chính tả + đầy đủ câu) */}
          <p className="text-slate-300 text-sm md:text-base leading-relaxed px-2 font-[Montserrat]">
            Born from the fusion of BEENBOOM Labs’ innovative drive and EBIZWORLD’s expertise in narrative development,
            GameXStudio is where bold ideas and visionary gameplay converge — delivering immersive worlds, compelling
            storytelling, and forward-thinking interactive experiences.
          </p>
        </div>

        {/* Partner Logos */}
        <div className="flex flex-wrap items-center justify-center gap-8  md:gap-12 mb-20">
          {/* EBIZ */}
          <div className="relative h-[93.41px] w-[93.41px] flex flex-col items-center">
        <Image
        src="/image/logo-ebizworld.png"
        alt="HeyDay Background"
        fill
        quality={100}
        priority
        className="object-cover z-30"
      />
          </div>

 <div className="relative h-[93.41px] w-[93.41px] flex flex-col items-center">
        <Image
        src="/image/lapphuong.png"
        alt="HeyDay Background"
        fill
        quality={100}
        priority
        className="object-cover z-30"
      />
          </div>
           <div className="relative h-[44px] w-[148.23px] flex flex-col items-center">
        <Image
        src="/image/gamexstudio.png"
        alt="HeyDay Background"
        fill
        quality={100}
        priority
        className="object-cover z-30"
      />
          </div>


        </div>

        {/* Divider */}
        <div className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent mb-12"></div>

{/* Footer content sections */}
<div className="container flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between gap-12">

  {/* Logo & socials */}
  <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
    <div className="relative h-[117.5px] w-[117.5px] cursor-pointer">
      <Image
        src="/image/logo.png"
        alt="Logo"
        fill
        quality={100}
        priority
        className="object-contain"
      />
    </div>

    <div className="flex gap-3 mt-4">
      {social.map((item, index) => (
        <button key={index} className="relative w-[51.7px] h-[47px] flex items-center justify-center">
          <Image
            src={item.src}
            alt={item.alt}
            fill
            quality={100}
            priority
            className="object-contain"
          />
        </button>
      ))}
    </div>
  </div>

  {/* Column sections */}
  {["GAME", "DOWNLOAD NOW", "RESOURCE"].map((title, i) => (
    <div key={i} className="text-center lg:text-left">
      <h3 className="text-amber-500 font-semibold mb-3 tracking-wider">{title}</h3>
      <ul className="space-y-2 text-slate-300 text-sm">
        {title === "GAME" &&
          ["About", "Game Features", "News & Updates"].map((item) => (
            <li key={item} className="hover:text-amber-400 cursor-pointer transition-colors">
              {item}
            </li>
          ))}

        {title === "DOWNLOAD NOW" &&
          ["Android", "iOS", "Mac", "PC"].map((item) => (
            <li key={item} className="hover:text-amber-400 cursor-pointer transition-colors">
              {item}
            </li>
          ))}

        {title === "RESOURCE" &&
          ["Whitepaper", "Terms & Conditions", "Privacy Policy"].map((item) => (
            <li key={item} className="hover:text-amber-400 cursor-pointer transition-colors">
              {item}
            </li>
          ))}
      </ul>
    </div>
  ))}
</div>

      </div>
    </div>
  );
}
