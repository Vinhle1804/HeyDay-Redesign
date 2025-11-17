import Image from "next/image";

export default function Stone() {
  return (
    <div id="stone" className="relative w-full overflow-hidden bg-black">
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
            <div className="font-montserrat font-normal text-[14px] sm:text-[19.5px] leading-[32.5px] tracking-normal text-white text-center">
              The Mystical Stone is a rare and powerful item, granting players
              special abilities and exclusive benefits. Unlocking and upgrading
              Mystical Stones can significantly enhance a player’s faction,
              providing advantages in battles, resource gathering, and strategic
              planning. These stones hold mystical powers that allow players to
              access unique abilities unavailable elsewhere, making them
              essential for those looking to dominate the land of Covenant.
            </div>
          </div>
          <div className="hidden lg:block relative w-[603px] h-[313px] -top-[65px]">
            <Image
              src="/image/khung-hightlight.png"
              alt="Stone Image"
              fill
              className="object-contain"
            />

            <div className="absolute inset-0 flex flex-col justify-center text-white px-4 sm:px-6 md:px-10 text-[14px] sm:text-[16px] md:text-[18px] leading-5 sm:leading-6 md:leading-7">
              <ul className="list-disc pl-4">
                <li>Grants exclusive abilities and buffs to factions.</li>
                <li>Enhances resource gathering and combat effectiveness.</li>
                <li>Available only through limited-time events and quests.</li>
                <li>Essential for unlocking advanced gameplay features.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="  block lg:hidden relative top-[100px] w-[300px] h-[150px]  sm:w-[603px] sm:h-[313px] md:-top-[50px] ">
          <Image
            src="/image/khung-hightlight.png"
            alt="Stone Image"
            fill
            className="object-contain z-0"
          />
          <div className="absolute inset-0 flex flex-col justify-center text-white px-4 sm:px-6 md:px-10 text-[10px] sm:text-[16px] md:text-[18px] leading-5 sm:leading-6 md:leading-7">
            <ul className="list-disc pl-4">
              <li>Grants exclusive abilities and buffs to factions.</li>
              <li>Enhances resource gathering and combat effectiveness.</li>
              <li>Available only through limited-time events and quests.</li>
              <li>Essential for unlocking advanced gameplay features.</li>
            </ul>
          </div>
        </div>

        <div className=" top-0 md:top-[-150px] lg:top-0 relative flex justify-center w-full h-[233.97px] lg:h-[333.97px] ">
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
