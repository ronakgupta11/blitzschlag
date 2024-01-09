import React from 'react'
import bg from "../../public/assets/hospitality/bg.svg"
import Image from 'next/image'
import {motion} from "framer-motion"
function hospitality() {
  return (
    <div>
<div className='w-full relative bg-[#FCF2D9]'>
<Image className='w-full' src={bg}/>

</div>
<div className='flex absolute font-sankaran text-center bg-clip-text top-0 pt-12 md:top-[10%] bg-[#FCF2d9]  flex-col i space-y-2 w-full'>
        <p className='text-2xl md:text-5xl text-transparent'>
          Passes And Accommodation
        </p>
</div>

<div className='bg-[#310816] w-full px-10 py-20 flex flex-wrap items-center justify-center m-auto'>
    <div className='flex flex-wrap my-8 mx-4 items-center justify-center'>
        <div className='bg-[#fcf2d9] w-[240px] h-[240px] m-4 rounded-xl'>

        </div>
        <div className='bg-[#fcf2d9] w-[240px] h-[240px] m-4 rounded-xl'>

        </div>
        <div className='bg-[#fcf2d9] w-[240px] h-[240px] m-4 rounded-xl'>

        </div>


    </div>
    <div className='w-full m-auto flex flex-col items-center justify-center space-y-4'>
        <p className='text-[#FFC08E] text-4xl  my-8 font-sankaran '>Rules and regulations</p>
      <ul className="m-4 w-full md:w-[80%] text-[#FcF2d9] leading-loose flex flex-col list-disc font-amita text-lg space-y-8">
  <li>
    All guests will be provided with mattresses, bedsheets, pillows, and blankets. All these commodities issued to them would have to be returned in sound condition to the organizers during check-out.
  </li>
  <li>
    <p>Random checks would be made to avoid any illegal stay at the campus. Any team failing to produce their electronic/physical receipts of accommodation would be heavily fined and disqualified.</p>
  </li>
  <li>
    <p>Entry will be only through the 'Main Gate' of MNIT Jaipur. All other gates will be closed for entry.</p>
  </li>
  <li>
    <p>Participants are expected to not create any kind of nuisance which might trouble other participants in the room.</p>
  </li>
  <li>
    <p>All guests are required to carry their valid government photo id proofs at all times. In addition, the student participants are also required to carry their valid College photo id card. Any guest failing to produce their id card will not be permitted inside the campus during Blitzschlag 2024.</p>
  </li>
  <li>
    <p>Alcohol, drugs, sharp objects, and explosives of any kind are strictly prohibited inside the campus. Any other item if deemed unsafe will be prohibited. The decision of the Security and Blitzschlag team will be final in case of any disputes.</p>
  </li>
  <li>
    <p>No outside vehicles will be allowed into the campus during the Blitzschlag 2024.</p>
  </li>
  <li>
    <p>All guests are required to maintain the decorum and cleanliness of the campus, and follow the rules of the campus at all times.</p>
  </li>
  <li>
    <p>Blitzschlag 2024 and MNIT Jaipur will not be responsible for any mishaps that occur throughout the duration of their stay.</p>
  </li>
</ul>



    </div>
</div>


</div>
  )
}

export default hospitality