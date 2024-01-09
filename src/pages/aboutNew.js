import React from 'react'
import { connect } from 'react-redux'
import img_1 from '../../public/assets/about/img_1.png'
import bg_container from '../../public/assets/about/bg_container.png'
import Image from 'next/image'
 const aboutNew = () => {
  return (
        <div className='bg-[#ffa401] flex w-full h-screen relative'>
          <div className='w-[50%]'>
           <div className='font-samarkan text-[64px] font-normal leading-39px text-left'>
            About Us
           </div>
           <div>

           </div>
          </div>
            <div  className='absolute right-0 top-0 overflow-hidden object-cover max-w-[40%] h-screen'>
              <Image className='w-full h-full' src={img_1} /> 
            </div>


    </div>
  )
}
export default aboutNew