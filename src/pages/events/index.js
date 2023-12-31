import React, { useEffect } from 'react'
import { url } from '@/constants'
import axios from 'axios'
import EventList from '@/components/eventsComponents/EventList'
// import { EventCard } from '@/components/eventCard'
import CategoriesCard from '@/components/eventsComponents/CategoriesCard'

import EventHeader from '@/components/eventsComponents/EventHeader'
export default function events() {
  // useEffect(()=>{
  //   axios.get(`${url}/events`)
  //   .then(
  //     d => console.log(d.data)
  //   ).catch(e=>console.error(e))

  // },[])

  useEffect(() => {
    // Scroll the page on component mount
    window.scrollTo({ top: 100, behavior: 'smooth' }); // Adjust the value based on how much you want to scroll
  }, []);
  return (

    <div className='flex flex-col items-center justify-center w-full'>
      
<EventHeader/>
<EventList/>
{/* <CategoriesCard/> */}
    </div>

// </div>


  )
}

{/* <div className=' relative'>
<div
    className='fixed top-0 left-0 w-full h-screen  bg-fixed bg-center bg-no-repeat bg-cover'
    style={{ backgroundImage: `url(${bgImage.src})` }}
  ></div>

  <div className='fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-[#070707] opacity-70 to-transparent z-10'></div>
<div className='relative h-screen z-10 overflow-x-hidden py-20 pl-10 w-[85%] md:w-[80%] m-auto flex flex-col items-center space-y-4'>
  <p className='font-black-ops-one text-white text-4xl text-center  '> EVENTS</p>
  <input type='text' className='border-gray-300 focus:outline-none focus:border-gray-300 bg-transparent rounded-lg text-white w-60  md:w-96 ' placeholder='Search for events'></input>
<div className='flex flex-wrap items-center justify-between  w-full'>
  <div className='font-black-ops-one p-4 my-4 mx-2 rounded-md   bg-[#26272a] text-white'>
    Flagship
  </div>
  <div className='font-black-ops-one p-4 my-4 mx-2 rounded-md   bg-[#26272a] text-white'>
    Club Events
  </div>
  <div className='font-black-ops-one p-4 my-4 mx-2 rounded-md   bg-[#26272a] text-white'>
    Department
  </div>
  <div className='font-black-ops-one p-4 my-4 mx-2 rounded-md   bg-[#26272a] text-white'>
    Competitions
  </div>


</div>
<EventCard title={"Panache"} desc1={"Panache is a Fashion walk. In this the participants may participate individually and in groups as well. ( grouppreferably )"} desc2={"In this the group may consist of 8-16 members."}/>
<EventCard title={"Panache"} desc1={"Panache is a Fashion walk. In this the participants may participate individually and in groups as well. ( grouppreferably )"} desc2={"In this the group may consist of 8-16 members."}/>
<EventCard title={"Panache"} desc1={"Panache is a Fashion walk. In this the participants may participate individually and in groups as well. ( grouppreferably )"} desc2={"In this the group may consist of 8-16 members."}/>
</div>
</div> */}
