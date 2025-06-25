"use client";
import Addcircleicon from '@/assets/icon/addcircleicon'
import Crossicon from '@/assets/icon/crossicon'
import Dropdownarrow from '@/assets/icon/dropdownarrow'
import Nodataicon from '@/assets/icon/nodataicon'
import React, { useState } from 'react'
import Arrowcircleright from '../../assets/icon/arrowcircleright';

export default function Addarticle() {
    const [toneDropdownOpen, setToneDropdownOpen] = useState(false);

    return (
        <div className='h-full max-w-[1607px] grid grid-cols-2 gap-[52px]'>
            <div className='border-r-[1px] border-r-solid border-r-bordercolor pt-[50px] pr-[53px] pl-10'>
                <h1 className='text-3xl leading-[37px] font-semibold font-Montserrat text-lightwhite mb-[50px]'>Create Article</h1>
                <form>
                    <div className="flex flex-col gap-2.5 mb-[30px]">
                        <label className="block text-lg leading-6 font-medium text-lightwhite font-Montserrat tracking-[1px]">Topic</label>
                        <input type="text" placeholder="Add Topic" className="p-4 bg-bgpurplelight3 border-[1px] border-solid border-borderpurplelight2 rounded-md w-full text-[17px] leading-6 text-lightwhite4 font-Montserrat font-medium outline-none" />
                    </div>
                    <div className="flex flex-col gap-2.5 mb-[30px]">
                        <label className="block text-lg leading-6 font-medium text-lightwhite font-Montserrat tracking-[1px]">Keywords</label>
                        <div className='grid grid-cols-2 gap-5'>
                            <div className='w-full h-[150px] bg-bgpurplelight3 border-[1px] border-solid border-borderpurplelight2 rounded-md p-4 cursor-text'>
                                <span className="text-[17px] leading-6 text-lightwhite4 font-Montserrat font-medium">Primary</span>
                                <div className='h-[calc(100%-36px)] mt-4 overflow-y-auto flex flex-wrap gap-[5px]'>
                                    <div className="rounded-[3px] bg-bgpurplelight border-[1px] border-solid border-borderpurplelight6 py-[5px] px-2.5 h-fit flex items-center gap-[7px] hover:border-btnblue">
                                        <div className='cursor-pointer w-5 h-5'>
                                            <Addcircleicon />
                                        </div>
                                        <span className="text-[17px] leading-6 font-medium font-Montserrat text-lightwhite">AI</span>
                                        <div className='cursor-pointer w-5 h-5'>
                                            <Crossicon />
                                        </div>
                                    </div>
                                    <div className="rounded-[3px] bg-bgpurplelight border-[1px] border-solid border-borderpurplelight6 py-[5px] px-2.5 h-fit flex items-center gap-[7px] hover:border-btnblue">
                                        <div className='cursor-pointer w-5 h-5'>
                                            <Addcircleicon />
                                        </div>
                                        <span className="text-[17px] leading-6 font-medium font-Montserrat text-lightwhite">AI Generative</span>
                                        <div className='cursor-pointer w-5 h-5'>
                                            <Crossicon />
                                        </div>
                                    </div>
                                    <div className="rounded-[3px] bg-bgpurplelight border-[1px] border-solid border-borderpurplelight6 py-[5px] px-2.5 h-fit flex items-center gap-[7px] hover:border-btnblue">
                                        <div className='cursor-pointer w-5 h-5'>
                                            <Addcircleicon />
                                        </div>
                                        <span className="text-[17px] leading-6 font-medium font-Montserrat text-lightwhite">Machine Learning</span>
                                        <div className='cursor-pointer w-5 h-5'>
                                            <Crossicon />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full h-[150px] bg-bgpurplelight3 border-[1px] border-solid border-borderpurplelight2 rounded-md p-4 cursor-text'>
                                <span className="text-[17px] leading-6 text-lightwhite4 font-Montserrat font-medium">Secondary</span>
                                <div className='h-[calc(100%-36px)] mt-4 overflow-y-auto flex flex-wrap gap-[5px]'>
                                    <div className="rounded-[3px] bg-bgpurplelight border-[1px] border-solid border-borderpurplelight6 py-[5px] px-2.5 h-fit flex items-center gap-[7px] hover:border-btnblue">
                                        <div className='cursor-pointer w-5 h-5'>
                                            <Addcircleicon />
                                        </div>
                                        <span className="text-[17px] leading-6 font-medium font-Montserrat text-lightwhite">Deep Lear</span>
                                        <div className='cursor-pointer w-5 h-5'>
                                            <Crossicon />
                                        </div>
                                    </div>
                                    <div className="rounded-[3px] bg-bgpurplelight border-[1px] border-solid border-borderpurplelight6 py-[5px] px-2.5 h-fit flex items-center gap-[7px] hover:border-btnblue">
                                        <div className='cursor-pointer w-5 h-5'>
                                            <Addcircleicon />
                                        </div>
                                        <span className="text-[17px] leading-6 font-medium font-Montserrat text-lightwhite">Edge</span>
                                        <div className='cursor-pointer w-5 h-5'>
                                            <Crossicon />
                                        </div>
                                    </div>
                                    <div className="rounded-[3px] bg-bgpurplelight border-[1px] border-solid border-borderpurplelight6 py-[5px] px-2.5 h-fit flex items-center gap-[7px] hover:border-btnblue">
                                        <div className='cursor-pointer w-5 h-5'>
                                            <Addcircleicon />
                                        </div>
                                        <span className="text-[17px] leading-6 font-medium font-Montserrat text-lightwhite">AI Ethics</span>
                                        <div className='cursor-pointer w-5 h-5'>
                                            <Crossicon />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2.5 mb-[30px]">
                        <label className="block text-lg leading-6 font-medium text-lightwhite font-Montserrat tracking-[1px]">Tone</label>
                        <div className="flex flex-col gap-[22px]">
                            <div
                                className="p-4 bg-bgpurplelight3 border-[1px] border-solid border-borderpurplelight2 rounded-md w-full flex justify-between items-center gap-2 cursor-pointer select-none"
                                onClick={() => setToneDropdownOpen((prev) => !prev)}
                            >
                                <span className="text-[17px] leading-6 text-lightwhite4 font-Montserrat font-medium">Select Tone</span>
                                <div
                                    className={`w-[22px] h-[22px] transition-transform duration-300 ${toneDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                                >
                                    <Dropdownarrow />
                                </div>
                            </div>
                            <div
                                className={`relative bg-bgblack4 border-[1px] border-solid border-borderpurplelight7 rounded-md flex flex-col overflow-y-auto transition-all duration-300 ease-in-out ${toneDropdownOpen ? 'max-h-[500px] opacity-100 mt-2' : 'max-h-0 opacity-0 pointer-events-none mt-0'}`}
                                style={{ willChange: 'max-height, opacity' }}
                            >
                                <div className="py-4 px-5 relative border-b-[1px] border-b-solid border-b-borderpurplelight7 flex flex-col gap-[3px] cursor-pointer before:absolute before:-left-px before:bottom-0 before:bg-transparent before:w-1 before:h-[calc(100%+1px)] group hover:before:bg-btnblue transition-all duration-500 ease-in-out">
                                    <span className="text-base leading-5 font-medium font-Montserrat text-lightwhite3 group-hover:text-lightwhite9 transition-all duration-500 ease-in-out">Formal</span>
                                    <p className='text-sm leading-[17px] font-normal font-Montserrat text-lightwhite5 group-hover:text-lightwhite transition-all duration-500 ease-in-out'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                                <div className="py-4 px-5 relative border-b-[1px] border-b-solid border-b-borderpurplelight7 flex flex-col gap-[3px] cursor-pointer before:absolute before:-left-px before:bottom-0 before:bg-transparent before:w-1 before:h-[calc(100%+1px)] group hover:before:bg-btnblue transition-all duration-500 ease-in-out">
                                    <span className="text-base leading-5 font-medium font-Montserrat text-lightwhite3 group-hover:text-lightwhite9 transition-all duration-500 ease-in-out">In Formal</span>
                                    <p className='text-sm leading-[17px] font-normal font-Montserrat text-lightwhite5 group-hover:text-lightwhite transition-all duration-500 ease-in-out'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                                <div className="py-4 px-5 relative border-b-[1px] border-b-solid border-b-borderpurplelight7 flex flex-col gap-[3px] cursor-pointer before:absolute before:-left-px before:bottom-0 before:bg-transparent before:w-1 before:h-[calc(100%+1px)] group hover:before:bg-btnblue transition-all duration-500 ease-in-out">
                                    <span className="text-base leading-5 font-medium font-Montserrat text-lightwhite3 group-hover:text-lightwhite9 transition-all duration-500 ease-in-out">Professional</span>
                                    <p className='text-sm leading-[17px] font-normal font-Montserrat text-lightwhite5 group-hover:text-lightwhite transition-all duration-500 ease-in-out'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-start'>
                        <button type="button" className="bg-btnblue border-[1px] border-solid border-btnblue rounded-md py-[17px] px-[30px] cursor-pointer text-[16px] leading-5 font-semibold font-Montserrat text-white">Create Article</button>
                    </div>
                </form>
            </div>
            <div className='pt-[50px]'>
                <h2 className='text-3xl leading-[37px] font-semibold font-Montserrat text-lightwhite mb-[50px]'>Select Title</h2>
                {/* <h3 className='text-3xl leading-[37px] font-semibold font-Montserrat text-lightwhite mb-[50px]'>Select Suggest Topic</h3> */}
                <div className='h-[calc(100vh-200px)] w-full overflow-y-auto'>
                    <div className='h-full flex justify-center items-center flex-col gap-5'>
                        <Nodataicon />
                        <span className="text-lg leading-[22px] font-medium font-Montserrat text-bgpurplelight5">No Title Found</span>
                    </div>
                    {/* <div className='grid grid-cols-2 gap-x-[35px] gap-y-[30px]'>
                        <div className="bg-bgblack4 border-[1px] border-solid border-borderpurplelight6 p-6 rounded-md flex flex-col items-start gap-9 cursor-pointer">
                            <p className="text-lg leading-7 font-medium font-Montserrat text-lightwhite">How AI is Reshaping the Future of UX Design.</p>
                            <div className="w-[30px] h-[30px]">
                                <Arrowcircleright />
                            </div>
                        </div>
                        <div className="bg-bgblack4 border-[1px] border-solid border-borderpurplelight6 p-6 rounded-md flex flex-col items-start gap-9 cursor-pointer">
                            <p className="text-lg leading-7 font-medium font-Montserrat text-lightwhite">The Hidden Bias in AI: A Call for Ethical Innovation.</p>
                            <div className="w-[30px] h-[30px]">
                                <Arrowcircleright />
                            </div>
                        </div>
                        <div className="bg-bgblack4 border-[1px] border-solid border-borderpurplelight6 p-6 rounded-md flex flex-col items-start gap-9 cursor-pointer">
                            <p className="text-lg leading-7 font-medium font-Montserrat text-lightwhite">Web3: Unlocking the Power of Decentralized Applications.</p>
                            <div className="w-[30px] h-[30px]">
                                <Arrowcircleright />
                            </div>
                        </div>
                        <div className="bg-bgblack4 border-[1px] border-solid border-borderpurplelight6 p-6 rounded-md flex flex-col items-start gap-9 cursor-pointer">
                            <p className="text-lg leading-7 font-medium font-Montserrat text-lightwhite">Top Mobile App Development Trends to Watch in 2024.</p>
                            <div className="w-[30px] h-[30px]">
                                <Arrowcircleright />
                            </div>
                        </div>
                        <div className="bg-bgblack4 border-[1px] border-solid border-borderpurplelight6 p-6 rounded-md flex flex-col items-start gap-9 cursor-pointer">
                            <p className="text-lg leading-7 font-medium font-Montserrat text-lightwhite">Scaling Smart: Proven Strategies for Startup Growth.</p>
                            <div className="w-[30px] h-[30px]">
                                <Arrowcircleright />
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="flex flex-col gap-[25px]">
                        <div className="bg-bgblack4 border-[1px] border-solid border-borderpurplelight6 p-5 rounded-md">
                            <h6 className="text-lg leading-7 font-semibold font-Montserrat text-lightwhite mb-3">How AI is Reshaping the Future of UX Design.</h6>
                            <p className="text-base leading-7 font-medium font-Montserrat text-lightwhite5 mb-3">Artificial Intelligence (AI) is revolutionizing the way we approach User Experience (UX) design, blending creativity with cutting-edge technology. This transformation is enabling designers to create more intuitive, personalized, and efficient interfaces than ever before.</p>
                            <p className="text-base leading-7 font-medium font-Montserrat text-lightwhite5 mb-3">One of AI's biggest contributions to UX is personalization. By analyzing user data, AI algorithms can predict preferences and deliver tailored experiences. example, e-commerce platforms use AI to suggest products based on browsing history, making interactions seamless and engaging.</p>
                            <p className="text-base leading-7 font-medium font-Montserrat text-lightwhite5 mb-3">AI is also streamlining the design process. Tools like Adobe Sensei and Figma’s AI integrations automate repetitive tasks such as generating design variations or resizing elements, allowing designers to focus on innovation and problem-solving.</p>
                            <button type="button" className="bg-btnblue border-[1px] border-solid border-btnblue rounded-md py-[14px] px-[18px] cursor-pointer text-[14px] leading-[17px] font-semibold font-Montserrat text-white mt-[30px]">Generate Article</button>
                        </div>
                        <div className="bg-bgblack4 border-[1px] border-solid border-borderpurplelight6 p-5 rounded-md">
                            <h6 className="text-lg leading-7 font-semibold font-Montserrat text-lightwhite mb-3">How AI is Reshaping the Future of UX Design.</h6>
                            <p className="text-base leading-7 font-medium font-Montserrat text-lightwhite5 mb-3">Artificial Intelligence (AI) is revolutionizing the way we approach User Experience (UX) design, blending creativity with cutting-edge technology. This transformation is enabling designers to create more intuitive, personalized, and efficient interfaces than ever before.</p>
                            <p className="text-base leading-7 font-medium font-Montserrat text-lightwhite5 mb-3">One of AI's biggest contributions to UX is personalization. By analyzing user data, AI algorithms can predict preferences and deliver tailored experiences. example, e-commerce platforms use AI to suggest products based on browsing history, making interactions seamless and engaging.</p>
                            <p className="text-base leading-7 font-medium font-Montserrat text-lightwhite5 mb-3">AI is also streamlining the design process. Tools like Adobe Sensei and Figma’s AI integrations automate repetitive tasks such as generating design variations or resizing elements, allowing designers to focus on innovation and problem-solving.</p>
                            <button type="button" className="bg-btnblue border-[1px] border-solid border-btnblue rounded-md py-[14px] px-[18px] cursor-pointer text-[14px] leading-[17px] font-semibold font-Montserrat text-white mt-[30px]">Generate Article</button>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
