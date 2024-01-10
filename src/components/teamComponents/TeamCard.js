import React from 'react'
import { FaInstagram,FaEnvelope,FaLinkedin } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'

function TeamCard({data}) {
  
  return (
    <div className='flex sm:flex-col m-4 items-center justify-center space-x-2 space-y-2'>

    <div className='img-div flex flex-col w-full m-4'>
        <div className='rounded-full bg-red-500 w-12 h-12 self-end'></div>
        <div className='rounded-full bg-red-500 w-32 h-32 self-center flex items-center justify-center p-3'>
            <img className="rounded-full w-full h-full" src={"https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"}/>
        </div>
        <div className='rounded-full bg-red-500 w-8 h-8 self-start'></div>


    </div>
    <div className='text-div flex flex-col items-center space-y-6 '>
    <p className='text-[#393939] text-xl font-amita'>{data?.Position}</p>
    <p className='text-[#393939] text-lg font-amita'>{data?.Name}</p>

    <div className='flex items-center space-x-4 text-[#393939]'>
         {data?.instagram && <Link href={data?.instagram} target='_blank'>
          <span><FaInstagram size={20}/></span>
          </Link>}
         {data?.linkedin && <Link href={data?.linkedin} target='_blank'>
          <span><FaLinkedin size={20}/></span>
          </Link>}
          {data?.Gmail && <Link href={`mailto:${data.Gmail}`} target='_blank'>
          <span><FaEnvelope size={20}/></span>
          </Link>}
         
        </div>
    </div>
    </div>
  )
}

export default TeamCard