import React from 'react'

function Navbar() {
  return (
    <div className='nav py-5 w-full flex bg-[#0A0A0A] opacity-[0.85]'>
    <ul className='w-full flex justify-evenly align-middle text-white text-center font-black-ops-one text-[16px] font-normal leading-[44px]' >
      <li>
  
      </li>
      <li>
      <a href="">Home</a>
      </li>
      <li>
      <a href="">Events</a>
      </li>
      <li>
      <a href="">Contact Us</a>
      </li>
      <li className='flex flex-col justify-center align-middle'>
       <button className='bg-[#463000] btn-sm lg:btn text-white lg:px-6 text-center flex flex-col justify-center align-middle rounded-full'>
        <a className='text-[16px]' href="">Register</a>
       </button>
      </li>
      <li className='flex flex-col align-middle justify-center'>
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="18" viewBox="0 0 32 18" fill="none">
  <rect width="16" height="3.2" rx="1.6" fill="white"/>
  <rect x="16" y="14.4004" width="16" height="3.2" rx="1.6" fill="white"/>
  <rect y="7.2002" width="32" height="3.2" rx="1.6" fill="white"/>
</svg>
      </li>
    </ul>
    </div>
  )
}

export default Navbar