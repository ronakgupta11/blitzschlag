import React from 'react'
import Image from 'next/image'
import cloudBottom from "../../../public/assets/home/page2/bottomCloud.png"
import cloudBg from "../../../public/assets/home/page2/cloudBg.png"
import fort from "../../../public/assets/home/page4/fort.png"
import moon from "../../../public/assets/home/page4/moon.png"
import cloudBig from "../../../public/assets/home/page2/cloudBig.png"
import cloudSmall from "../../../public/assets/home/page2/cloudSmall.png"
function Page4() {
  return (
    <div className='h-screen w-full relative flex items-center'>
        {/* <Image className='absolute bottom-0 ' src = {bg}/> */}
        <div className='h-screen w-full absolute bottom-0' style={{ background:" linear-gradient(180deg, #CF7C33 -7.2%, #FFE793 79.53%)"}}></div>
        <Image className='absolute bottom-0 z-20' src={cloudBottom}/>
        <Image className='absolute bottom-0 z-0' src={cloudBg}/>
        <Image className='absolute bottom-0 right-0 z-0 w-full sm:w-[60%] max-h-[60%] sm:max-h-screen object-cover object-top' src={fort}/>
        <Image className='absolute top-10 left-10  z-0' src={moon}/>
        <Image className='absolute top-32 right-2 scale-50 z-0' src={cloudBig}/>
        <Image className='absolute top-24 right-40 scale-50 z-0' src={cloudSmall}/>
        <p className='absolute top-5 left-5 text-transparent bg-clip-text font-sankaran text-4xl md:text-7xl' style={{background: "linear-gradient(97deg, #2D1502 28.53%, #B16529 99.14%)"}}>Campus Ambassador</p>
    </div>
  )
}

export default Page4