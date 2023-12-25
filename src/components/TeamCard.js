import React from 'react'
// import { IoMdMail } from "react-icons/io"
import { FaInstagram,FaEnvelope,FaLinkedin } from 'react-icons/fa'
// import { FaLinkedin } from 'react-icons/fa'
function TeamCard({name}) {
  return (
    <div>
      <div className='h-full w-full '></div>

    <div className='m-4 text-white'>

      <div>
        <img/>
      </div>
      <div className='flex flex-col items-center space-y-6'>
        <p>{"Roank Gupta"}</p>
        <div className='flex items-center space-x-2'>
          <span><FaInstagram size={20}/></span>
          <span><FaLinkedin size={20}/></span>
          <span><FaEnvelope size={20}/></span>
        </div>
      </div>

    </div>
    </div>

  )
}

export default TeamCard