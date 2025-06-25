import React from 'react'
import Image from 'next/image'
import articleimage1 from "@/assets/image/articleimage1.png"
import Documentfileicon from '@/assets/icon/documentfileicon'

export default function Articledetails() {
    return (
        <>
            <div className='flex justify-between items-center py-[25px] pl-[30px] pr-10 border-b-[1px] border-b-solid border-b-bordercolor'>
                <div className="flex flex-col gap-[7px]">
                    <h1 className="text-[28px] leading-[34px] font-semibold font-Montserrat text-lightwhite">It looks like you're interested in perhaps writing a blog post.</h1>
                    <p className="text-base leading-5 font-normal font-Montserrat text-lightwhite">12 Versions available</p>
                </div>
                <h2 className="text-2xl leading-[29px] font-semibold font-Montserrat text-lightwhite">Version History</h2>
            </div>
            <div className="grid grid-cols-[391px_1fr] h-[calc(100%-112px)]">
                <div className='flex flex-col border-r-[1px] border-r-solid border-r-bordercolor'>
                    <div className="border-b-[1px] border-b-solid border-b-bordercolor pt-[25px] pb-[26px] px-[30px] hover:bg-bgpurplelight6 cursor-pointer flex items-center gap-[36px]">
                        <div className='flex items-center gap-2.5'>
                            <div className="w-[33px] h-[33px]">
                                <Documentfileicon />
                            </div>
                            <span className="text-base leading-5 font-semibold font-Montserrat text-lightwhite">0.1.5</span>
                        </div>
                        <p className="text-base leading-5 font-medium font-Montserrat text-lightwhite">25th Nov, 2024 - 10:50am</p>
                    </div>
                    <div className="border-b-[1px] border-b-solid border-b-bordercolor pt-[25px] pb-[26px] px-[30px] hover:bg-bgpurplelight6 cursor-pointer flex items-center gap-[36px]">
                        <div className='flex items-center gap-2.5'>
                            <div className="w-[33px] h-[33px]">
                                <Documentfileicon />
                            </div>
                            <span className="text-base leading-5 font-semibold font-Montserrat text-lightwhite">0.2.6</span>
                        </div>
                        <p className="text-base leading-5 font-medium font-Montserrat text-lightwhite">22th Nov, 2024 - 09:45am</p>
                    </div>
                    <div className="border-b-[1px] border-b-solid border-b-bordercolor pt-[25px] pb-[26px] px-[30px] hover:bg-bgpurplelight6 cursor-pointer flex items-center gap-[36px]">
                        <div className='flex items-center gap-2.5'>
                            <div className="w-[33px] h-[33px]">
                                <Documentfileicon />
                            </div>
                            <span className="text-base leading-5 font-semibold font-Montserrat text-lightwhite">0.3.7</span>
                        </div>
                        <p className="text-base leading-5 font-medium font-Montserrat text-lightwhite">18th Nov, 2024 - 12:45am</p>
                    </div>
                    <div className="border-b-[1px] border-b-solid border-b-bordercolor pt-[25px] pb-[26px] px-[30px] hover:bg-bgpurplelight6 cursor-pointer flex items-center gap-[36px]">
                        <div className='flex items-center gap-2.5'>
                            <div className="w-[33px] h-[33px]">
                                <Documentfileicon />
                            </div>
                            <span className="text-base leading-5 font-semibold font-Montserrat text-lightwhite">0.4.8</span>
                        </div>
                        <p className="text-base leading-5 font-medium font-Montserrat text-lightwhite">15th Nov, 2024 - 10:16am</p>
                    </div>
                    <div className="border-b-[1px] border-b-solid border-b-bordercolor pt-[25px] pb-[26px] px-[30px] hover:bg-bgpurplelight6 cursor-pointer flex items-center gap-[36px]">
                        <div className='flex items-center gap-2.5'>
                            <div className="w-[33px] h-[33px]">
                                <Documentfileicon />
                            </div>
                            <span className="text-base leading-5 font-semibold font-Montserrat text-lightwhite">0.5.9</span>
                        </div>
                        <p className="text-base leading-5 font-medium font-Montserrat text-lightwhite">10th Nov, 2024 - 11:30am</p>
                    </div>
                    <div className="border-b-[1px] border-b-solid border-b-bordercolor pt-[25px] pb-[26px] px-[30px] hover:bg-bgpurplelight6 cursor-pointer flex items-center gap-[36px]">
                        <div className='flex items-center gap-2.5'>
                            <div className="w-[33px] h-[33px]">
                                <Documentfileicon />
                            </div>
                            <span className="text-base leading-5 font-semibold font-Montserrat text-lightwhite">0.6.1</span>
                        </div>
                        <p className="text-base leading-5 font-medium font-Montserrat text-lightwhite">05th Nov, 2024 - 07:10am</p>
                    </div>
                    <div className="border-b-[1px] border-b-solid border-b-bordercolor pt-[25px] pb-[26px] px-[30px] hover:bg-bgpurplelight6 cursor-pointer flex items-center gap-[36px]">
                        <div className='flex items-center gap-2.5'>
                            <div className="w-[33px] h-[33px]">
                                <Documentfileicon />
                            </div>
                            <span className="text-base leading-5 font-semibold font-Montserrat text-lightwhite">0.7.2</span>
                        </div>
                        <p className="text-base leading-5 font-medium font-Montserrat text-lightwhite">29th Dec, 2024 - 10:30am</p>
                    </div>
                    <div className="pt-[25px] pb-[26px] px-[30px] hover:bg-bgpurplelight6 cursor-pointer flex items-center gap-[36px]">
                        <div className='flex items-center gap-2.5'>
                            <div className="w-[33px] h-[33px]">
                                <Documentfileicon />
                            </div>
                            <span className="text-base leading-5 font-semibold font-Montserrat text-lightwhite">0.83</span>
                        </div>
                        <p className="text-base leading-5 font-medium font-Montserrat text-lightwhite">26th Dec, 2024 - 09:10am</p>
                    </div>
                </div>
                <div className='pt-[45px] max-w-[1099px] mx-auto'>
                    <h3 className="text-[32px] leading-10 font-semibold font-Montserrat text-lightwhite">It looks like you're interested in perhaps writing a blog post.</h3>
                    <p className="text-lg leading-[26px] font-medium font-Montserrat text-lightwhite5 mt-[15px]">One of AI's biggest contributions to UX is personalization. By analyzing user data, AI algorithms can predict preferences.</p>
                    <Image src={articleimage1} alt="articleimage1" className="w-full h-[320px] mt-[25px]" />
                    <h6 className="text-lg leading-[22px] font-bold font-Montserrat text-lightwhite mt-[25px]">1. Setting Up Your Blog Document</h6>
                    <p className="text-lg leading-[26px] font-medium font-Montserrat text-lightwhite5 mt-[15px]">Use different blocks for headings, paragraphs, images, and other media. AFFiNE's block-based editor allows you to easily rearrange and format your content.</p>
                    <p className="text-lg leading-[26px] font-medium font-Montserrat text-lightwhite5 mt-[15px]">Not my skills, experience, or portfolio structure — just my taste! They understood my aesthetic through my portfolio.</p>
                    <p className="text-lg leading-[26px] font-medium font-Montserrat text-lightwhite5 mt-[15px]">This experience taught me how crucial it  to brand yourself. Over time I've maintained consistent branding social profiles and portfolio.</p>
                </div>
            </div>
        </>
    )
}
