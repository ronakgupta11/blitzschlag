import { useState } from "react";
import Image from "next/image";
import LeftArrow from "/public/icons/left_arrow.svg";
import ProfileImg from "/public/assets/ambassdorP1.png";
import ProfileIcon from "/public/icons/profile.svg";
import NotifyIcon from "/public/icons/notifiy.svg";
import PassIcon from "/public/icons/passes.svg";
import EventIcon from "/public/icons/events.svg";
import UserProfile from "/public/icons/userprofile.svg";
import MailIcon from "/public/icons/mail.svg";
import PhoneIcon from "/public/icons/phone.svg";
import HamIcon from "/public/icons/hamburger.svg";

function Input() {
  return (
    <div className="grid gap-[16px]">
      <label htmlFor="Name" className="text-[#353535] text-base font-medium">
        Name
      </label>
      <input
        type="text"
        name="Name"
        className="rounded-xl border-[1px] border-[#AAAAAA] rounded"
      />
    </div>
  );
}

export default function Profile1() {
  const [currentTab, setCurrentTab] = useState(0);
  const [menu, setMenu] = useState(false);
  return (
    <div className="flex">
      {/* {menu ? ( */}
      <div
        className={`grid gap-[32px] px-[80px] pr-[140px] py-[100px] bg-black text-[#FFFBED] 
      font-amita font-medium ${menu ? `grid` : `hidden`} md:grid`}
      >
        <p
          className="flex gap-[20px] items-center"
          onClick={() => setCurrentTab(0)}
        >
          <Image src={ProfileIcon} /> Profile
        </p>
        <p
          className="flex gap-[20px] items-center"
          onClick={() => setCurrentTab(1)}
        >
          <Image src={EventIcon} />
          Events
        </p>
        <p
          className="flex gap-[20px] items-center"
          onClick={() => setCurrentTab(2)}
        >
          <Image src={PassIcon} />
          Passes
        </p>
        <p
          className="flex gap-[20px] items-center"
          onClick={() => setCurrentTab(3)}
        >
          <Image src={NotifyIcon} />
          Notification
        </p>
      </div>
      {/* ) : null} */}
      {currentTab === 0 ? (
        <ProfileTab setMenu={setMenu} menu={menu} />
      ) : currentTab === 1 ? (
        <p>Events</p>
      ) : currentTab === 2 ? (
        <p>Passes</p>
      ) : currentTab === 3 ? (
        <p>Notifications</p>
      ) : null}
    </div>
  );
}

function ProfileTab({ menu, setMenu }) {
  return (
    <div className="grid w-full">
      <div className="bg-[#FFFBED] py-[32px] px-[30px] md:px-[60px] grid gap-[20px] text-[#393939] font-amita ">
        <div className="align-right font-bold leading-[24px] text-right flex items-center justify-between md:justify-end">
          <div
            className="p-[8px] bg-black rounded-full md:hidden"
            onClick={() => setMenu(!menu)}
          >
            <Image src={HamIcon} width={28} height={28} className="h-fit " />{" "}
          </div>
          <div className="flex gap-[10px] items-center ">
            <Image src={LeftArrow} alt="left_arrow_icon" /> Back to home
          </div>
        </div>
        <div className="flex gap-[20px] items-center">
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
              <Image src={UserProfile} /> Username
            </p>
            <p className="flex gap-[20px] items-center">
              <Image src={MailIcon} />
              Username
            </p>
            <p className="flex gap-[20px] items-center">
              <Image src={PhoneIcon} />
              Username
            </p>
          </div>
        </div>
      </div>
      <div className="px-[40px] md:px-[80px] py-[60px] bg-white grid gap-[24px]">
        <div className="flex gap-[50px] flex-wrap width-full md:width-auto">
          <Input />
          <Input />
        </div>
        <Input />
        <Input />
        <Input />
      </div>
    </div>
  );
}
