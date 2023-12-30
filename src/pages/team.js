import React, { useEffect } from 'react'
import flower1 from "../../public/assets/team/flower1.png"
import flower from "../../public/assets/team/flower.png"
import Image from 'next/image'
import TeamCard from '@/components/teamComponents/TeamCard'
// import { url } from '@/constants'
// import axios from 'axios'
// import { EventCard } from '@/components/eventCard'
// import bgImage from "../../public/assets/events.png"
// import TeamCard from '@/components/TeamCard'


export default function team() {
 
  return (


<div className='w-full h-full bg-[#fffbed] relative p-4'>
  <div className='flex w-full md:space-x-64 space-x-48 items-center justify-center'>
    <Image src={flower}/>
    <Image src={flower}/>
  </div>
  <div className='w-full flex space-x-2 items-center justify-between'>
  <div className='border-2 w-[25%] md:w-[35%] border-[#411C00] rounded-lg'></div>
    <p className='font-amita text-2xl md:text-4xl text-[#5A2700] '>Technical team</p>
    <div className='border-2 w-[25%] md:w-[35%] border-[#411C00] rounded-lg'></div>
  </div>
  <Image className="absolute top-0 left-0" src ={flower1}/>
  <div className='flex w-full h-full flex-col md:flex-row items-center justify-around m-2 p-2 '>

    <div className='cards flex flex-wrap'>
<TeamCard/>
<TeamCard/>
<TeamCard/>
<TeamCard/>
    </div>
    <div className=' text-[#606060]  text-lg font-amita h-full '>
      <ul className='flex flex-row md:flex-col items-center justify-around space-x-3 '>
        <li>Technical Team</li>
        <li>Technical Team</li>
        <li className='text-black text-xl border-b-2 border-black'>Technical Team</li>
        <li>Technical Team</li>
        <li>Technical Team</li>
        <li>Technical Team</li>
        <li>Technical Team</li>
      </ul>

    </div>
  </div>
</div>


  )
}

{/* <div className=' relative h-screen pl-24 '>
<div
    className='fixed top-0 left-0 w-full h-screen  bg-fixed bg-center bg-no-repeat bg-cover'
    style={{ backgroundImage: `url(${bgImage.src})` }}
  ></div>

  <div className='fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-[#070707] opacity-70 to-transparent z-10'></div>
<div className='relative overflow-y-auto z-10 mx-16 py-12 flex flex-col items-center space-y-4'>
  <p className='font-black-ops-one text-white text-4xl text-center  '>Our Team</p>
  <div className='my-36'></div>
<div className='flex flex-col items-center justify-center m-8'>
    <p className='text-center font-black-ops-one text-white'>Technical Secretary</p>
    <div className='flex flex-wrap'>
        <TeamCard/>
        <TeamCard/>
        <TeamCard/>

    </div>
</div>
</div>
</div> */}