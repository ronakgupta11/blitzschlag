import React from 'react'
import Image from 'next/image'
import cloudBottom from "../../../public/assets/home/page2/bottomCloud.png"
import cloudBg from "../../../public/assets/home/page2/cloudBg.png"
import hawa from "../../../public/assets/home/page2/hawa.png"
import moon from "../../../public/assets/home/page2/moon.png"
import cloudBig from "../../../public/assets/home/page2/cloudBig.png"
import cloudSmall from "../../../public/assets/home/page2/cloudSmall.png"
function Page5() {
  return (
    <div className='h-screen w-full relative flex items-center'>
        {/* <Image className='absolute bottom-0 ' src = {bg}/> */}
        <div className='h-screen w-full absolute bottom-0' style={{ background: "linear-gradient(180deg, #E6745A -7.87%, #FFBCB6 74.4%)"}}></div>
        <Image className='absolute bottom-0 z-20' src={cloudBottom}/>
        <Image className='absolute bottom-0 z-0' src={cloudBg}/>
        <Image className='absolute bottom-0 z-0 w-[60%]' src={hawa}/>
        <Image className='absolute top-10 right-10 scale-50 z-0' src={moon}/>
        <Image className='absolute top-32 right-2 scale-50 z-0' src={cloudBig}/>
        <Image className='absolute top-24 right-40 scale-50 z-0' src={cloudSmall}/>
        <p className='absolute top-5 left-5 text-transparent bg-clip-text bg-[#2E0D02] font-sankaran text-4xl md:text-7xl '>Padharo Mahare Fest</p>
    </div>
  )
}

export default Page5