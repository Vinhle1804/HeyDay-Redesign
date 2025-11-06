import Image from "next/image";

export default function Header() {
  return (
    <div>
      <header className="flex justify-center w-[1,172px] h-[95.31px] items-center bg-transparent gap-10">
        <div className="relative h-[95.31px] w-[150.46px]">
          <Image
            src="/image/logo.png"
            alt="HeyDay Background"
            fill
            quality={100}
            priority
            className="object-cover z-0 opacity-80"
          />
        </div>
     <div className="text-yellow-400  text-5xl"><span>About</span></div>
     <div className="text-yellow-400  text-5xl"><span>About</span></div>
     <div className="text-yellow-400  text-5xl"><span>About</span></div>
     <div className="text-yellow-400  text-5xl"><span>About</span></div>
     <div className="text-yellow-400  text-5xl"><span>About</span></div>


      </header>
    </div>
  );
}
