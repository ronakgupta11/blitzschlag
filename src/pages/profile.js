import { useState, useEffect } from "react";
import Image from "next/image";
import ProfileIcon from "/public/icons/profile.svg";
import NotifyIcon from "/public/icons/notifiy.svg";
import PassIcon from "/public/icons/passes.svg";
import EventIcon from "/public/icons/events.svg";
import CrossIcon from "/public/icons/cross.svg";
import LogoutIcon from "/public/icons/logout.svg";
import {
  selectAuthenticated,
  selectCredentials,
  selectEvents,
} from "@/redux/reducers/userReducer";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import EventTab from "/src/components/profile/EventTab.js";
import PassTab from "/src/components/profile/PassTab.js";
import ProfileTab from "/src/components/profile/ProfileTab.js";
import { QRCode } from "react-qrcode-logo";
import { logOutUser } from "@/redux/actions/userAction";

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

  // console.log(credentials);

  return (
    <div className="flex bg-[#5F2B00]">
      {/* {menu ? ( */}
      <div
        className={`grid h-fit gap-[32px] px-[40px] md:px-[80px] pr-[50px] md:pr-[140px] py-[50px] md:py-[100px] bg-[#5F2B00] text-[#FFFBED] 
        font-amita font-medium ${menu ? `grid` : `hidden`} ${
          menu ? "absolute" : "unset"
        } md:unset md:grid`}
      >
        <div
          className="md:hidden flex justify-end"
          onClick={() => setMenu(!menu)}
        >
          <Image src={CrossIcon} alt="cross_icon" width={20} height={20} />
        </div>
        <p
          className="flex gap-[20px] items-center cursor-pointer"
          onClick={() => {
            setCurrentTab(0);
            // setMenu(!menu);
          }}
        >
          <Image src={ProfileIcon} /> Profile
        </p>
        <p
          className="flex gap-[20px] items-center cursor-pointer"
          onClick={() => {
            setCurrentTab(1);
            // setMenu(!menu);
          }}
        >
          <Image src={EventIcon} />
          Events
        </p>
        <p
          className="flex gap-[20px] items-center cursor-pointer"
          onClick={() => setCurrentTab(2)}
        >
          <Image src={PassIcon} />
          Passes
        </p>
        <p
          className="flex gap-[20px] items-center cursor-pointer"
          onClick={() => logOutUser()}
        >
          <Image src={LogoutIcon} />
          Logout
        </p>
      </div>
      {/* ) : null} */}
      {currentTab === 0 ? (
        <ProfileTab setMenu={setMenu} menu={menu} credentials={credentials} />
      ) : currentTab === 1 ? (
        <EventTab setMenu={setMenu} menu={menu} />
      ) : currentTab === 2 ? (
        <PassTab setMenu={setMenu} menu={menu} credentials={credentials} />
      ) : currentTab === 3 ? (
        <p>Notifications</p>
      ) : null}
    </div>
  );
}
