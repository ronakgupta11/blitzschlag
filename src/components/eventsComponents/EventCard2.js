import React from 'react'
import Image from 'next/image'
import img from "../../../public/assets/img4.png"
function EventCard2({name,desc,image,id}) {
  return (
    <div className='flex flex-row-reverse items-center m-4'>
      <div className='image md:w-40 w-32 h-52 md:h-60 rounded-lg'>
        <Image className='w-full h-full rounded-lg' src={img}/>

      </div>
      <div className='flex flex-col bg-[#894e0d] px-6 items-center font-amita text-white justify-around md:w-96 w-72 h-48 md:h-56 border-b-2 border-t-2 border-l-2  rounded-bl-[100px] '> 
      <p className=' md:text-2xl text-lg font-bold'>Panache</p>
      <p className='md:text-md text-sm'>
      Panache is a Fashion walk. In this the participants may participate individually and in groups as well. ( grouppreferably ).  
      </p>
      <button className='px-4 text-sm text-white py-1  bg-[#9D390E] border-white border rounded-3xl'>Know more</button>

      </div>
        
    </div>
  )
}

export default EventCard2