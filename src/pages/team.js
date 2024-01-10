import React, { useEffect, useState, useRef } from "react";
import flower1 from "../../public/assets/team/flower1.png";
import flower from "../../public/assets/team/flower.png";
import Image from "next/image";
import TeamCard from "@/components/teamComponents/TeamCard";
import { Parallax } from "react-scroll-parallax";
import teamData from "../components/teamComponents/teamData.json"

export default function team() {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef([
    { id: "president", ref: useRef() },
    { id: "general", ref: useRef() },
    { id: "cultural", ref: useRef() },
    { id: "technical", ref: useRef() },
    { id: "finance", ref: useRef() },
    { id: "massMedia", ref: useRef() },
    { id: "publicity", ref: useRef() },
    { id: "marketing", ref: useRef() },
    { id: "logistics", ref: useRef() },
    { id: "decor", ref: useRef() },
  ]);

  const containerRef = useRef();
 
  useEffect(() => {
    if (sectionRefs.current[activeSection] && sectionRefs.current[activeSection].ref.current) {
      sectionRefs.current[activeSection].ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [activeSection]);

  return (
    <div className="w-full    bg-[#fffbed] relative p-4 ">
      <div className="flex w-full md:space-x-64 space-x-48 items-center justify-center">
        <Image src={flower} />
        <Image src={flower} />
      </div>
      <div className="w-full flex space-x-2 items-center justify-between">
        <div className="border-2 w-[25%] md:w-[35%] border-[#411C00] rounded-lg"></div>
        <p className="font-amita text-2xl md:text-4xl text-[#5A2700] ">
          Our Team
        </p>
        <div className="border-2 w-[25%] md:w-[35%] border-[#411C00] rounded-lg"></div>
      </div>
      <Image className="absolute top-0 left-0" src={flower1} />
      <div className="flex h-screen w-full flex-col md:flex-row items-center justify-around  p-2 ">
        <div
          id="TeamContainer"
          ref={containerRef}
          className="h-full overflow-y-scroll"
        >
          {Object.keys(teamData).map((category,k)=>{
            return(
              <div
              key={k}
              ref={sectionRefs.current[k].ref}
              id={category}
              className="cards flex flex-wrap items-center justify-around my-12"
            >
              {teamData[category].map(
                (m,k)=>{
                  return(
                    <TeamCard data = {m} key ={k}/>
                  )
                }
              )}
            </div>

            )
          })}


        </div>

        {/* <div className='relative h-full flex align-start justify-start'>
          <div style={{ alignSelf: "start" }} className=' text-[#606060] text-lg font-amita h-full '>
            <ul className='flex flex-row md:flex-col items-center justify-around space-x-3 space-y-6 overflow-x-auto w-full '>
              <li className={activeSection === 0 ? 'text-black text-xl border-b-2 border-black cursor-pointer' : ' cursor-pointer'}
             onClick={() => {
              setActiveSection(0)
              sectionRefs.current[0].ref.current.scrollIntoView({ behavior: 'smooth' })}}>
                  President Team
          
              </li>
              <li className={activeSection === 1? 'text-black text-xl border-b-2 border-black cursor-pointer' : ' cursor-pointer'}
             onClick={() => {
              setActiveSection(1)
              sectionRefs.current[1].ref.current.scrollIntoView({ behavior: 'smooth' })}}>
                  Operations Team
          
              </li>
              <li className={activeSection === 2 ? 'text-black text-xl border-b-2 border-black cursor-pointer' : ' cursor-pointer'}
             onClick={() => {
              setActiveSection(2)
              sectionRefs.current[2].ref.current.scrollIntoView({ behavior: 'smooth' })}}>
                  Cultural Team
          
              </li>
              <li className={activeSection === 3 ? 'text-black text-xl border-b-2 border-black cursor-pointer' : ' cursor-pointer'}
             onClick={() => {
              setActiveSection(3)
              sectionRefs.current[3].ref.current.scrollIntoView({ behavior: 'smooth' })}}>
                  Technical Team
          
              </li>
              <li className={activeSection === 4 ? 'text-black text-xl border-b-2 border-black cursor-pointer' : ' cursor-pointer'}
             onClick={() => {
              setActiveSection(4)
              sectionRefs.current[4].ref.current.scrollIntoView({ behavior: 'smooth' })}}>
                  Finance Team
          
              </li>
              <li className={activeSection === 5 ? 'text-black text-xl border-b-2 border-black cursor-pointer' : ' cursor-pointer'}
             onClick={() => {
              setActiveSection(5)
              sectionRefs.current[5].ref.current.scrollIntoView({ behavior: 'smooth' })}}>
                  Mass and Media Team
          
              </li>
              <li className={activeSection === 6 ? 'text-black text-xl border-b-2 border-black cursor-pointer' : ' cursor-pointer'}
             onClick={() => {
              setActiveSection(6)
              sectionRefs.current[6].ref.current.scrollIntoView({ behavior: 'smooth' })}}>
                  Publicity Team
          
              </li>
              <li className={activeSection === 7 ? 'text-black text-xl border-b-2 border-black cursor-pointer' : ' cursor-pointer'}
             onClick={() => {
              setActiveSection(7)
              sectionRefs.current[7].ref.current.scrollIntoView({ behavior: 'smooth' })}}>
                  Marketing Team
          
              </li>
              <li className={activeSection === 8 ? 'text-black text-xl border-b-2 border-black cursor-pointer' : ' cursor-pointer'}
             onClick={() => {
              setActiveSection(8)
              sectionRefs.current[8].ref.current.scrollIntoView({ behavior: 'smooth' })}}>
                  Logostics Team
          
              </li>
              <li className={activeSection === 9 ? 'text-black text-xl border-b-2 border-black cursor-pointer' : ' cursor-pointer'}
             onClick={() => {
              setActiveSection(9)
              sectionRefs.current[9].ref.current.scrollIntoView({ behavior: 'smooth' })}}>
                  Decor Team
          
              </li>
             
              
              
            </ul>
    </div>
   </div> */}
      </div>
    </div>
  );
}

{
  /* <div className=' relative h-screen pl-24 '>
<div
    className='fixed top-0 left-0 w-full h-screen  bg-fixed bg-center bg-no-repeat bg-cover'
    style={{ backgroundImage: `url(${bgImage.src})` }}
  ></div>

  <div className='fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-[#070707] opacity-70 to-transparent z-10'></div>
<div className='relative overflow-y-auto z-10 mx-16 py-12 flex flex-col items-center space-y-4'>
  <p className='font-black-ops-one text-white text-4xl text-center  '>Our Team</p>
  <div className='my-36'></div>
<div className='flex flex-col items-center justify-center m-8'>
    <p className='text-center font-black-ops-one text-white'>Technical Secretary</p>
    <div className='flex flex-wrap'>
        <TeamCard/>
        <TeamCard/>
        <TeamCard/>

    </div>
</div>
</div>
</div> */
}
