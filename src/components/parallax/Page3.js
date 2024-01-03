import React from 'react'
import Image from 'next/image'
import cloudBottom from "../../../public/assets/home/page2/bottomCloud.png"
import cloudBg from "../../../public/assets/home/page2/cloudBg.png"
import fort from "../../../public/assets/home/page3/fort.png"
import moon from "../../../public/assets/home/page3/moon.png"
import cloudBig from "../../../public/assets/home/page2/cloudBig.png"
import cloudSmall from "../../../public/assets/home/page2/cloudSmall.png"
function Page3() {
  return (
    <div className='h-screen w-full relative flex items-center overflow-hidden'>
        {/* <Image className='absolute bottom-0 ' src = {bg}/> */}
        <div className='h-screen w-full absolute bottom-0' style={{ background: "linear-gradient(180deg, #5DAAE7 -7.87%, #BEEBFF 74.4%)"}}></div>
        {/* <Image className='absolute bottom-0 z-20' src={cloudBottom}/> */}
        {/* <Image className='absolute bottom-0 z-0' src={cloudBg}/> */}
        <Image
          
        className='absolute bottom-0  object-top  z-10 w-[60%] max-h-[80%] 'style={{objectFit:"cover",
    minHeight:"70%",objectPosition:"top"}} src={fort}/>
        <Image className='absolute top-[20%] left-[13%] w-[240px] z-0' src={moon}/>
        <Image className='absolute top-32 right-2 scale-50 z-0' src={cloudBig}/>
        <Image className='absolute top-24 right-40 scale-50 z-0' src={cloudSmall}/>
        <p className='absolute top-[25%] right-60 text-transparent bg-clip-text font-sankaran text-4xl md:text-7xl ' style={{background: "linear-gradient(180deg, #071627 15.73%, #67B3D6 157.53%);"}}>Events</p>
    </div>
  )
}

export default Page3