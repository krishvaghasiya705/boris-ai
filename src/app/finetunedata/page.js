import React from 'react'
import Pagination from "@/components/pagination";
import Imageplusicon from '@/assets/icon/imageplusicon';
import Stackicon from '@/assets/icon/stackicon';
import Documenticon from '@/assets/icon/documenticon';

export default function Finetunedata() {
  return (
    <div className='h-full max-w-[1560px] pl-[30px] grid grid-cols-2 gap-[40px]'>
      <div className="border-r-[1px] border-r-solid border-bordercolor pr-[40px] py-[54px]">
        <h1 className="text-[30px] leading-[37px] font-semibold font-Montserrat text-lightwhite mb-[40px]">Fine Tune Data</h1>
        <div className='h-[310px] w-full relative cursor-pointer bg-bgpurplelight3 rounded-md border-[1px] border-dashed border-lightwhite6 flex flex-col justify-center items-center'>
          <input type="file" className='absolute top-0 left-0 w-full h-full cursor-pointer opacity-0' />
          <div className='mb-[14px]'>
            <Imageplusicon />
          </div>
          <p className='text-base leading-5 font-medium font-Montserrat text-lightwhite'><span className="text-lightwhite7 underline">Click to upload</span> or drag and drop</p>
        </div>
        {/* <div className='h-[310px] w-full relative cursor-pointer bg-bgpurplelight3 rounded-md border-[1px] border-dashed border-lightwhite6 flex flex-col justify-center items-center'>
          <div className='mb-[14px]'>
            <Documenticon />
          </div>
          <p className='text-base leading-5 font-medium font-Montserrat text-lightwhite'>Document File...</p>
        </div> */}
        <div className='flex justify-end mt-[30px]'>
          <button type='button' className='bg-btnblue border-[1px] border-solid border-btnblue rounded-md py-[17px] px-[50px] cursor-pointer text-[16px] leading-5 font-semibold font-Montserrat text-white'>Submit</button>
        </div>
      </div>
      <div className="py-[54px] flex flex-col gap-5 justify-between">
        <div>
          <h2 className="text-[30px] leading-[37px] font-semibold font-Montserrat text-lightwhite mb-[40px]">Data History</h2>
          <div className='flex flex-col gap-4'>
            <div className='bg-bgblack4 border-[1px] border-solid border-borderpurplelight6 py-[15px] pl-[15px] pr-[25px] rounded-md flex justify-between items-center gap-5'>
              <div className='flex flex-col gap-[9px] items-start'>
                <button type='button' className='bg-bgpurplelight4 border-[1px] border-solid border-btnblue p-[6px] rounded flex items-center gap-[5px]'>
                  <Stackicon />
                  <span className='text-sm leading-[10px] font-medium font-Montserrat text-lightwhite'>Tuning Collection</span>
                </button>
                <p className='flex items-center gap-[6px] text-sm leading-[17px] font-medium font-Montserrat text-lightwhite3'>5 items <span className='w-1 h-1 rounded-full bg-lightwhite8'></span> Updated 1 min ago</p>
              </div>
              <span className="text-base leading-5 font-medium font-Montserrat text-lightwhite3">Processing...</span>
            </div>
            <div className='bg-bgblack4 border-[1px] border-solid border-borderpurplelight6 py-[15px] pl-[15px] pr-[25px] rounded-md flex justify-between items-center gap-5'>
              <div className='flex flex-col gap-[9px] items-start'>
                <button type='button' className='bg-bgpurplelight4 border-[1px] border-solid border-btnblue p-[6px] rounded flex items-center gap-[5px]'>
                  <Stackicon />
                  <span className='text-sm leading-[10px] font-medium font-Montserrat text-lightwhite'>Tuning Collection</span>
                </button>
                <p className='flex items-center gap-[6px] text-sm leading-[17px] font-medium font-Montserrat text-lightwhite3'>2 items <span className='w-1 h-1 rounded-full bg-lightwhite8'></span> Updated  10 min ago</p>
              </div>
              <button type='button' className='bg-btnblue border-[1px] border-solid border-btnblue shadow-shadow4 rounded py-[11px] px-5 text-[15px] leading-[18px] font-semibold font-Montserrat text-white'>Restore</button>
            </div>
            <div className='bg-bgblack4 border-[1px] border-solid border-borderpurplelight6 py-[15px] pl-[15px] pr-[25px] rounded-md flex justify-between items-center gap-5'>
              <div className='flex flex-col gap-[9px] items-start'>
                <button type='button' className='bg-bgpurplelight4 border-[1px] border-solid border-btnblue p-[6px] rounded flex items-center gap-[5px]'>
                  <Stackicon />
                  <span className='text-sm leading-[10px] font-medium font-Montserrat text-lightwhite'>Tuning Collection</span>
                </button>
                <p className='flex items-center gap-[6px] text-sm leading-[17px] font-medium font-Montserrat text-lightwhite3'>4 items <span className='w-1 h-1 rounded-full bg-lightwhite8'></span> Updated  50 min ago</p>
              </div>
              <button type='button' className='bg-btnblue border-[1px] border-solid border-btnblue shadow-shadow4 rounded py-[11px] px-5 text-[15px] leading-[18px] font-semibold font-Montserrat text-white'>Restore</button>
            </div>
            <div className='bg-bgblack4 border-[1px] border-solid border-borderpurplelight6 py-[15px] pl-[15px] pr-[25px] rounded-md flex justify-between items-center gap-5'>
              <div className='flex flex-col gap-[9px] items-start'>
                <button type='button' className='bg-bgpurplelight4 border-[1px] border-solid border-btnblue p-[6px] rounded flex items-center gap-[5px]'>
                  <Stackicon />
                  <span className='text-sm leading-[10px] font-medium font-Montserrat text-lightwhite'>Tuning Collection</span>
                </button>
                <p className='flex items-center gap-[6px] text-sm leading-[17px] font-medium font-Montserrat text-lightwhite3'>8 items <span className='w-1 h-1 rounded-full bg-lightwhite8'></span> Updated  1 Hour ago</p>
              </div>
              <button type='button' className='bg-btnblue border-[1px] border-solid border-btnblue shadow-shadow4 rounded py-[11px] px-5 text-[15px] leading-[18px] font-semibold font-Montserrat text-white'>Restore</button>
            </div>
            <div className='bg-bgblack4 border-[1px] border-solid border-borderpurplelight6 py-[15px] pl-[15px] pr-[25px] rounded-md flex justify-between items-center gap-5'>
              <div className='flex flex-col gap-[9px] items-start'>
                <button type='button' className='bg-bgpurplelight4 border-[1px] border-solid border-btnblue p-[6px] rounded flex items-center gap-[5px]'>
                  <Stackicon />
                  <span className='text-sm leading-[10px] font-medium font-Montserrat text-lightwhite'>Tuning Collection</span>
                </button>
                <p className='flex items-center gap-[6px] text-sm leading-[17px] font-medium font-Montserrat text-lightwhite3'>6 items <span className='w-1 h-1 rounded-full bg-lightwhite8'></span> Updated  2 Hour ago</p>
              </div>
              <button type='button' className='bg-btnblue border-[1px] border-solid border-btnblue shadow-shadow4 rounded py-[11px] px-5 text-[15px] leading-[18px] font-semibold font-Montserrat text-white'>Restore</button>
            </div>
            <div className='bg-bgblack4 border-[1px] border-solid border-borderpurplelight6 py-[15px] pl-[15px] pr-[25px] rounded-md flex justify-between items-center gap-5'>
              <div className='flex flex-col gap-[9px] items-start'>
                <button type='button' className='bg-bgpurplelight4 border-[1px] border-solid border-btnblue p-[6px] rounded flex items-center gap-[5px]'>
                  <Stackicon />
                  <span className='text-sm leading-[10px] font-medium font-Montserrat text-lightwhite'>Tuning Collection</span>
                </button>
                <p className='flex items-center gap-[6px] text-sm leading-[17px] font-medium font-Montserrat text-lightwhite3'>3 items <span className='w-1 h-1 rounded-full bg-lightwhite8'></span> Updated  3 Hour ago</p>
              </div>
              <button type='button' className='bg-btnblue border-[1px] border-solid border-btnblue shadow-shadow4 rounded py-[11px] px-5 text-[15px] leading-[18px] font-semibold font-Montserrat text-white'>Restore</button>
            </div>
          </div>
        </div>
        <Pagination paginationstyle="pl-[60px]" />
      </div>
    </div>
  )
}
