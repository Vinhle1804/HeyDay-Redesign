import Image from "next/image";

export default function Stone() {
  return (
    <div className="relative h-[778px] overflow-hidden bg-black">
      {/* Ảnh nền */}
      <Image
        src="/image/bg3.png"
        alt="HeyDay Background"
        fill
        quality={100}
        priority
        className="object-cover z-0"
      />

      <div className="flex w-full flex-col justify-center items-center container">
        <div className="relative flex sm:flex-col lg:flex-row  justify-center items-start gap-8  h-[345px] top-[66px] ">
          <div className="w-full lg:w-1/2 h-[345px] text-white">
            <div className="font-montserrat font-normal text-[19.5px] leading-[32.5px] tracking-normal text-white">
              The Mystical Stone is a rare and powerful item, granting players
              special abilities and exclusive benefits. Unlocking and upgrading
              Mystical Stones can significantly enhance a player’s faction,
              providing advantages in battles, resource gathering, and strategic
              planning. These stones hold mystical powers that allow players to
              access unique abilities unavailable elsewhere, making them
              essential for those looking to dominate the land of Covenant.
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

         <div className="block lg:hidden  relative w-[603.02px] h-[313px] -top-[65px]">
            <Image
              src="/image/khung-hightlight.png"
              alt="Stone Image"
              fill
              className="object-contain"
            />
          </div>

        <div className="top-[-150px] lg:top-0 relative flex justify-center w-full h-[333.97px] ">
          <div className="relative w-[267.23px] h-[226.43px] top-[79.6px]">
            <Image
              src="/image/blue.png"
              alt="Stone Image"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative w-[267.23px] h-[291.58px] top-[59.43px] ">
            <Image
              src="/image/orange.png"
              alt="Stone Image"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative w-[336.1px] h-[296.04px] top-[56.51px] ">
            <Image
              src="/image/purple.png"
              alt="Stone Image"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative w-[267.23px] h-[221.84px] top-[68.11px] ">
            <Image
              src="/image/green.png"
              alt="Stone Image"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
