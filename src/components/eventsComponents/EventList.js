import React ,{useState,useEffect}from "react";
import borderDown from "../../../public/assets/events/border.png";
import flower1 from "../../../public/assets/sponsors/flower1.png";
import flower2 from "../../../public/assets/sponsors/flower2.png";
import Image from "next/image";
import EventCard1 from "./EventCard1";
import EventCard2 from "./EventCard2";
export default function EventList() {
  const data = [0,0,0,0,0,0,0,0,0,0,0,0,0]
  const [selectedTab, setSelectedTab] = useState(0);
  const [isMobile, setIsMobile] = useState();
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="bg-[#883800] w-full flex flex-col items-center overflow-x-hidden">
      <div className="flex w-full items-center relative ">
        <Image className="rotate-180" src={borderDown}></Image>
        <Image className="rotate-180" src={borderDown}></Image>
        <Image className="rotate-180" src={borderDown}></Image>
        {/* <Image src={borderDown2}></Image> */}
      </div>
      <div className=" z-10 absolute flex font-sankaran  text-white md:text-md text-sm border-white ">
        <button onClick={()=>setSelectedTab(0)} className={` h-full border-2 border-t-0  px-8 md:px-12 py-2 md:py-3 bg-[#a86a32] ${selectedTab === 0 ?"text-[#721542] bg-white":""}  rounded-bl-3xl te`}>
          Flagship Events
        </button>
        <button onClick={()=>setSelectedTab(1)} className={`h-full border-b-2  px-8 md:px-12 py-2 md:py-3 bg-[#a86a32] ${selectedTab === 1 ?"text-[#721542] bg-white":""} `}>
          Club Events
        </button>
        <button onClick={()=>setSelectedTab(2)} className={`h-full border-2 border-t-0  px-8 md:px-12 py-2 md:py-3 rounded-br-3xl bg-[#a86a32] ${selectedTab === 2 ?"text-[#721542] bg-white":""} `}>
          Department Events
        </button>
      </div>
      <div className="absolute flex w-full justify-between">
        <Image src={flower1} />
        <Image src={flower2} />
      </div>
      {selectedTab === 0 &&<div className=" z-10 flex flex-wrap m-3 p-3 items-center justify-center ">
      {data.map((d, k) => (
        isMobile ? <EventCard1 key={k} /> : (k % 2 === 0 ? <EventCard1 key={k} /> : <EventCard2 key={k} />)
      ))}

      
      </div>}
      {selectedTab === 1 &&<div className=" z-10 flex flex-wrap m-3 p-3 items-center justify-center ">
    
        <EventCard1 />
        <EventCard2 />
        <EventCard1 />
        <EventCard2 />
        
      </div>}
      {selectedTab === 2 &&<div className=" z-10 flex flex-wrap m-3 p-3 items-center justify-center ">
    
       <p className="text-4xl font-amita text-center text-white min-h-60">
        No Events Here yet
        </p>
        
      </div>}

      <div className="flex w-full items-center">
        <Image src={borderDown}></Image>
        <Image src={borderDown}></Image>
        <Image src={borderDown}></Image>
      </div>
    </div>
  );
}
