import borderDown from "../../../public/assets/events/border.png";
import Image from "next/image";
import Link from "next/link";
import LeftArrow from "/public/icons/left_arrow.svg";
import EventRegisterModal from "./EventRegisterModal";
import { FaDownload } from "react-icons/fa";
import ClubRegister from "./ClubRegister";
import { useSelector } from "react-redux";
import { selectCredentials } from "@/redux/reducers/userReducer";
import { useEffect, useState } from "react";
function DesktopEventPage({ data }) {
  const credentials = useSelector(selectCredentials)
  const [isRegistered,setIsRegistered] = useState(false)
  const registeredEvents = credentials.registeredEvents || []
  useEffect(()=>{
    const reg =  registeredEvents.some(event => event.eventId === data?.eventId);

setIsRegistered(reg)
  },[data])


  return (
    <div className="bg-black w-full flex h-full ">
      <div
        className={`pl-[60px] lg:pl-[80px] lg:pr-[140px] flex flex-col gap-[25px] xl:gap-[40px] pt-[60px] pb-[50px] w-[85%] lg:w-[95%] bg-[url('/curved_shape.svg')] 
          bg-no-repeat bg-cover`}
      >
        {data ? (
          <p className="text-[60px] text-[#003959] font-amita">{data?.name}</p>
        ) : (
          <div className="skeleton w-60 h-28 rounded-lg bg-transparent"></div>
        )}
        {data ? (
          <p className="text-[#161616] text-[16px] text-justify z-10 w-[42vw] xl:w-[38vw] leading-[30px]">
            {data?.desc}
          </p>
        ) : (
          <div className="skeleton w-[42vp] h-28 bg-transparent"></div>
        )}
        <div className="flex gap-[85px] lg:gap-[150px] items-center font-amita">
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
          {data?.prize && <div>
            <div className="text-[#202020] text-[30px]">Prize Worth</div>
            <div className="text-[#202020] text-[42px] font-bold text-right">
              {data ? (
                ` ₹ ${data?.prize}`
              ) : (
                <div className="skeleton bg-transparent w-20 h-20"></div>
              )}
            </div>
          </div>}
        </div>
        <div className="mt-[32px] flex gap-[150px] lg:gap-[200px] font-amita">
          <Link href={data?.rulebook || ""} target="_blank">
            <div className="color-[#00293E] text-[20px] text-[#00293E] flex gap-[7px] items-center">
              {" "}
              <FaDownload size={20}/> Rulebook
            </div>
          </Link>
          
         { isRegistered?
           <button
           className={`w-fit bg-blue-500 px-[36px] py-[8px] text-white`}
           disabled
         >
           Registered
         </button>

          :(data?.category === "club" ?<ClubRegister event={data?.name} id={data?.eventId} />:
          <EventRegisterModal event={data?.name} id={data?.eventId} />)}
        </div>
      </div>

      <div className="flex flex-col justify-between w-[70%] lg:w-[60%]">
        <div className="flex w-full items-center relative overflow-hidden">
          <Image className="rotate-180" src={borderDown}></Image>
          <Image className="rotate-180" src={borderDown}></Image>
        </div>

        {data ? (
          <img
            src={data?.image}
            className={`border-r-8 border-b-8 border-[#00517e] w-[514px] h-[600px]`}
          />
        ) : (
          <div className="skeleton w-[414px] h-[500px] bg-transparent"></div>
        )}

        <div className="flex w-full items-center relative overflow-hidden">
          <Image src={borderDown}></Image>
          <Image src={borderDown}></Image>
        </div>
      </div>
    </div>
  );
}

export default DesktopEventPage;
