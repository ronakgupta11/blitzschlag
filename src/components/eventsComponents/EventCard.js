import React from 'react'
import Image from 'next/image'
import img from "../../../public/assets/img4.png"
function EventCard({name,desc,image,id}) {
  return (
    <div className='flex items-center m-4'>
      <div className='image md:w-40 w-32 h-52 md:h-60 rounded-lg'>
        <Image className='w-full h-full rounded-lg' src={img}/>

      </div>
      <div className='flex flex-col bg-[#894e0d] px-6 items-center font-amita text-white justify-around md:w-96 w-72 h-48 md:h-56 border-b-2 border-t-2 border-r-2  rounded-br-[80px] '> 
      <p className=' md:text-2xl text-lg font-bold'>Panache</p>
      <p className='md:text-lg text-md'>
      Panache is a Fashion walk. In this the participants may participate individually and in groups as well. ( grouppreferably ).  
      </p>
      <button className='px-4 text-sm text-white  btn hover:border-white hover:bg-[#9D390E] hover:text-white bg-[#9D390E] border-white border-2 rounded-3xl'>Know more</button>

      </div>
        
    </div>
  )
}

export default EventCard