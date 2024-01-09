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
        <div className='bg-[#fcf2d9] w-[240px] h-80 m-4 p-4 rounded-xl text-[#310816] flex flex-col space-y-4'>
<p className='text-2xl font-amita font-bold'>Maharaja Pass </p>
<p className='text-xl font-amita font-bold'>₹ 2500</p>
<p className='font-semibold text-sm'>The Maharaja pass enables you to participate in any flagship event of your choice as well as provides accommodation for 3 days from 2nd Feb 10 AM to 5th Feb. You can take part in any club event during the course of the fest. Furthermore, you will be able to attend all three pronites of Blitzschlag'24.</p>
        </div>
        <div className='bg-[#fcf2d9] w-[240px] h-80 m-4 p-4 rounded-xl text-[#310816] flex flex-col space-y-4'>
<p className='text-2xl font-amita font-bold'>Diwan Pass </p>
<p className='text-xl font-amita font-bold'>₹ 1100</p>
<p className='font-semibold text-sm'>A Diwan pass entitles you to lodge for the day as well as participate in any one flagship event of your choice. You can take part in any of the club activities scheduled on that day as well as attend the same-day pronite.</p>
        </div>
        <div className='bg-[#fcf2d9] w-[240px] h-80 m-4 p-4 rounded-xl text-[#310816] flex flex-col space-y-4'>
<p className='text-2xl font-amita font-bold'>Rawat Pass</p>
<p className='text-xl font-amita font-bold'>₹ 200</p>
<p className='font-semibold text-sm'>A Rawat pass allows you to take part in all of that day's club events. For eg if you take this pass for first day then you can take part in any of the club activities scheduled on that day (except flagship events & pronites.</p>
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