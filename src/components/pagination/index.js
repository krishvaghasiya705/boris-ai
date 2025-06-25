import React from 'react'
import Rightarrow from "@/assets/icon/rightarrow";

export default function Pagination({ paginationstyle }) {
    return (
        <div className={`${paginationstyle} flex justify-end`}>
            <div className="flex items-center gap-[34px]">
                <div className="border-[1px] border-solid border-borderpurplelight bg-bgpurplelight rounded-md py-[7px] px-[14px] flex items-center gap-2.5 cursor-pointer">
                    <div className="w-[38px] h-[38px] flex justify-center items-center bg-bgblack rounded-full">
                        <Rightarrow Arrowstyle="rotate-180" />
                    </div>
                    <span className="text-lg leading-[22px] font-semibold font-Lato">Prev</span>
                </div>
                <div className="flex gap-10 items-center">
                    <span className="text-lg leading-[29px] font-semibold font-Montserrat text-lightwhite cursor-pointer">1</span>
                    <span className="text-lg leading-[29px] font-semibold font-Montserrat text-lightwhite4 cursor-pointer">2</span>
                    <span className="text-lg leading-[29px] font-semibold font-Montserrat text-lightwhite4 cursor-pointer">3</span>
                </div>
                <div className="border-[1px] border-solid border-borderpurplelight bg-bgpurplelight rounded-md py-[7px] px-[14px] flex items-center gap-2.5 cursor-pointer">
                    <span className="text-lg leading-[22px] font-semibold font-Lato">Next</span>
                    <div className="w-[38px] h-[38px] flex justify-center items-center bg-bgblack rounded-full">
                        <Rightarrow />
                    </div>
                </div>
            </div>
        </div>
    )
}
