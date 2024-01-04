import React from 'react'
import Image from 'next/image'
import cloudfront from "../../../public/assets/home/page4/cloudfront.png"
import cloudback from "../../../public/assets/home/page4/cloudback.png"
import fort from "../../../public/assets/home/page4/fort.png"
import moon from "../../../public/assets/home/page4/moon.png"
import cloudBig from "../../../public/assets/home/page2/cloudBig.png"
import cloudSmall from "../../../public/assets/home/page2/cloudSmall.png"
import { useParallax } from 'react-scroll-parallax'
function Page4() {
  const {ref:fortRef} = useParallax(
    {
      translateX:[30,0]
    }
  )
  return (
    <div className='h-screen w-full relative overflow-hidden flex items-center'>
        {/* <Image className='absolute bottom-0 ' src = {bg}/> */}
        <div className='h-screen w-full absolute bottom-0' style={{ background:" linear-gradient(180deg, #CF7C33 -7.2%, #FFE793 79.53%)"}}></div>
        <Image className='absolute bottom-0 z-20 w-full ' src={cloudfront}/>
        <Image className='absolute bottom-0 z-0 w-full' src={cloudback}/>
        <Image ref={fortRef} className='absolute bottom-0 right-0 z-0 w-full md:w-[60%] max-h-[80%] md:max-h-screen  object-cover object-top' src={fort}/>
        <Image className='absolute w-[200px] md:w-[370px] bottom-[3%] left-10  -z-10 md:z-0' src={moon}/>
        <Image className='absolute top-32 right-2 scale-50 z-0' src={cloudBig}/>
        <Image className='absolute top-24 right-40 scale-50 z-0' src={cloudSmall}/>
        <p className='absolute top-5 left-5 text-transparent bg-clip-text font-sankaran text-4xl md:text-7xl' style={{background: "linear-gradient(97deg, #2D1502 28.53%, #B16529 99.14%)"}}>Campus Ambassador</p>
        <button className='btn z-20 px-12 mt-16 absolute top-[15%] text-white left-[10%]' style={{
     background: '#2D1502', boxShadow: '0px 6px 14.899999618530273px rgba(100, 57, 25, 0.80)', borderRadius: 20
        }} >Register</button>
    </div>
  )
}

export default Page4