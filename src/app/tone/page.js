"use client";
import Addarticleicon from "@/assets/icon/addarticleicon";
import Calendericon from "@/assets/icon/calendericon";
import Deleteicon from "@/assets/icon/deleteicon";
import Plusicon from "@/assets/icon/plusicon";
import Searchicon from "@/assets/icon/searchicon";
import Addtonemodal from "@/components/addtonemodal";
import Pagination from "@/components/pagination";
import React, { useState } from "react";

export default function Tone() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="pt-[45px] pb-[55px] h-full flex flex-col justify-between gap-5">
      <div>
        <div className="flex justify-between items-center pl-[30px] pr-[45px]">
          <h1 className="text-3xl leading-[37px] font-semibold font-Montserrat text-lightwhite">
            Tone Management
          </h1>
          <div className="flex items-center gap-[22px]">
            <div
              onClick={() => setShowModal(true)}
              className="bg-bgpurplelight2 border-borderpurplelight2 border-[1px] border-solid rounded-md flex items-center gap-2 py-2.5 px-4 cursor-pointer"
            >
              <Plusicon />
              <span className="text-base leading-5 font-medium text-lightwhite font-Montserrat">
                Add Tone
              </span>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search here"
                className="bg-bgpurplelight2 border-borderpurplelight2 border-[1px] border-solid outline-none rounded-md flex items-center gap-2 py-[18px] pl-[54px] pr-4 text-base leading-5 font-medium text-lightwhite3 font-Montserrat"
              />
              <div className="cursor-pointer absolute top-2/4 left-[16px] -translate-y-2/4 w-[30px] h-[30px]">
                <Searchicon />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[50px]">
          <table className="w-full text-left">
            <thead className="border-b-[1px] border-b-solid border-b-bordercolor">
              <tr>
                <th>
                  <div className="pl-[30px] pb-[15px] flex items-center gap-[6px]">
                    <p className="text-base leading-5 font-medium font-Montserrat text-lightwhite">
                        Tone
                    </p>
                  </div>
                </th>
                <th className="w-[120px]">
                  <div className="w-full flex justify-center items-center">
                    <div className="pr-2.5 border-r-[1px] border-r-solid border-r-borderpurplelight3">
                      <span className="text-base leading-5 font-medium text-lightwhite font-Montserrat">
                        Created
                      </span>
                    </div>
                  </div>
                </th>
                <th className="w-[127px]">
                  <div className="w-full flex justify-center items-center">
                    <div className="pr-2.5 border-r-[1px] border-r-solid border-r-borderpurplelight3">
                      <span className="text-base leading-5 font-medium text-lightwhite font-Montserrat">
                        Updated
                      </span>
                    </div>
                  </div>
                </th>
                <th className="w-[120px]"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b-[1px] border-b-solid border-b-bordercolor">
                <td className="py-5 pl-[30px]">
                    <div className="flex flex-col gap-[3px]">
                        <p className="text-base leading-5 font-semibold text-lightwhite font-Montserrat">Lorem Ipsum is simply</p>
                        <p className="text-[15px] leading-[18px] font-normal text-lightwhite5 font-Montserrat">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </td>
                <td className="text-center">
                  <span className="text-base leading-5 font-medium font-Montserrat text-lightwhite">
                    1d ago
                  </span>
                </td>
                <td className="text-center">
                  <span className="text-base leading-5 font-medium font-Montserrat text-lightwhite">
                    10h ago
                  </span>
                </td>
                <td>
                  <div className="flex items-center justify-center gap-[25px]">
                    <div className="cursor-pointer">
                      <Deleteicon />
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="border-b-[1px] border-b-solid border-b-bordercolor">
                <td className="py-5 pl-[30px]">
                    <div className="flex flex-col gap-[3px]">
                        <p className="text-base leading-5 font-semibold text-lightwhite font-Montserrat">Lorem Ipsum is simply</p>
                        <p className="text-[15px] leading-[18px] font-normal text-lightwhite5 font-Montserrat">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </td>
                <td className="text-center">
                  <span className="text-base leading-5 font-medium font-Montserrat text-lightwhite">
                    1d ago
                  </span>
                </td>
                <td className="text-center">
                  <span className="text-base leading-5 font-medium font-Montserrat text-lightwhite">
                    10h ago
                  </span>
                </td>
                <td>
                  <div className="flex items-center justify-center gap-[25px]">
                    <div className="cursor-pointer">
                      <Deleteicon />
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="border-b-[1px] border-b-solid border-b-bordercolor">
                <td className="py-5 pl-[30px]">
                    <div className="flex flex-col gap-[3px]">
                        <p className="text-base leading-5 font-semibold text-lightwhite font-Montserrat">Lorem Ipsum is simply</p>
                        <p className="text-[15px] leading-[18px] font-normal text-lightwhite5 font-Montserrat">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </td>
                <td className="text-center">
                  <span className="text-base leading-5 font-medium font-Montserrat text-lightwhite">
                    1d ago
                  </span>
                </td>
                <td className="text-center">
                  <span className="text-base leading-5 font-medium font-Montserrat text-lightwhite">
                    10h ago
                  </span>
                </td>
                <td>
                  <div className="flex items-center justify-center gap-[25px]">
                    <div className="cursor-pointer">
                      <Deleteicon />
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Pagination />
      {showModal && <Addtonemodal onClose={() => setShowModal(false)} />}
    </div>
  )
}
