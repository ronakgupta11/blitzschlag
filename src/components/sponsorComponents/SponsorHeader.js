import React from 'react'
import header from "../../../public/assets/sponsors/header.png"
import Image from 'next/image'
function SponsorHeader() {
  return (
    <div className='w-full'>
        <Image className='w-full' src={header}/>
    </div>
  )
}

export default SponsorHeader