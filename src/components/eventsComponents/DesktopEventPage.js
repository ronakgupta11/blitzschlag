import React, { useEffect } from "react";
import { useRouter } from "next/router";
import borderDown from "../../../public/assets/events/border.png";
// import styles from "./events.module.css";
import Image from "next/image";
import axios from "axios";
import { url } from "@/constants";
import Link from "next/link";
import img from "/public/assets/img4.png";
import LeftArrow from "/public/icons/left_arrow.svg";
import EventRegisterModal from "./EventRegisterModal"

function DesktopEventPage({data}) {
  const router = useRouter();

  const id = router.query.id;
  // console.log(id);

  // useEffect(() => {
  //   axios
  //     .get(`${url}/events/${id}`)
  //     .then((d) => console.log(d.data))
  //     .catch((e) => console.error(e));
  // }, [id]);
  // bg-[url('/curved_shape.svg'),_url('/assets/events/border.png')]
  // bg-no-repeat bg-[length:60%,20%] bg-[position:left,bottom]
  return (
    <div className="bg-black w-full flex h-full ">
      <div
        className={`pl-[60px] lg:pl-[80px] lg:pr-[140px] flex flex-col gap-[25px] xl:gap-[40px] pt-[60px] pb-[50px] w-[85%] lg:w-[95%] bg-[url('/curved_shape.svg')] 
          bg-no-repeat bg-cover`}
      >
        <p className="text-[60px] text-[#751300]">{data.name}</p>
        <p className="text-[#313131] text-[14px] leading-[16px] text-justify z-10 w-[42vw] xl:w-[38vw]">
          {data.desc}
        </p>
        <div className="flex gap-[85px] lg:gap-[150px] items-center font-amita">
          <div>
            <div className="text-[#202020] text-[20px]">
              <span className="font-bold">Venue:</span> {data.venue}
            </div>
            <div className="text-[#202020] text-[20px]">
              <span className="font-bold">Date:</span> {data.date}
            </div>
            <div className="text-[#202020] text-[20px]">
              <span className="font-bold">Time:</span> {data.time}
            </div>
          </div>
          <div>
            <div className="text-[#202020] text-[30px]">Prize Worth</div>
            <div className="text-[#202020] text-[42px] font-bold text-right">
              ₹ {data.prize}
            </div>
          </div>
        </div>
        <div className="mt-[32px] flex gap-[150px] lg:gap-[200px] font-amita">
          <Link href={"/events"}>
            <div className="color-[#00293E] text-[20px] text-[#202020] flex gap-[7px] items-center">
              {" "}
              <Image src={LeftArrow} /> Back
            </div>
          </Link>
          <EventRegisterModal/>
        </div>
      </div>

      <div className="flex flex-col gap-[100px] justify-between w-[70%] lg:w-[60%]">
        <div className="flex w-full items-center relative overflow-hidden">
          <Image className="rotate-180" src={borderDown}></Image>
          <Image className="rotate-180" src={borderDown}></Image>
        </div>

        <img
          src={data.image}
          // width={414}
          
          className={`border-r-8 border-b-8 border-[#fb5e3f] w-[414px] h-[500px]`}
        />

        <div className="flex w-full items-center relative overflow-hidden">
          <Image src={borderDown}></Image>
          <Image src={borderDown}></Image>
        </div>
      </div>
    </div>
  );
}

export default DesktopEventPage;
