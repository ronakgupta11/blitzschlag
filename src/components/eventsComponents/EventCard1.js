
import React from 'react'
import Image from 'next/image'
import img from "../../../public/assets/events/event.png"
function EventCard1({name,desc,image,id}) {

  return (
    <div className="flex relative items-center scale-70 ml-28 md:ml-0 md:scale-90 m-4">
      <div className="image absolute -left-20 md:-left-32 -top-4  h-44 md:h-64">
        <Image className="w-full h-full rounded-lg" src={img} />
      </div>
      <div className='flex flex-col bg-[#894e0d]  items-center font-amita text-white justify-around md:w-[420px] w-[290px] h-40 md:h-[207px] border-b-2 border-t-2 border-r-2  rounded-br-[100px] '> 
      <p className=' md:text-2xl text-lg font-bold'>Panache</p>
      <p className='md:text-md self-end text-xs md:text-sm w-[213px] md:w-[316px]'>
      Panache is a Fashion walk. In this the participants may participate individually and in groups as well. ( grouppreferably ).  
      </p>
      <button className='px-4 text-xs md:text-sm text-white py-1 self-end mr-20 md:mr-16 bg-[#9D390E] border-white border rounded-3xl'>Know more</button>

      </div>
    </div>
  );
}

export default EventCard1;
