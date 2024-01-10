import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MailIcon from "/public/icons/mail.svg";
import PhoneIcon from "/public/icons/phone.svg";
import HamIcon from "/public/icons/hamburger.svg";
import LeftArrow from "/public/icons/left_arrow.svg";
import ProfileImg from "/public/assets/ambassdorP1.png";
import UserProfile from "/public/icons/userprofile.svg";
import Input from "./Input";

function ProfileTab({ menu, setMenu, credentials }) {
  const [issue, setIssue] = useState("");

  return (
    <div className="grid w-full grid-rows-2">
      <div className="bg-[#FFFBED] py-[32px] px-[30px] md:px-[60px] grid gap-[20px] text-[#393939] font-amita ">
        <div className="align-right font-bold leading-[24px] text-right flex items-center justify-between md:justify-end">
          <div
            className="p-[8px] bg-black rounded-full md:hidden"
            onClick={() => setMenu(!menu)}
          >
            <Image src={HamIcon} width={28} height={28} className="h-fit " />{" "}
          </div>
          <Link href={"/"}>
            <div className="flex gap-[10px] items-center">
              <Image src={LeftArrow} alt="left_arrow_icon" /> Back to home
            </div>
          </Link>
        </div>
        <div className="flex gap-[40px] items-center">
          <Image
            src={ProfileImg}
            width={120}
            height={120}
            className="border-4 border-[#7515C1] rounded-full"
          />
          <div className="grid text-sm gap-[20px] font-bold">
            <p>info</p>
            <p className="flex gap-[20px] items-center">
              {" "}
              <Image src={UserProfile} /> {credentials?.name}
            </p>
            <p className="flex gap-[20px] items-center">
              <Image src={MailIcon} />
              {credentials?.email}
            </p>
            <p className="flex gap-[20px] items-center">
              <Image src={PhoneIcon} />
              {credentials?.phone}
            </p>
          </div>
        </div>
      </div>
      <div className="px-[40px] md:px-[80px] py-[20px] bg-[#FFCDA4] grid gap-[24px]">
        <p className="text-black text-2xl font-semibold"> Report Issues</p>
        <div className="flex gap-[50px] flex-wrap width-full md:width-auto">
          <Input label="Name" value={credentials?.name} />
          <Input label="Mobile No." value={credentials?.phone} />
        </div>
        <Input
          label="Describe Issue"
          onChange={(e) => setIssue(e.target.value)}
        />
        <button
          disabled={!issue}
          className={`px-[50px] py-[12px] text-white w-fit rounded-xl ${
            !issue ? "bg-yellow-300" : "bg-yellow-500"
          }`}
        >
          Report
        </button>
      </div>
    </div>
  );
}

export default ProfileTab;
