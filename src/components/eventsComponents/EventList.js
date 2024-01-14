import React, { useState, useEffect } from "react";
import borderDown from "../../../public/assets/events/border.png";
import flower1 from "../../../public/assets/sponsors/flower1.png";
import flower2 from "../../../public/assets/sponsors/flower2.png";
import Image from "next/image";
import EventCard1 from "./EventCard1";
import EventCard2 from "./EventCard2";
import { UAParser } from "ua-parser-js";
import { selectEventsData } from "@/redux/reducers/dataReducer";
import { useSelector } from "react-redux";

import { motion } from "framer-motion";

function ResponsiveInnerList({ isMobile, d, k }) {
  return isMobile ? (
    <div className="ml-12">
      <EventCard1 data={d} className="m-auto" key={k} />
    </div>
  ) : (
    <motion.div
      // initial={{ x: k % 2 === 0 ? -100 - 50 * k : 100 + 50 * k }}
      // whileInView={{ x: 0 }}
      // transition={{ duration: 0.6 }}
      className={`mx-8 flex ${k % 2 == 0 ? "flex-row-reverse" : ""}`}
      style={{ width: "40%" }}
    >
      {k % 2 === 0 ? (
        <EventCard1 data={d} key={k} />
      ) : (
        <EventCard2 data={d} key={k} />
      )}
    </motion.div>
  );
}

export default function EventList() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [isMobile, setIsMobile] = useState();

  const events = useSelector(selectEventsData);
  const flagship = events.filter((item) => item.category === "flagship");
  const club = events.filter((item) => item.category === "club");
  // const fun = events.filter(item => item.category === "fun");

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
      <div className=" z-10 absolute flex font-amita  text-white md:text-lg text-md border-white ">
        <button
          onClick={() => setSelectedTab(0)}
          className={` h-full border-2 border-t-0  px-8 md:px-12 py-3 md:py-5 bg-[#a86a32] ${
            selectedTab === 0 ? "text-[#721542] bg-white" : ""
          }  rounded-bl-3xl te`}
        >
          Flagship Events
        </button>
        <button
          onClick={() => setSelectedTab(1)}
          className={`h-full border-b-2  px-8 md:px-12 py-3 md:py-5 rounded-br-3xl bg-[#a86a32] ${
            selectedTab === 1 ? "text-[#721542] bg-white" : ""
          } `}
        >
          Club Events
        </button>
      </div>
      <div className="absolute flex w-full justify-between">
        <Image src={flower1} />
        <Image src={flower2} />
      </div>
      {selectedTab === 0 && (
        <div className=" z-10 flex flex-wrap m-3 p-3 items-center justify-center  w-full">
          {flagship.map((d, k) => (
            <ResponsiveInnerList isMobile={isMobile} d={d} k={k} />
          ))}
        </div>
      )}
      {selectedTab === 1 && (
        <div className=" z-10 flex flex-wrap m-3 p-3 items-center justify-center  w-full">
          {club.map((d, k) => {
            return <ResponsiveInnerList isMobile={isMobile} d={d} k={k} />;
          })}
          {club?.length === 0 && (
            <div className="h-96 flex items-center justify-center">
              <p className="text-5xl font-sankaran text-white text-center">
                Coming Soon
              </p>
            </div>
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
