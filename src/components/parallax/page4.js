import React from 'react'
import Image from 'next/image'
import cloudfront from "../../../public/assets/home/page4/cloudfront.png"
import cloudback from "../../../public/assets/home/page4/cloudback.png"
import fort from "../../../public/assets/home/page4/fort.png"
import moon from "../../../public/assets/home/page4/moon.png"
import { useParallax } from 'react-scroll-parallax'
function Page4() {
  const {ref:fortRef} = useParallax(
    {
      translateX:[30,0]
    }
  )
  return (
    <div className='h-[700px]  w-full relative overflow-hidden flex flex-col items-center'style={{ background:" linear-gradient(180deg, #CF7C33 -7.2%, #FFE793 79.53%)"}}>
              <div className='self-start mt-12 ml-4'>

<p className='text-transparent bg-clip-text font-sankaran text-5xl md:text-7xl' style={{background: "linear-gradient(97deg, #2D1502 28.53%, #B16529 99.14%)"}}>Campus Ambassador</p>
<button className='btn z-20 px-12 mt-12 text-white' style={{
  background: '#2D1502', boxShadow: '0px 6px 14.899999618530273px rgba(100, 57, 25, 0.80)', borderRadius: 20
}} >Register</button>
</div>
<Image className='absolute w-[200px] md:w-[370px] bottom-[10%] left-10  -z-10 md:z-0' src={moon}/>

      <div className='w-full h-screen'>

        <Image className='absolute bottom-0 z-20 w-full ' src={cloudfront}/>
        <Image className='absolute bottom-0 z-0 w-full' src={cloudback}/>
        <Image ref={fortRef} className='absolute bottom-0 right-0 z-0 w-full md:w-[60%] max-h-[80%] md:max-h-screen  object-cover object-top' src={fort}/>
      </div>

    </div>
  )
}

export default Page4