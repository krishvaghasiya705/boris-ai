import Logouticon from '@/assets/icon/logouticon'
import React from 'react'

export default function Header() {
  return (
    <header className='px-10 py-3 border-b-[1px] border-b-solid border-b-bordercolor'>
     <div className='flex justify-end items-center gap-[30px]'>
        <div className="pr-[30px] flex items-center gap-2.5 cursor-pointer">
            <div className="rounded-full flex justify-center items-center w-[38px] h-[38px] bg-btnblue text-white text-lg leading-[22px] font-medium font-Montserrat">D</div>
            <span className="text-base leading-5 font-medium font-Montserrat text-lightwhite">Dolphine Devtra</span>
        </div>
        <div className='flex items-center gap-[6px] cursor-pointer'>
            <Logouticon />
            <span className="text-base leading-5 font-medium font-Montserrat text-txtorange">Log out</span>
        </div>
     </div>
    </header>
  )
}
