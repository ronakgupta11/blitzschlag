import React, { useEffect } from 'react'
// import { url } from '@/constants'
import axios from 'axios'
// import { EventCard } from '@/components/eventCard'
import bgImage from "../../public/assets/events.png"
import TeamCard from '@/components/TeamCard'
import EventRegisterModal from '@/components/EventRegisterModal'

export default function events() {
 
  return (
<div className=' relative h-screen pl-24 '>
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
        <EventRegisterModal/>
    </div>
</div>
</div>
</div>

// </div>


  )
}

