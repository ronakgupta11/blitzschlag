import React, { useEffect } from 'react'
import { url } from '@/constants'
import axios from 'axios'
import { EventCard } from '@/components/eventCard'
export default function events() {
  useEffect(()=>{
    axios.get(`${url}/events`)
    .then(
      d => console.log(d.data)
    ).catch(e=>console.error(e))

  },[])
  return (
//     <div className="bg-white flex flex-row justify-center w-full">
//     <div className="bg-white overflow-hidden w-[1280px] h-[832px]">
//       <div className="relative h-[874px]">
//         <img
//           className="absolute w-[1280px] h-[832px] top-0 left-0 object-cover"
//           alt="Beautiful shining"
//           src="https://c.animaapp.com/vfGnrlfu/img/beautiful-shining-stars-night-sky-1.png"
//         />
//         <div className="absolute w-[1280px] h-[832px] top-0 left-0 bg-[#070707b8]" />
//         <img className="absolute w-[56px] h-[648px] top-[92px] left-[32px]" alt="Menu" src="MENU.png" />
//         <div className="absolute top-[39px] left-[620px] [font-family:'Black_Ops_One-Regular',Helvetica] font-normal text-white text-[32px] text-center tracking-[0] leading-[44px] whitespace-nowrap">
//           EVENTS
//         </div>
//         <div className="absolute w-[896px] h-[42px] top-[112px] left-[236px] bg-neutral-950 rounded-[4px] border border-solid border-[#767676] opacity-[0.72]" />
//         <div className="absolute top-[112px] left-[308px] [font-family:'Amita-Regular',Helvetica] font-normal text-[#888888] text-[16px] tracking-[0] leading-[40px] whitespace-nowrap">
//           Search for events
//         </div>
//         <img
//           className="absolute w-[24px] h-[24px] top-[121px] left-[252px]"
//           alt="Charm search"
//           src=""
//         />
//         {/* <div className="absolute w-[203px] h-[56px] top-[178px] left-[236px]">
//           <div className="relative w-[201px] h-[56px] bg-[url(rectangle-121.svg)] bg-[100%_100%]">
//             <div className="absolute top-[6px] left-[24px] [font-family:'Black_Ops_One-Regular',Helvetica] font-normal text-white text-[18px] text-center tracking-[0] leading-[44px] whitespace-nowrap">
//               Flagship Events
//             </div>
//           </div>
//         </div>
//         <div className="absolute w-[243px] h-[56px] top-[178px] left-[470px]">
//           <div className="relative w-[241px] h-[56px] bg-[url(rectangle-125.svg)] bg-[100%_100%]">
//             <div className="absolute top-[6px] left-[24px] [font-family:'Black_Ops_One-Regular',Helvetica] font-normal text-[#888888] text-[18px] text-center tracking-[0] leading-[44px] whitespace-nowrap">
//               Department&nbsp;&nbsp;Events
//             </div>
//           </div>
//         </div>
//         <div className="absolute w-[180px] h-[56px] top-[178px] left-[744px]">
//           <div className="relative w-[178px] h-[56px] bg-[url(rectangle-124.svg)] bg-[100%_100%]">
//             <div className="absolute top-[6px] left-[24px] [font-family:'Black_Ops_One-Regular',Helvetica] font-normal text-[#888888] text-[18px] text-center tracking-[0] leading-[44px] whitespace-nowrap">
//               Clubs&nbsp;&nbsp;Events
//             </div>
//           </div>
//         </div>
//         <div className="absolute w-[180px] h-[56px] top-[178px] left-[955px]">
//           <div className="relative w-[178px] h-[56px] bg-[url(rectangle-123.svg)] bg-[100%_100%]">
//             <div className="absolute top-[6px] left-[24px] [font-family:'Black_Ops_One-Regular',Helvetica] font-normal text-[#888888] text-[18px] text-center tracking-[0] leading-[44px] whitespace-nowrap">
//               Competitions
//             </div>
//           </div>
//         </div> */}
// <EventCard title={"Panache"} desc1={""} desc2={""}/>
//       </div>
//     </div>
//   </div>
<>
eventCard</>
  )
}

