import Image from "next/image";

export default function AuctionHouse() {
  return (
    <div className="relative h-[950px] lg:h-[878px] overflow-hidden bg-black">



      <div className="flex w-full flex-col justify-center items-center container">
        <div className="container relative text-white w-[1136px] h-[267.36px] top-[50px]">
          <p
            className="text-[50px] leading-[72px] uppercase font-normal font-[Cinzel] 
             bg-linear-to-b from-[#FEFFBC] to-[#FFC671] 
             text-transparent bg-clip-text start"
          >
            Auction House
          </p>
          <div className="relative w-[370px] h-[35px] mt-4 mb-[52px]">
            <Image
              src="/image/kechanvector.png"
              alt="HeyDay Background"
              fill
              quality={100}
              priority
              className="object-contain object-bottom absolute bottom-0 left-0 right-0 z-0"
            />
          </div>
        </div>

        <div className="container relative flex sm:flex-col lg:flex-row  justify-center items-start gap-8  h-[239px] top-[-70px] lg:top-0 ">
          <div className="w-full lg:w-1/2 h-[345px] text-white">
            <div className="font-montserrat font-normal text-[19.5px] leading-[32.5px] tracking-normal text-white">
              The Auction House in Heyday: Rise of Empires is a dynamic
              marketplace where players can bid on rare items, including NFTs
              and Mystical Stones. It’s a place for strategic trading, allowing
              players to gain valuable resources and exclusive items through
              competitive bidding. With unique, limited items up for auction,
              the Auction House adds an exciting dimension to the game, where
              players can buy, sell, and earn in a secure and immersive
              environment.
            </div>
          </div>
          <div className="hidden lg:block  relative w-[603.02px] h-[313px] -top-[65px]">
            <Image
              src="/image/khung-hightlight.png"
              alt="Stone Image"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="block lg:hidden  relative w-[603.02px] h-[313px] -top-[105px]">
          <Image
            src="/image/khung-hightlight.png"
            alt="Stone Image"
            fill
            className="object-contain"
          />
        </div>

                <div className="top-[-200px] lg:top-0 relative flex justify-center w-full h-[333.97px] ">
      <Image
              src="/image/bg-laudai.png"
              alt="HeyDay Background"
              fill
              quality={100}
              priority
              className="object-contain object-bottom absolute bottom-0 left-0 right-0 z-0"
            />
                </div>
      </div>
    </div>
  );
}
