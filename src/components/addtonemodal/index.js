import Closeicon from '@/assets/icon/closeicon'
import React from 'react'

export default function Addtonemodal({ onClose }) {
  return (
    <>
        <div onClick={onClose} className="fixed top-0 left-0 w-screen h-screen z-10 bg-bgblack2 cursor-pointer"></div>
        <div className="fixed top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 z-[11]">
            <div className='w-[560px] bg-bgblack3 border-[1px] border-solid border-borderpurplelight4 shadow-shadow1 rounded-lg'>
                <div className="flex justify-between items-center pt-[16px] pr-[24px] pb-[17px] pl-[32px] border-b-[1px] border-b-solid border-b-borderpurplelight5">
                    <span className="text-lg leading-6 font-semibold font-Montserrat text-lightwhite">Add Tone</span>
                    <div className="cursor-pointer" onClick={onClose}>
                        <Closeicon />
                    </div>
                </div>
                <div className='pt-[25px] px-[34px] pb-[34px] flex flex-col gap-[28px]'>
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-col gap-2.5'>
                            <label className="text-sm leading-[17px] font-medium text-lightwhite font-Montserrat">Tone Name</label>
                            <input type="text" className='bg-bgpurplelight2 border-borderpurplelight2 border-[1px] border-solid outline-none rounded-md p-[14px] text-base leading-5 font-medium text-lightwhite3 font-Montserrat' />
                        </div>
                        <div className='flex flex-col gap-2.5'>
                            <label className="text-sm leading-[17px] font-medium text-lightwhite font-Montserrat">Tone Description</label>
                            <input type="text" className='bg-bgpurplelight2 border-borderpurplelight2 border-[1px] border-solid outline-none rounded-md p-[14px] text-base leading-5 font-medium text-lightwhite3 font-Montserrat' />
                        </div>
                    </div>
                    <div className='flex mt-[28px]'>
                        <button type='button' className="py-[14px] px-[53px] text-center border-[1px] border-solid border-btnblue bg-btnblue outline-none text-[15px] leading-[18px] font-semibold font-Montserrat text-white uppercase">add</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
