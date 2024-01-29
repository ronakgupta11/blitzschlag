import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function SponsorCard({src,link}) {
  return (
    <div className='w-40 h-32 md:w-72 md:h-60 p-6 rounded-[16px] md:rounded-[40px] m-4 bg-white  flex justify-center'>
        <img className="" src={src}/> 
    </div>
  )
}

export default SponsorCard