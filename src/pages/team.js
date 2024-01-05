import React, { useEffect, useState, useRef } from "react";
import flower1 from "../../public/assets/team/flower1.png";
import flower from "../../public/assets/team/flower.png";
import Image from "next/image";
import TeamCard from "@/components/teamComponents/TeamCard";
import { Parallax } from "react-scroll-parallax";

export default function team() {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef([
    { id: "Technical", ref: useRef() },
    { id: "Publicity", ref: useRef() },
    { id: "MassMedia", ref: useRef() },
    { id: "Cultural", ref: useRef() },
  ]);

  const containerRef = useRef();
  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    sectionRefs.current.forEach(({ id, ref }, index) => {
      if (
        ref.current.offsetTop <= scrollPosition &&
        ref.current.offsetTop + ref.current.clientHeight >= scrollPosition
      ) {
        setActiveSection(index);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(activeSection);

  return (
    <div className="w-full    bg-[#fffbed] relative p-4 pt-28">
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
          {/* <Parallax onExit={() => setActiveSection(activeSection + 1)}> */}
          <div
            ref={sectionRefs.current[0].ref}
            id="Technical"
            className="cards flex flex-wrap my-12"
          >
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
          </div>
          {/* </Parallax> */}
          {/* <Parallax onExit={() => setActiveSection(activeSection + 1)}> */}
          <div
            ref={sectionRefs.current[1].ref}
            id="Publicity"
            className="cards flex flex-wrap my-12"
          >
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
          </div>
          {/* </Parallax> */}
          {/* <Parallax onExit={() => setActiveSection(activeSection + 1)}> */}
          <div
            ref={sectionRefs.current[2].ref}
            id="MassMedia"
            className="cards flex flex-wrap my-12"
          >
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
          </div>
          {/* </Parallax> */}
          {/* <Parallax onExit={() => setActiveSection(activeSection + 1)}> */}
          <div
            ref={sectionRefs.current[3].ref}
            id="Cultural"
            className="cards flex flex-wrap my-12"
          >
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
          </div>
          {/* </Parallax> */}
        </div>

        {/* <div className='relative h-full flex align-start justify-start'>
          <div style={{ alignSelf: "start" }} className=' text-[#606060] text-lg font-amita h-full '>
            <ul className='flex flex-row md:flex-col items-center justify-around space-x-3 space-y-6'>
              <div>Hello {activeSection}</div>
              <li className={activeSection === 0 ? 'text-red-500' : ''}
             onClick={() => sectionRefs.current[0].ref.current.scrollIntoView({ behavior: 'smooth' })}>
                  Technical Team
          
              </li>
              <li className={activeSection === 1 ? 'text-red-500' : ''}
           onClick={() => sectionRefs.current[1].ref.current.scrollIntoView({ behavior: 'smooth' })}>
                  Publicity Team
                
              </li>
              <li className={activeSection === 2 ? 'text-black text-xl border-b-2 border-black' : ''}
               onClick={() => sectionRefs.current[2].ref.current.scrollIntoView({ behavior: 'smooth' })}>
                  Mass Media Team
                
              </li>
              <li className={activeSection === 3 ? 'text-red-500' : ''} onClick={() => sectionRefs.current[3].ref.current.scrollIntoView({ behavior: 'smooth' })}>
                  Cultural Team
                
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
