import Image from "next/image";

const platform: {
  src: string;
  alt: string;
  text: string;
}[] = [
  { src: "/image/android.png", alt: "android", text: "android" },
  { src: "/image/IOS.png", alt: "IOS", text: "ios" },
  { src: "/image/mac.png", alt: "mac", text: "mac" },
  { src: "/image/pc.png", alt: "pc", text: "pc" },
  {
    src: "/image/boardgame.png",
    alt: "boardgame",
    text: "board game",
  },
];

const social: {
  src: string;
  alt: string;
}[] = [
  { src: "/image/x.png", alt: "x" },
  { src: "/image/tele.png", alt: "tele" },
  { src: "/image/dis.png", alt: "discord" },
  { src: "/image/fb.png", alt: "fb" },
];

export default function Home() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* Ảnh nền */}
      <Image
        src="/image/bg.png"
        alt="HeyDay Background"
        fill
        quality={100}
        priority
        className="object-cover z-0"
      />

      {/* Thanh social bên trái */}
      <div className="absolute flex flex-col items-center justify-between top-[334px] left-[140px] z-10 w-[142.96px] h-[412px]">
        {social.map((item, index) => {
          return (
            <div key={index} className="relative w-[88px] h-[80px]">
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
      <div className="relative z-20 flex flex-col items-center justify-center text-center">
        <div className="absolute w-[250px] h-[250px] md:w-[547px] md:h-[547px] top-[62.44px]">
          <Image
            src="/image/lightball.png"
            alt="light ball"
            fill
            className="object-contain"
          />
        </div>

        {/* Logo chữ */}
        <div className="absolute w-[300px] h-[120px] md:w-[690px] md:h-[282px] top-[466.44px]">
          <Image
            src="/image/logoheyday.png"
            alt="HeyDay Text Logo"
            fill
            className="object-contain"
          />
        </div>

        <div className="absolute flex items-center md:w-[1,451.71px] h-[182.37px] top-[701.44px] ">
          <p className=" md:text-[56px] font-bold text-black">RISE & CONQUER</p>
        </div>

        {/* Nút nền tảng */}
        <div className="absolute top-[850px] flex h-[76px] gap-2">
          {platform.map((item, index) => (
            <div
              key={index}
              className="flex flex-1 items-center justify-center py-2.5 px-5 gap-2.5"
            >
              <div className="relative flex items-center justify-center w-[56px] h-[56px]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-black font-bold text-base uppercase whitespace-nowrap">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
