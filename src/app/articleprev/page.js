import React from 'react'
import Image from 'next/image'
import articleimage1 from "@/assets/image/articleimage1.png"
import articleimage2 from "@/assets/image/articleimage2.png"
import Link from 'next/link'

export default function Articleprev() {
  return (
    <div className='pt-10 px-10 pb-[55px]'>
        <div className="max-w-[986px]">
            <h3 className="text-[32px] leading-10 font-semibold font-Montserrat text-lightwhite">It looks like you're interested in perhaps writing a blog post.</h3>
            <p className="text-lg leading-[26px] font-medium font-Montserrat text-lightwhite5 mt-[15px]">Here's a step-by-step guide on how you can use AFFiNE to write and organize your blog content:</p>
            <Image src={articleimage1} alt="articleimage1" className="w-full h-[320px] mt-[25px]" />
            <h6 className="text-lg leading-[22px] font-bold font-Montserrat text-lightwhite mt-[25px]">1. Setting Up Your Blog Document</h6>
            <p className="text-lg leading-[26px] font-medium font-Montserrat text-lightwhite5 mt-[15px]">Use different blocks for headings, paragraphs, images, and other media. AFFiNE's block-based editor allows you to easily rearrange and format your content.</p>
            <p className="text-lg leading-[26px] font-medium font-Montserrat text-lightwhite5 mt-[15px]">Not my skills, experience, or portfolio structure — just my taste! They understood my aesthetic through my portfolio.</p>
            <p className="text-lg leading-[26px] font-medium font-Montserrat text-lightwhite5 mt-[15px]">This experience taught me how crucial it  to brand yourself. Over time I’ve maintained consistent branding social profiles and portfolio.</p>
            <Image src={articleimage2} alt="articleimage2" className="w-full h-[320px] mt-[25px]" />
            <h6 className="text-lg leading-[22px] font-bold font-Montserrat text-lightwhite mt-[25px]">2. Structuring Your Blog Post</h6>
            <p className="text-lg leading-[26px] font-medium font-Montserrat text-lightwhite5 mt-[15px]">By following these steps, you can efficiently create and manage your blog content using AFFiNE. Let me know if you need further assistance or specific features explained!</p>
            <p className="text-lg leading-[26px] font-medium font-Montserrat text-lightwhite5 mt-[15px]">Once satisfied, you can export your blog post in various formats or directly publish it if AFFiNE integrated with your blogging platform.</p>
            <p className="text-lg leading-[26px] font-medium font-Montserrat text-lightwhite5 mt-[15px]">This experience taught me how crucial it  to brand yourself. Over time I've maintained consistent branding social profiles and portfolio.</p>
            <h6 className="text-lg leading-[22px] font-bold font-Montserrat text-lightwhite mt-[25px]">3. Enhancing Your Blog Post</h6>
            <p className="text-lg leading-[26px] font-medium font-Montserrat text-lightwhite5 mt-[15px]">A few years ago, something interesting happened. A freelance client hired me just because they liked my taste.</p>
            <p className="text-lg leading-[26px] font-medium font-Montserrat text-lightwhite5 mt-[15px]">Not my skills, experience, or portfolio structure — just my taste! They understood my aesthetic through my portfolio.</p>
            <p className="text-lg leading-[26px] font-medium font-Montserrat text-lightwhite5 mt-[15px]">This experience taught me how crucial it  to brand yourself. Over time I've maintained consistent branding social profiles and portfolio.</p>
            <div className='my-10 flex gap-2.5'>
              <button type='button' className='py-2.5 px-5 bg-transparent border-[1px] border-solid border-borderpurplelight8 rounded text-sm leading-[17px] font-medium font-Montserrat text-lightwhite10'>#History</button>
              <button type='button' className='py-2.5 px-5 bg-transparent border-[1px] border-solid border-borderpurplelight8 rounded text-sm leading-[17px] font-medium font-Montserrat text-lightwhite10'>#Lifestyle</button>
              <button type='button' className='py-2.5 px-5 bg-transparent border-[1px] border-solid border-borderpurplelight8 rounded text-sm leading-[17px] font-medium font-Montserrat text-lightwhite10'>#Learning</button>
            </div>
            <Link href={"/articledetails"}>
              <button type="submit" className='bg-btnblue border-[1px] border-solid border-btnblue rounded-md py-[14px] px-[42px] cursor-pointer text-[16px] leading-5 font-semibold font-Montserrat text-white'>Publish</button>
            </Link>
        </div>
    </div>
  )
} 
