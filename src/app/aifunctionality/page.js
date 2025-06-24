import React from "react";

export default function Aifunctionality() {
  return (
    <div className="pt-[45px] pb-[55px] h-full flex flex-col justify-between gap-5">
      <div>
        <div className="pl-[30px] pr-[45px]">
          <h1 className="text-3xl leading-[37px] font-semibold font-Montserrat text-lightwhite">
            AI Functionality
          </h1>
        </div>
        <div className="mt-[50px] ml-[30px]">
            <div className="flex gap-[29px]">
                <div className="bg-bgblack4 border-[1px] border-solid border-borderpurplelight6 py-5 pr-[25px] pl-[24px] rounded-md flex items-center gap-[15px]">
                    <span className="text-base leading-5 font-medium font-Montserrat text-lightwhite">Image generation</span>
                    <div className="flex items-center gap-2">
                      <div className="relative w-[48px] h-[26px] border-[1px] border-solid border-bordercolor2 rounded-full shadow-shadow2">
                        <div className="absolute top-2/4 right-[1px] -translate-y-2/4 w-[22px] h-[22px] rounded-full bg-white shadow-shadow3 cursor-pointer"></div>
                      </div>
                      <span className="text-base leading-5 font-medium font-Montserrat text-white">On</span>
                    </div>
                </div>
                <div className="bg-bgblack4 border-[1px] border-solid border-borderpurplelight6 py-5 pr-[25px] pl-[24px] rounded-md flex items-center gap-[15px]">
                    <span className="text-base leading-5 font-medium font-Montserrat text-lightwhite">Content Moderation</span>
                    <div className="flex items-center gap-2">
                      <div className="relative w-[48px] h-[26px] border-[1px] border-solid border-bordercolor2 rounded-full shadow-shadow2">
                        <div className="absolute top-2/4 left-[1px] -translate-y-2/4 w-[22px] h-[22px] rounded-full bg-bordercolor2 shadow-shadow3 cursor-pointer"></div>
                      </div>
                      <span className="text-base leading-5 font-medium font-Montserrat text-white">Off</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
