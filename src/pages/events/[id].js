import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import borderDown from "../../../public/assets/events/border.png";

import Image from 'next/image';
import axios from 'axios'
import { url } from '@/constants'
function eventPage() {
    const router = useRouter()

    const id = router.query.id
    console.log(id)

    useEffect(()=>{
        axios.get(`${url}/events/${id}`).then(
            d => console.log(d.data)
          ).catch(e=>console.error(e))
        },[id])
  return (
    <div className='bg-black relative w-full  overflow-x-hidden'>

    <div className="flex w-full items-center relative ">
    <Image className='rotate-180' src={borderDown}></Image>
<Image className='rotate-180' src={borderDown}></Image>
<Image className='rotate-180' src={borderDown}></Image>

        {/* <Image src={borderDown2}></Image> */}
      </div>
   <div className=' relative  flex items-center justify-between h-screen'>
      <div className='bg-[#FBAE9E] z-10 rounded-r-3xl border-r-8 border-[#fb5e3f] h-full w-[50%]'>

      </div>
      <div>

      </div>
      </div>
      <div className="flex w-full items-center">

      <Image src={borderDown}></Image>
        <Image src={borderDown}></Image>
        <Image src={borderDown}></Image>
      </div>

    </div>
      
      
      
  )
}

export default eventPage