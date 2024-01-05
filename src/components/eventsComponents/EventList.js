import React, { useState, useEffect } from "react";
import borderDown from "../../../public/assets/events/border.png";
import flower1 from "../../../public/assets/sponsors/flower1.png";
import flower2 from "../../../public/assets/sponsors/flower2.png";
import Image from "next/image";
import EventCard1 from "./EventCard1";
import EventCard2 from "./EventCard2";
import { UAParser } from "ua-parser-js";
import { url } from "@/constants";
import axios from "axios"

export default function EventList() {
  const data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const [selectedTab, setSelectedTab] = useState(0);
  const [isMobile, setIsMobile] = useState();
  const [flagship,setFlagship] = useState([]);
  const [club,setClub] = useState([]);
  const [fun,setFun] = useState([]);

console.log(flagship)
  useEffect(()=>{
    axios.get(`${url}/events`)
    .then(
      d => {
        // console.log(d.data)
        const data = d.data
        const filteredFlagship = data.filter(item => item.category === "flagship");
        setFlagship(filteredFlagship)
        const filteredClub = data.filter(item => item.category === "club");
        setClub(filteredClub)
        const filteredFun = data.filter(item => item.category === "club");
        setFun(filteredFun)
      }
    ).catch(e=>console.error(e))

  },[])

  useEffect(() => {
    const parser = new UAParser();
    const userAgent = window.navigator.userAgent;
    const result = parser.setUA(userAgent).getResult();
    const isMobileDevice = /mobile/i.test(result.device.type);
    setIsMobile(isMobileDevice);
  }, []);




  return (
    <div className="bg-[#883800] w-full flex flex-col items-center overflow-x-hidden">
      <div className="flex w-full items-center relative ">
        <Image className="rotate-180" src={borderDown}></Image>
        <Image className="rotate-180" src={borderDown}></Image>
        <Image className="rotate-180" src={borderDown}></Image>
        {/* <Image src={borderDown2}></Image> */}
      </div>
      <div className=" z-10 absolute flex font-amita  text-white md:text-md text-sm border-white ">
        <button
          onClick={() => setSelectedTab(0)}
          className={` h-full border-2 border-t-0  px-8 md:px-12 py-2 md:py-3 bg-[#a86a32] ${
            selectedTab === 0 ? "text-[#721542] bg-white" : ""
          }  rounded-bl-3xl te`}
        >
          Flagship Events
        </button>
        <button
          onClick={() => setSelectedTab(1)}
          className={`h-full border-b-2  px-8 md:px-12 py-2 md:py-3 bg-[#a86a32] ${
            selectedTab === 1 ? "text-[#721542] bg-white" : ""
          } `}
        >
          Club Events
        </button>
        <button
          onClick={() => setSelectedTab(2)}
          className={`h-full border-2 border-t-0  px-8 md:px-12 py-2 md:py-3 rounded-br-3xl bg-[#a86a32] ${
            selectedTab === 2 ? "text-[#721542] bg-white" : ""
          } `}
        >
          Fun Events
        </button>
      </div>
      <div className="absolute flex w-full justify-between">
        <Image src={flower1} />
        <Image src={flower2} />
      </div>
      {selectedTab === 0 && (
        <div className=" z-10 flex flex-wrap m-3 p-3 items-center justify-center  w-full">
          {flagship.map((d, k) =>
            isMobile ? (
              <div className = "ml-12">

              <EventCard1 data={d} className='m-auto' key={k} />
              </div>
            ) : k % 2 === 0 ? (
              <div className="mx-8" style={{width:"40%"}}>
                <EventCard1 data={d} key={k} />
              </div>
            ) : (
              <div className="mx-8" style={{width:"40%"}}>
                <EventCard2  data={d} key={k} />
              </div>
            )
          )}
        </div>
      )}
      {selectedTab === 1 && (
        <div className=" z-10 flex flex-wrap m-3 p-3 items-center justify-center  w-full">
        {club.map((d, k) =>
          isMobile ? (
            <div className = "ml-12">

            <EventCard1 data={d} className='m-auto' key={k} />
            </div>
          ) : k % 2 === 0 ? (
            <div className="mx-8" style={{width:"40%"}}>
              <EventCard1 data={d}  key={k} />
            </div>
          ) : (
            <div className="mx-8" style={{width:"40%"}}>
              <EventCard2 data={d} key={k} />
            </div>
          )
        )}
      </div>
      )}
      {selectedTab === 2 && (
       <div className=" z-10 flex flex-wrap m-3 p-3 items-center justify-center  w-full">
       {fun.map((d, k) =>
         isMobile ? (
           <div className = "ml-12">

           <EventCard1 data={d} className='m-auto' key={k} />
           </div>
         ) : k % 2 === 0 ? (
           <div className="mx-8" style={{width:"40%"}}>
             <EventCard1 data={d}  key={k} />
           </div>
         ) : (
           <div className="mx-8" style={{width:"40%"}}>
             <EventCard2 data={d}  key={k} />
           </div>
         )
       )}
     </div>
      )}

      <div className="flex w-full items-center">
        <Image src={borderDown}></Image>
        <Image src={borderDown}></Image>
        <Image src={borderDown}></Image>
      </div>
    </div>
  );
}
