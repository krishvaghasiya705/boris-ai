import React from "react";
import Image from "next/image";
import BackgroundImage from "@/assets/image/background.png";

export default function Loginform() {
  return (
    <div className="w-full h-screen flex justify-center items-center relative">
      <Image
        src={BackgroundImage}
        alt="BackgroundImage"
        className="w-full h-full absolute top-0 left-0"
      />
      <div className="bg-transparentbg w-[520px] p-10 relative z-10 rounded-lg">
        <h1 className="text-[32px] leading-10 font-semibold font-Montserrat text-white text-center">
          Welcome
        </h1>
        <form className="mt-[38px]">
          <div className="mb-[22px]">
            <label className="block text-lg leading-[22px] font-medium text-lightwhite font-Montserrat tracking-[1px] mb-2">Email</label>
            <input type="email" placeholder="Enter your email" className="px-5 pt-[19px] pb-[21px] bg-transparentbg2 border-none rounded-md w-full text-base leading-5 tracking-[1px] text-lightwhite2 font-Montserrat font-normal outline-none" />
          </div>
          <div className="mb-[35px]">
            <label className="block text-lg leading-[22px] font-medium text-lightwhite font-Montserrat tracking-[1px] mb-2">Password</label>
            <input type="password" placeholder="Enter your password" className="px-5 pt-[19px] pb-[21px] bg-transparentbg2 border-none rounded-md w-full text-base leading-5 tracking-[1px] text-lightwhite2 font-Montserrat font-normal outline-none" />
          </div>
          <button type="submit" className="w-full bg-btnblue outline-none border-[2px] border-solid border-btnblue p-[14px] rounded-md uppercase text-white cursor-pointer text-xl leading-6 tracking-[1px] font-semibold text-center font-Montserrat">Login</button>
        </form>
      </div>
    </div>
  );
}
