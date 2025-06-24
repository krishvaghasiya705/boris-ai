import React from 'react'
import Pagination from "@/components/pagination";

export default function Finetunedata() {
  return (
    <div className='h-full max-w-[1560px] pl-[30px] grid grid-cols-2 gap-[40px]'>
      <div className="border-r-[1px] border-r-solid border-bordercolor pr-[40px] py-[54px]">
        <h1 className="text-[30px] leading-[37px] font-semibold font-Montserrat text-lightwhite mb-[40px]">Fine Tune Data</h1>
        <div></div>
        <div className='flex justify-end mt-[30px]'>
            <button type='button' className='bg-btnblue border-[1px] border-solid border-btnblue rounded-md py-[17px] px-[50px] cursor-pointer text-[16px] leading-5 font-semibold font-Montserrat text-white'>Submit</button>
        </div>
      </div>
      <div className="py-[54px] pl-[40px] flex flex-col justify-between">
        <Pagination />
      </div>
    </div>
  )
}
