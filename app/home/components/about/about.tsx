import Image from "next/image";
import { platform, social } from "@/data/data";
import Header from "@/components/header/header";

export default function About() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* Background */}
      <div className="hidden md:block absolute inset-0">
        <Image
          src="/image/bg.png"
          alt="Background Desktop"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="block md:hidden absolute inset-0">
        <Image
          src="/image/bg-mobile.png"
          alt="Background Mobile"
          fill
          className="object-cover"
          priority
        />
      </div>

      <Header />

      {/* Social sidebar - desktop only */}
      <div className="hidden md:flex absolute z-10 justify-between top-[30%] left-[7%] flex-col gap-6">
        {social.map((item, index) => (
          <div key={index} className="relative w-14 h-14">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-0">
        {/* Light ball */}
        <div className="w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] mb-6 relative">
          <Image
            src="/image/lightball.png"
            alt="light ball"
            fill
            className="object-contain"
          />
        </div>

        {/* Logo */}
        <div className="w-[200px] h-[80px] sm:w-[300px] sm:h-[120px] mb-6 relative">
          <Image
            src="/image/logoheyday.png"
            alt="HeyDay Text Logo"
            fill
            className="object-contain"
          />
        </div>

        {/* Light overlay + Text */}
        <div className="relative w-full max-w-[600px] flex flex-col items-center mb-6">
          <Image
            src="/image/light.png"
            alt="light"
            width={600}
            height={150}
            className="object-contain"
          />
          <p className="font-[Cinzel] text-[28px] sm:text-[56px] text-center font-extrabold text-amber-500 absolute top-1/2 -translate-y-1/2">
            RISE & CONQUER
          </p>
        </div>

        {/* Platform buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-6 w-full max-w-[600px]">

          {platform.map((item, index) => (
            
            <div key={index} className="flex flex-col items-center">
              
              <div className="w-12 h-12 relative">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-contain brightness-0"
                />
              </div>
              <p className="text-white uppercase text-sm font-bold mt-1 text-center">
                {item.text}
              </p>
            </div>
          ))}
        </div>


      </div>
                    {/* Social sidebar - desktop only */}
      <div className="flex relative bottom-50 z-10 justify-around  gap-1 md:hidden">
        {social.map((item, index) => (
          <div key={index} className="relative w-14 h-14">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
