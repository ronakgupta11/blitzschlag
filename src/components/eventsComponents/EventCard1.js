<<<<<<< HEAD:src/components/eventsComponents/EventCard.js
import React from "react";
import Image from "next/image";
import img from "../../../public/assets/img4.png";
function EventCard({ name, desc, image, id }) {
=======
import React from 'react'
import Image from 'next/image'
import img from "../../../public/assets/img4.png"
function EventCard1({name,desc,image,id}) {
>>>>>>> ae1d87ebc652fa60dac2f009b4cb6bbc00e3e364:src/components/eventsComponents/EventCard1.js
  return (
    <div className="flex items-center m-4">
      <div className="image md:w-40 w-32 h-52 md:h-60 rounded-lg">
        <Image className="w-full h-full rounded-lg" src={img} />
      </div>
<<<<<<< HEAD:src/components/eventsComponents/EventCard.js
      <div className="flex flex-col bg-[#894e0d] px-6 items-center font-amita text-white justify-around md:w-96 w-72 h-48 md:h-56 border-b-2 border-t-2 border-r-2  rounded-br-[80px] ">
        <p className=" md:text-2xl text-lg font-bold">Panache</p>
        <p className="md:text-lg text-md">
          Panache is a Fashion walk. In this the participants may participate
          individually and in groups as well. ( grouppreferably ).
        </p>
        <button className="px-4 text-white py-2 btn hover:border-white hover:bg-[#9D390E] hover:text-white bg-[#9D390E] border-white border-2 rounded-3xl">
          Know more
        </button>
=======
      <div className='flex flex-col bg-[#894e0d] px-6 items-center font-amita text-white justify-around md:w-96 w-72 h-48 md:h-56 border-b-2 border-t-2 border-r-2  rounded-br-[100px] '> 
      <p className=' md:text-2xl text-lg font-bold'>Panache</p>
      <p className='md:text-md text-sm'>
      Panache is a Fashion walk. In this the participants may participate individually and in groups as well. ( grouppreferably ).  
      </p>
      <button className='px-4 text-sm text-white py-1 self-end mr-12 bg-[#9D390E] border-white border rounded-3xl'>Know more</button>

>>>>>>> ae1d87ebc652fa60dac2f009b4cb6bbc00e3e364:src/components/eventsComponents/EventCard1.js
      </div>
    </div>
  );
}

<<<<<<< HEAD:src/components/eventsComponents/EventCard.js
export default EventCard;
=======
export default EventCard1
>>>>>>> ae1d87ebc652fa60dac2f009b4cb6bbc00e3e364:src/components/eventsComponents/EventCard1.js
