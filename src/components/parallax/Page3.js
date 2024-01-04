import React from 'react'
import Image from 'next/image'
// import cloudBottom from "../../../public/assets/home/page2/bottomCloud.png"
import cloudback from "../../../public/assets/home/page3/cloudback.png"
import fort from "../../../public/assets/home/page3/fort.png"
import moon from "../../../public/assets/home/page3/moon.png"
import cloudBig from "../../../public/assets/home/page2/cloudBig.png"
import cloudSmall from "../../../public/assets/home/page2/cloudSmall.png"
import { useParallax } from 'react-scroll-parallax'
function Page3() {
  const {ref:fortRef} = useParallax({
   translateX:[-30,0]
  })
  const {ref:bottom} = useParallax({
    translateY:[0,20]
  })
  const {ref:moon} = useParallax({
    translateY:[0,20]
  })
  return (
    <div className='h-screen w-full relative flex items-center overflow-hidden'>
        {/* <Image className='absolute bottom-0 ' src = {bg}/> */}
        <div className='h-screen w-full absolute bottom-0' style={{ background: "linear-gradient(180deg, #5DAAE7 -7.87%, #BEEBFF 74.4%)"}}></div>
        {/* <Image className='absolute bottom-0 z-20' src={cloudBottom}/> */}
        <Image ref={bottom} className='absolute bottom-0 z-0 w-full max-h-40' src={cloudback}/>
        <Image
        ref={fortRef}
          
        className='absolute w-full md:w-[55%] bottom-0  object-top  z-10  max-h-[80%] 'style={{objectFit:"cover",
    minHeight:"70%",objectPosition:"top"}} src={fort}/>
        <Image ref = {moon} className='absolute top-[10%] left-[13%] w-[300px] z-0' src={moon}/>
        <Image className='absolute top-32 right-2 scale-50 z-0' src={cloudBig}/>
        <Image className='absolute top-24 right-40 scale-50 z-0' src={cloudSmall}/>
        <p className='absolute top-[25%] right-60 text-transparent bg-clip-text font-sankaran text-4xl md:text-7xl ' style={{background: "linear-gradient(180deg, #071627 15.73%, #67B3D6 157.53%);"}}>Events</p>
        <button className='btn z-20 px-12 mt-16 absolute top-[35%] text-white right-[20%]' style={{
    background: '#0D2138', boxShadow: '0px 6px 14.899999618530273px rgba(102, 179, 215, 0.80)', borderRadius: 20
        }} >Explore</button>
    </div>
  )
}

export default Page3