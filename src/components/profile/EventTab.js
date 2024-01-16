import React from "react";
import Link from "next/link";
import Image from "next/image";
import TeamDetailModal from "./TeamDetailModal";
import HamIcon from "/public/icons/hamburger.svg";
import LeftArrow from "/public/icons/left_arrow_black.svg";
import { useSelector } from "react-redux";
import { selectEvents, selectTeams } from "@/redux/reducers/userReducer";

function EventTab({ menu, setMenu, credentials }) {
  const events = useSelector(selectEvents);
  const teams = useSelector(selectTeams);
  return credentials ? (
    <div>No Event Registered yet</div>
  ) : (
    <div className="grid w-full bg-[#FFFBED]">
      <div className="px-[30px] py-[20px] md:py-[32px] md:px-[60px] align-right font-bold leading-[24px] text-right flex items-center justify-between md:justify-end">
        <div
          className="p-[8px] bg-black rounded-full md:hidden"
          onClick={() => setMenu(!menu)}
        >
          <Image src={HamIcon} width={28} height={28} className="h-fit " />{" "}
        </div>
        <Link href={"/"}>
          <div className="flex gap-[10px] items-center text-[#393939] font-amita">
            <Image src={LeftArrow} alt="left_arrow_icon" /> Back to home
          </div>
        </Link>
      </div>
      {/* <div className=" py-[32px] px-[30px] md:px-[60px] h-fit">
        <Link href={"/"}>
          <div className="flex gap-[10px] items-center text-[#393939] font-amita ">
            <Image src={LeftArrow} alt="left_arrow_icon" /> Back to home
          </div>
        </Link>
      </div> */}
      <div className="bg-white px-[30px] md:px-[40px] py-[30px]">
        <p className="text-[#000] text-[20px] border-b-2 border-black pb-[20px]">
          Registered Events
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-[30px] items-center text-[#000000] text-[14px] md:text-base text-center mt-[20px]">
          {events.map((e, k) => (
            <div className="grid items-center justify-center gap-[10px]">
              <Image
                src={e?.image}
                width={205}
                height={285}
                className="shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] shadow-lg"
              />
              <TeamDetailModal team={teams[k]} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EventTab;
