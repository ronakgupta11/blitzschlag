import { useState, useEffect } from "react";
import Image from "next/image";
import ProfileIcon from "/public/icons/profile.svg";
import NotifyIcon from "/public/icons/notifiy.svg";
import PassIcon from "/public/icons/passes.svg";
import EventIcon from "/public/icons/events.svg";
import {
  selectAuthenticated,
  selectCredentials,
  selectEvents,
} from "@/redux/reducers/userReducer";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import EventTab from "/src/components/profile/EventTab.js";
import ProfileTab from "/src/components/profile/ProfileTab.js";
import { QRCode } from "react-qrcode-logo";

export default function Profile() {
  const [currentTab, setCurrentTab] = useState(0);
  const [menu, setMenu] = useState(false);
  const router = useRouter();
  const auth = useSelector(selectAuthenticated);
  const credentials = useSelector(selectCredentials);

  useEffect(() => {
    if (!auth) {
      router.push("/login");
    }
  }, [auth]);

  console.log(credentials);

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
        <ProfileTab setMenu={setMenu} menu={menu} credentials={credentials} />
      ) : currentTab === 1 ? (
        <EventTab />
      ) : currentTab === 2 ? (
        <EventTab credentials={credentials} />
      ) : currentTab === 3 ? (
        <p>Notifications</p>
      ) : null}
    </div>
  );
}
