import React, { useEffect } from 'react'
import { url } from '@/constants'
import axios from 'axios'
import { EventCard } from '@/components/eventCard'
import bgImage from "../../../public/assets/events.png"
export default function events() {
  useEffect(()=>{
    axios.get(`${url}/events`)
    .then(
      d => console.log(d.data)
    ).catch(e=>console.error(e))

  },[])
  return (
<div className=' relative h-screen pl-24 '>
<div
    className='fixed top-0 left-0 w-full h-screen  bg-fixed bg-center bg-no-repeat bg-cover'
    style={{ backgroundImage: `url(${bgImage.src})` }}
  ></div>

  <div className='fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-[#070707] opacity-70 to-transparent z-10'></div>
<div className='relative overflow-y-auto z-10 mx-16 py-12 flex flex-col items-center space-y-4'>
  <p className='font-black-ops-one text-white text-4xl text-center  '> EVENTS</p>
  <input type='text' className='border-gray-300 focus:outline-none focus:border-gray-300 bg-transparent rounded-lg text-white m-auto w-96 ' placeholder='Search for events'></input>
<div className='flex flex-wrap items-center justify-between  w-full'>
  <div className='font-black-ops-one p-4 m-4 rounded-md   bg-[#26272a] text-white'>
    Flagship Events
  </div>
  <div className='font-black-ops-one p-4 m-4 rounded-md   bg-[#26272a] text-white'>
    Club Events
  </div>
  <div className='font-black-ops-one p-4 m-4 rounded-md   bg-[#26272a] text-white'>
    Department Events
  </div>
  <div className='font-black-ops-one p-4 m-4 rounded-md   bg-[#26272a] text-white'>
    Competitions
  </div>


</div>
<EventCard title={"Panache"} desc1={"Panache is a Fashion walk. In this the participants may participate individually and in groups as well. ( grouppreferably )"} desc2={"In this the group may consist of 8-16 members."}/>
<EventCard title={"Panache"} desc1={"Panache is a Fashion walk. In this the participants may participate individually and in groups as well. ( grouppreferably )"} desc2={"In this the group may consist of 8-16 members."}/>
<EventCard title={"Panache"} desc1={"Panache is a Fashion walk. In this the participants may participate individually and in groups as well. ( grouppreferably )"} desc2={"In this the group may consist of 8-16 members."}/>
</div>
</div>

// </div>


  )
}

