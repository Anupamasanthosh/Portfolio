import { Menu } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0  z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
         <Image src="./user-310807_1280.webp" width={60} height={60} className="p-2" alt="logo">

         </Image>
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            WebChain Dev
          </span>
        </a>

        <div className="flex flex-row gap-5">
          {Menu.map((menuItem) => (
            <a key={menuItem.name} href={menuItem.src} className="cursor-pointer text-gray-200 font-semibold">
            {menuItem.name}
          </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
