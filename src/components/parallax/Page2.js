import React from 'react'
import Image from 'next/image'
import cloudBottom from "../../../public/assets/home/page2/bottomCloud.png"
import cloudBg from "../../../public/assets/home/page2/cloudBg.png"
import hawa from "../../../public/assets/home/page2/hawa.png"
import moon from "../../../public/assets/home/page2/moon.png"
import { useParallax } from 'react-scroll-parallax'
function Page2() {
  const {ref:fortref} = useParallax({
      translateY:[20,0]

  })

  const {ref:bottom} = useParallax({
    translateY:[0,20]
  })



  

  return (
    <div className='h-[700px]  w-full relative flex flex-col items-center overflow-hidden' style={{ background: "linear-gradient(180deg, #E6745A -7.87%, #FFBCB6 74.4%)"}}>

      <div className='self-start mt-24 ml-4'>

<p className=' text-transparent bg-clip-text bg-[#2E0D02] font-sankaran text-5xl md:text-7xl  '>Padharo Mhare Fest</p>
<button className='btn z-20 px-12 mt-12 text-white' style={{
  background: '#4E2420', boxShadow: '0px 6px 14.899999618530273px rgba(143, 55, 39, 0.80)', borderRadius: 20
}} >Know More</button>
</div>
      <div className='w-full h-screen'>

        <Image ref={bottom} className='absolute max-h-[80%]  bottom-0 w-full z-20' src={cloudBottom}/>
        <Image className='absolute bottom-0 w-full z-0' src={cloudBg}/>
        <Image ref={fortref} className='absolute bottom-0 z-10 w-full md:w-[60%] max-h-[90%] object-cover' src={hawa}/>
        <Image  className='scale-50 md:scale-75 absolute right-0  z-0' src={moon}/>
      </div>
       
        
  </div>
  )
}

export default Page2