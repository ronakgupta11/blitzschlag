import React from 'react'
import bsnl from "../../../public/assets/sponsors/BSNL.png"
import SponsorCard from './SponsorCard'
import borderDown from "../../../public/assets/sponsors/borderdown.png";
import flower1 from "../../../public/assets/sponsors/flower1.png"
import flower2 from "../../../public/assets/sponsors/flower2.png"
import Link from 'next/link'
import Image from 'next/image';
import ONGC_logo from "../../../public/assets/sponsors/ONGC_Logo.png";
import Bajaj_logo from "../../../public/assets/sponsors/Bajaj_logo.svg";
import feast_logo from "../../../public/assets/sponsors/feast_logo.svg";
import basking_logo from "../../../public/assets/sponsors/baskin_logo.svg";
import Hero_logo from "../../../public/assets/sponsors/Hero_Logo.svg";
import sprite_logo from "../../../public/assets/sponsors/sprite_logo.svg";
import reliance_logo from "../../../public/assets/sponsors/reliance_logo.svg";
import jsw_logo from "../../../public/assets/sponsors/JSW_logo.svg";
import icici_logo from "../../../public/assets/sponsors/icici_logo.png";
import coco_logo from "../../../public/assets/sponsors/coco_logo.png";
import ninexm_logo from "../../../public/assets/sponsors/9xm_logo.png";
import Barbeque_logo from "../../../public/assets/sponsors/Barbeque_logo.png"
import rayban_logo from "../../../public/assets/sponsors/rayban_logo.png"
import lakme from "../../../public/assets/sponsors/lakme_logo.png"


export default function SponsorList() {
  return (
    <div className='bg-[#C66800] w-full flex flex-col items-center overflow-x-hidden'>
    <div className="flex w-full items-center relative ">
        <Image src={borderDown}></Image>
        <Image src={borderDown}></Image>
        <Image src={borderDown}></Image>
        {/* <Image src={borderDown2}></Image> */}
      </div>
      <div
      className='absolute rounded-b-3xl bg-[#4f0c26] px-8 md:px-12 py-2 md:py-4 border-b-2 border-r-2 border-l-2 border-white'

      ><p className='text-white font-sankaran text-[12px] lg:text-[20px]'>Our Sponsors</p></div>
<div className='absolute flex w-full justify-between'>
    <Image src ={flower1}/>
    <Image src ={flower2}/>
</div>
        <div className='h-60 z-10 flex flex-wrap m-3 p-3 items-center justify-center '>

        <div className=" flex items-center justify-center">
              <p className="text-5xl font-sankaran text-white text-center">
                Coming Soon
              </p>
            </div>
        </div>
       
      <div
      className=' rounded-b-3xl bg-[#4f0c26] px-8 md:px-12 py-2 md:py-4 border-b-2 border-r-2 border-l-2 border-white'

      ><p className='text-white font-sankaran text-[12px] lg:text-[20px]'>Past Sponsors</p></div>
      <div className=' z-10 flex flex-wrap m-3 p-3 items-center justify-center '>
        <SponsorCard src={bsnl} link={"/"} />
        <SponsorCard src={ONGC_logo} link={"/"} />
        <SponsorCard src={Bajaj_logo} link={"/"} />
        <SponsorCard src={feast_logo} link={"/"} />
        <SponsorCard src={basking_logo} link={"/"} />
        <SponsorCard src={Hero_logo} link={"/"} />
        <SponsorCard src={sprite_logo} link={"/"} />
        <SponsorCard src={reliance_logo} link={"/"} />
        <SponsorCard src={jsw_logo} link={"/"} />
        <SponsorCard src={icici_logo} link={"/"} />
        <SponsorCard src={coco_logo} link={"/"} />
        <SponsorCard src={ninexm_logo} link={"/"} />
        <SponsorCard src={Barbeque_logo} link={"/"} />
        <SponsorCard src={rayban_logo} link={"/"} />
        <SponsorCard src={lakme} link={"/"} />
      </div>
      
<button className='bg-red btn hover:bg-[#4f0c26] font-sankaran  hover:border-white rounded-[40px] border-2 my-4 text-white border-white px-16 text-[20px] bg-[#4f0c26]'>
    <Link href="https://forms.gle/1ViUV2xSo6Uq7Ayc7" target="_blank">
    Sponsor Us
</Link>
</button>
<div className="flex w-full items-center">
<Image className='rotate-180' src={borderDown}></Image>
<Image className='rotate-180' src={borderDown}></Image>
<Image className='rotate-180' src={borderDown}></Image>

      </div>
    </div>
  )
}
