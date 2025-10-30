import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black">
      <Image
        src="/image/bg.png"
        alt="HeyDay Background"
        fill
        quality={100}
        priority
        className="object-cover z-0"
      />

      <div className="absolute top-1/2 left-4 -translate-y-1/2 z-10">
        <Image
          src="/image/Social.png"
          alt="Social Icon"
          width={100}
          height={250}
          className="object-contain"
        />
      </div>

      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 space-y-10 text-center">
        <div className="relative w-[250px] h-[250px] md:w-[400px] md:h-[400px]">
          <Image
            src="/image/lightBall.png"
            alt="HeyDay Logo"
            fill
            className="object-contain"
          />
        </div>

        <div className="relative w-[300px] h-[120px] md:w-[600px] md:h-[250px]">
          <Image
            src="/image/logoheyday.png"
            alt="HeyDay Text Logo"
            fill
            className="object-contain"
          />
        </div>

        <div className="w-full max-w-[1000px] py-6 rounded-xl shadow-lg">
          <h1 className="text-3xl md:text-6xl font-bold text-black">
            RISE & CONQUER
          </h1>
        </div>

     <div className="absolute top-[850.44px] flex flex-wrap justify-center md: w-[836px] h-[76px]"> <div className="flex items-center w-[189px] h-[76px] gap-2"> {/* Icon */} <div className="relative flex items-center justify-center w-[56px] h-[56px]"> <Image src="/image/android.png" alt="Android" fill className="object-contain" /> </div> {/* Text */} <div className="flex items-center justify-center"> <p className="text-black font-extrabold text-sm md:text-lg"> ANDROID </p> </div> </div> <div className="flex items-center w-[189px] h-[76px] gap-2"> <div className="relative flex items-center justify-center w-[56px] h-[56px]"> <Image src="/image/android.png" alt="Android" fill className="object-contain" /> </div> <div className="flex items-center justify-center"> <p className="text-black font-extrabold text-sm md:text-lg"> IOS </p> </div> </div> <div className="flex items-center w-[189px] h-[76px] gap-2"> <div className="relative flex items-center justify-center w-[56px] h-[56px]"> <Image src="/image/android.png" alt="Android" fill className="object-contain" /> </div> <div className="flex items-center justify-center"> <p className="text-black font-extrabold text-sm md:text-lg"> MAC </p> </div> </div> <div className="flex items-center w-[189px] h-[76px] gap-2"> <div className="relative flex items-center justify-center w-[56px] h-[56px]"> <Image src="/image/android.png" alt="Android" fill className="object-contain" /> </div> <div className="flex items-center justify-center"> <p className="text-black font-extrabold text-sm md:text-lg">PC</p> </div> </div> <div className="flex items-center w-[189px] h-[76px] gap-2"> <div className="relative flex items-center justify-center w-[56px] h-[56px]"> <Image src="/image/android.png" alt="Android" fill className="object-contain" /> </div> <div className="flex items-center justify-center"> <p className="text-black font-extrabold text-sm md:text-lg"> BOARD GAME </p> </div> </div> </div>
      </div>
    </div>
  );
}
