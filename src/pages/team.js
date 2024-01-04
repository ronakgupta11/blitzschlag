import React, { useEffect,useState,useRef } from 'react'
import flower1 from "../../public/assets/team/flower1.png"
import flower from "../../public/assets/team/flower.png"
import Image from 'next/image'
import TeamCard from '@/components/teamComponents/TeamCard'
// import { url } from '@/constants'
// import axios from 'axios'
// import { EventCard } from '@/components/eventCard'
// import bgImage from "../../public/assets/events.png"
// import TeamCard from '@/components/TeamCard'


export default function team() {
 
  const [activeSection, setActiveSection] = useState('');
  const teamContainerRef = useRef(null);
  const targetRef = useRef(null)
  const targetRef2 =useRef(null)
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const sections = teamContainerRef.current.children; // Replace with your actual content sections
  //     let currentSection = '';

  //     // sections.forEach((section) => {
  //     //   const sectionTop = section.offsetTop - 100; // Adjust the offset as needed
  //     //   const sectionBottom = sectionTop + section.offsetHeight;

  //     //   if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
  //     //     currentSection = section.id;
  //     //   }
  //     // });
  //     console.log(sections)
  //     setActiveSection(currentSection);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
  const handleScroll = () => {
    const sections = teamContainerRef.current.children; // Replace with your actual content sections
    let currentSection = '';
    
    if (teamContainerRef.current) {
      const rect = targetRef.current.getBoundingClientRect();
      const rect2=targetRef.current.getBoundingClientRect();
      console.log(rect.top , "," , rect.bottom,window.innerHeight)
      const isInView = rect.top <= window.innerHeight-100 && rect.bottom >= 0;
      const isInView2 = rect2.top <= window.innerHeight-400 && rect2.bottom >= 0;
      if (isInView) {
        // Element is in view
        // Call your function or perform any action here
        console.log(targetRef.current.id);
        setActiveSection(targetRef.current.id) 
       
      }else{
        setActiveSection('') 
    }
    if (isInView2) {
      // Element is in view
      // Call your function or perform any action here
      console.log(targetRef2.current.id);
      setActiveSection(targetRef2.current.id) 
     
    }else{
      setActiveSection('') 
  }
    }
   
    // console.log(sections)
   
  };
  return (


<div className='w-full    bg-[#fffbed] relative p-4'>
  <div className='flex w-full md:space-x-64 space-x-48 items-center justify-center'>
    <Image src={flower}/>
    <Image src={flower}/>
  </div>
  <div className='w-full flex space-x-2 items-center justify-between'>
  <div className='border-2 w-[25%] md:w-[35%] border-[#411C00] rounded-lg'></div>
    <p className='font-amita text-2xl md:text-4xl text-[#5A2700] '>Technical team</p>
    <div className='border-2 w-[25%] md:w-[35%] border-[#411C00] rounded-lg'></div>
  
  </div>
  <Image className="absolute top-0 left-0" src ={flower1}/>
  <div className='flex h-screen w-full flex-col md:flex-row items-center justify-around  p-2 '>

<div id='TeamContainer' onScroll={handleScroll} ref={teamContainerRef} className='h-full  overflow-y-scroll '>
<div id='Technical' ref={targetRef2} onScroll={()=>{
  console.log("scrolled")
}}  className='cards  flex flex-wrap my-12'>
    <TeamCard/>
<TeamCard/>
<TeamCard/>
<TeamCard/>
    </div>
    <div id='Publicity'
     style={{color:"red"}}
    ref={targetRef} className='cards flex flex-wrap my-12'>
    <TeamCard/>
<TeamCard/>
<TeamCard/>
<TeamCard/>
    </div>
    <div id='Cultural'  className='cards flex flex-wrap my-12'>
    <TeamCard/>
<TeamCard/>
<TeamCard/>
<TeamCard/>
    </div>
    <div id=''  className='cards flex flex-wrap my-12'>
    <TeamCard/>
<TeamCard/>
<TeamCard/>
<TeamCard/>
    </div>
    <div className='cards flex flex-wrap my-12'>
    <TeamCard/>
<TeamCard/>
<TeamCard/>
<TeamCard/>
    </div>
</div>
   <div className='relative h-full flex align-start justify-start'>
   <div 
   style={{alignSelf:"staet"}}
   className=' text-[#606060]  text-lg font-amita   h-full '>
       <ul className='flex flex-row md:flex-col items-center justify-around space-x-3 space-y-6'>
        <div>Hello {activeSection}</div>
          <li id='TechnicalTeam' className={activeSection === 'TechnicalTeam' ? 'text-red-500' : ''}>
            Technical Team
          </li>
          <li id='Publicity' className={activeSection === 'Publicity' ? 'text-red-500' : ''}>
            Publicity Team
          </li>
          <li id='MassMedia' className={activeSection === 'MassMedia' ? 'text-black text-xl border-b-2 border-black' : ''}>
            Mass Media Team
          </li>
          <li id='Cultural' className={activeSection === 'Cultural' ? 'active' : ''}>
            Cultural Team
          </li>
          {/* Add more list items as needed */}
        </ul>
    </div>
   </div>
  </div>
</div>


  )
}

{/* <div className=' relative h-screen pl-24 '>
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
</div> */}