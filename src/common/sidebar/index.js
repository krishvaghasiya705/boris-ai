"use client"
import Articleicon from "@/assets/icon/articleicon";
import Rightarrow from "@/assets/icon/dropdownicon";
import Settingicon from "@/assets/icon/settingicon";
import Link from "next/link";
import React, { useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  return (
    <aside className="border-r-[1px] border-r-solid border-r-bordercolor w-full h-full py-[15px] pl-[15px] pr-[25px] flex flex-col">
      <Link href={"/"}>
        <div className="pb-4 flex items-center gap-[5px] cursor-pointer">
          <div className="w-[35px] h-[34px] rounded-[4px] flex justify-center items-center bg-btnorrange">
            <span className="text-[19px] font-bold leading-[14px] text-white font-Inter">
              J
            </span>
          </div>
          <span className="text-lg font-medium leading-[22px] text-lightwhite font-Inter">
            Juno Market
          </span>
        </div>
      </Link>
      <div className="pt-[45px] flex flex-col gap-[15px]">
        <Link href={"/article"} className="bg-transparent py-3 px-[22px] border-[1px] border-solid border-borderpurplelight rounded-md flex items-center gap-[14px] cursor-pointer hover:bg-bgpurplelight transition duration-400 ease-in-out">
          <Articleicon />
          <span className="text-base leading-5 font-medium font-Montserrat text-lightwhite">
            Article
          </span>
        </Link>
        <div className={`border-[1px] border-solid hover:border-borderpurplelight hover:bg-bgpurplelight ${open ? "border-borderpurplelight bg-bgpurplelight" : "border-transparent"} rounded-md transition duration-400 ease-in-out`}>
          <div
            className="py-3 px-[22px] flex items-center justify-between gap-[14px] cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <div className="flex items-center gap-[14px]">
              <Settingicon />
              <span className="text-base leading-5 font-medium font-Montserrat text-lightwhite">
                Setting
              </span>
            </div>
            <Rightarrow Iconstyles={`${open ? "rotate-90" : "rotate-0"} transition-all duration-500 ease-in-out`} />
          </div>
          <div className={`flex flex-col max-h-0 overflow-hidden ${open ? "max-h-96" : "max-h-0"} transition-all duration-500 ease-in-out`}>
            <Link href={"/tone"} className="border-t-[1px] border-t-solid border-t-borderpurplelight py-[14px] px-[22px] cursor-pointer hover:bg-borderpurplelight transition duration-400 ease-in-out">
              <span className="text-base leading-5 font-medium font-Montserrat text-lightwhite">Tone Management</span>
            </Link>
            <Link href={"/aifunctionality"} className="border-t-[1px] border-t-solid border-t-borderpurplelight py-[14px] px-[22px] cursor-pointer hover:bg-borderpurplelight transition duration-400 ease-in-out">
              <span className="text-base leading-5 font-medium font-Montserrat text-lightwhite">Ai functionality</span>
            </Link>
            <Link href={"/finetunedata"} className="border-t-[1px] border-t-solid border-t-borderpurplelight py-[14px] px-[22px] cursor-pointer hover:bg-borderpurplelight transition duration-400 ease-in-out">
              <span className="text-base leading-5 font-medium font-Montserrat text-lightwhite">Fine Tune Data</span>
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}
