import Image from "next/image";

export default function Stone() {
  return (
    <div className="relative h-[811px] overflow-hidden bg-black">
      {/* Ảnh nền */}
      <Image
        src="/image/bg3.png"
        alt="HeyDay Background"
        fill
        quality={100}
        priority
        className="object-cover z-0"
      />

      <div className="flex flex-col justify-center items-center">
        <div className="relative flex justify-center items-start gap-8 w-[1145.02px] h-[345px] top-[66px] mx-auto">
          <div className="w-[523px] h-[345px] text-white p-2.5">
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

          <div className="relative w-[603.02px] h-[313px] p-[30px] -top-[25px]">
            <Image
              src="/image/khung-hightlight.png"
              alt="Stone Image"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="relative flex justify-center w-[1118px] h-[333.97px]">
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
