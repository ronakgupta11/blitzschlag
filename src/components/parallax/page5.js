import React from 'react'
import Image from 'next/image'
import cloudfront from "../../../public/assets/home/page5/cloudfront.png"
import cloudback from "../../../public/assets/home/page5/cloudback.png"
import fort from "../../../public/assets/home/page5/fort.png"
import moon from "../../../public/assets/home/page5/moon.png"
import cloudBig from "../../../public/assets/home/page2/cloudBig.png"
import cloudSmall from "../../../public/assets/home/page2/cloudSmall.png"
import { useParallax } from 'react-scroll-parallax'
function Page5() {
  const {ref:fortRef} = useParallax({
    translateY:[50,0]
  })
  return (
    <div className='h-screen w-full relative flex items-center overflow-hidden'>
        {/* <Image className='absolute bottom-0 ' src = {bg}/> */}
        <div className='h-screen w-full absolute bottom-0' style={{ background:" linear-gradient(180deg, #292929 -7.2%, #5F5F5F 79.53%)"}}></div>
        <Image className='absolute bottom-0 z-20 w-full h-96' src={cloudfront}/>
        <Image className='absolute bottom-0 z-0 w-full h-[500px]' src={cloudback}/>
        <Image ref={fortRef} className='absolute bottom-0 z-0 w-full md:w-[60%] max-h-[80%] md:max-h-screen object-cover object-top' src={fort}/>
        <Image className='absolute top-0  right-10 scale-50 z-0' src={moon}/>
        <Image className='absolute top-48 right-2 scale-50 z-0' src={cloudBig}/>
        <Image className='absolute top-24 right-60 scale-50 z-0' src={cloudSmall}/>
        <p className='absolute md:right-16   text-transparent bg-clip-text font-sankaran text-4xl md:text-7xl ' style={{background:"linear-gradient(180deg, #FFF 28.93%, #A4A4A4 78.47%)"}}>About Us</p>
        <button className='btn z-20 px-12 absolute bottom-[15%] text-white right-[10%]' style={{
          background: '#282828 ', boxShadow: '0px 6px 14.899999618530273px rgba(0, 0, 0, 0.50)', borderRadius: 20
        }} >About Us</button>
    </div>
  )
}

export default Page5