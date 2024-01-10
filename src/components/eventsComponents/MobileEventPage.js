import React, { useEffect, useState } from "react";
import borderDown from "../../../public/assets/events/border.png";
import Image from "next/image";
import LeftArrow from "/public/icons/left_arrow.svg";
import EventRegisterModal from "./EventRegisterModal";
import Link from "next/link";
import { FaDownload } from "react-icons/fa";
function MobileEventPage(props) {
  const data = props.data;

  return (
    <div className="bg-[#59b6e9] w-full h-full ">
      <div
        className="flex flex-col gap-[50px] justify-between items-center
      bg-[url('/bg_mobile.svg')] bg-no-repeat bg-[length:100%] bg-center"
      >
        <div className="flex w-full items-center bg-[#2b2b2b] overflow-hidden">
          <Image className="rotate-180" src={borderDown}></Image>
          <Image className="rotate-180" src={borderDown}></Image>
        </div>

        {data ? (
          <img
            src={data?.image}
            width={260}
            // style={{ height: "300px !important" }}
            className={`border-r-8 border-b-8 border-[#00517E]`}
          />
        ) : (
          <div className="skeleton w-[260px] h-[350px]"></div>
        )}
      </div>
      <div
        className={`flex flex-col gap-[18px] max-[500px]:px-[35px] px-[55px] pt-[15px] pb-[30px] items-center`}
      >
        <p className="text-[60px] font-amita text-[#003959]">{data?.name}</p>
        <p className="text-[#161616] text-[14px] text-justify z-10 leading-[16px]">
          {data?.desc}
        </p>
        <div className="flex w-full justify-between items-center font-amita">
          <div>
            <div className="text-[#202020] text-[20px]">
              <span className="font-bold">Venue:</span> {data?.venue}
            </div>
            <div className="text-[#202020] text-[20px]">
              <span className="font-bold">Date:</span> {data?.date}
            </div>
            <div className="text-[#202020] text-[20px]">
              <span className="font-bold">Time:</span> {data?.time}
            </div>
          </div>
          <div>
            <div className="text-[#202020] text-[24px]">Prize Worth</div>
            <div className="text-[#202020] text-[32px] font-bold text-right">
              ₹ {data?.prize}
            </div>
          </div>
        </div>
        <div className="mt-[52px] flex w-full justify-between items-center font-amita">
          <div className="color-[#00293E] text-[20px] text-[#00293E] flex gap-[7px] items-center">
            <Link href={data?.rulebook || ""} target="_blank">
              {" "}
              <FaDownload size={20} /> Rulebook
            </Link>
          </div>
          <EventRegisterModal event={data?.name} id={data?.eventId} />
        </div>
      </div>
    </div>
  );
}

export default MobileEventPage;
