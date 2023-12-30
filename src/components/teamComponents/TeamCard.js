import React from 'react'
import { FaInstagram,FaEnvelope,FaLinkedin } from 'react-icons/fa'
import Image from 'next/image'

function TeamCard({post,name,image}) {
  return (
    <div className='flex sm:flex-col m-4 items-center justify-center space-x-2 space-y-2'>

    <div className='img-div flex flex-col w-full m-2'>
        <div className='rounded-full bg-red-500 w-12 h-12 self-end'></div>
        <div className='rounded-full bg-red-500 w-32 h-32 self-center flex items-center justify-center p-3'>
            <img className="rounded-full w-full h-full" src={"https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"}/>
        </div>
        <div className='rounded-full bg-red-500 w-8 h-8 self-start'></div>


    </div>
    <div className='text-div flex flex-col items-center space-y-6 '>
    <p className='text-[#393939] text-xl font-amita'>Technical Secretary</p>
    <p className='text-[#393939] text-md font-amita'>Ronak Gupta</p>

    <div className='flex items-center space-x-2'>
          <span><FaInstagram size={20}/></span>
          <span><FaLinkedin size={20}/></span>
          <span><FaEnvelope size={20}/></span>
        </div>
    </div>
    </div>
  )
}

export default TeamCard