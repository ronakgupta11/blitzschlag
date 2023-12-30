import React from 'react'
import header from "../../../public/assets/events/header.png"
import Image from 'next/image'
function EventHeader() {
  return (
    <div className='w-full'>
        <Image className='w-full' src={header}/>
    </div>
  )
}

export default EventHeader