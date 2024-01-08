import React from "react";
import header from "../../../public/assets/events/header.jpg";
import Image from "next/image";
function EventHeader() {
  return (
    <div className="  relative w-full">
      <Image className="w-full  " src={header} />
      <div className=" z-2 top-[20%] w-full  overflow-x-hidden overflow-y-hidden  absolute font-sankaran text-white text-3xl md:text-7xl flex items-center justify-between">
        <div className="w-[20%] border-2 border-[#411c00] mr-3 rounded-lg"></div>
        <p className=" text-transparent !bg-clip-text [background:linear-gradient(90.78deg,_#5a2700_46.35%,_#af6020)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-center flex items-center justify-center w-[60%] h-28 [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] mix-blend-normal ">
          Events AND Schedule
        </p>
        <div className="w-[20%] border-2 ml-3 border-[#411c00] rounded-lg"></div>
      </div>
    </div>
  );
}

export default EventHeader;
