import React from 'react'
import Image from 'next/image'
import cloudfront from "../../../public/assets/home/page5/cloudfront.png"
import cloudback from "../../../public/assets/home/page5/cloudback.png"
import fort from "../../../public/assets/home/page5/fort.png"
import moon from "../../../public/assets/home/page5/moon.png"
// import cloudBig from "../../../public/assets/home/page2/cloudBig.png"
// import cloudSmall from "../../../public/assets/home/page2/cloudSmall.png"
import { useParallax } from 'react-scroll-parallax'
function Page5() {
  const {ref:fortRef} = useParallax({
    translateY:[30,0]
  })
  return (
    <div className='h-[700px]  w-full relative flex flex-col items-center overflow-hidden' style={{ background:" linear-gradient(180deg, #292929 -7.2%, #5F5F5F 79.53%)"}}>
      <div className=' self-end'>

<Image className='scale-50 z-0' src={moon}/>
      </div>
        <div className='self-end z-20 mr-4 md:mr-12'>

        <p className=' text-transparent bg-clip-text font-sankaran text-5xl md:text-7xl ' style={{background:"linear-gradient(180deg, #FFF 28.93%, #A4A4A4 78.47%)"}}>About Us</p>
        <button className='btn z-20  px-12 mt-12 text-white' style={{
          background: '#282828 ', boxShadow: '0px 6px 14.899999618530273px rgba(0, 0, 0, 0.50)', borderRadius: 20
        }} >About Us</button>
        </div>
      <div className='w-full h-screen'>
        <Image className='absolute bottom-0 z-20 w-full h-96' src={cloudfront}/>
        <Image className='absolute bottom-0 z-0 w-full h-[500px]' src={cloudback}/>
        <Image ref={fortRef} className='absolute bottom-0 z-0 w-full md:w-[60%] max-h-[80%] md:max-h-full object-cover object-top' src={fort}/>
      </div>

    </div>
  )
}

export default Page5