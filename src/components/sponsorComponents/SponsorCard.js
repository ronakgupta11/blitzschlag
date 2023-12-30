import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function SponsorCard({src,link}) {
  return (
    <Link href={link} className='w-32 h-16 md:w-60 md:h-40 p-2 rounded-[16px] md:rounded-[40px] m-4 bg-white  flex justify-center'>
        <Image className="" src={src}/> 
    </Link>
  )
}

export default SponsorCard