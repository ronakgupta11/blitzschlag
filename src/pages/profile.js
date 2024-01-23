import { useState, useEffect } from "react";
import Image from "next/image";
import ProfileIcon from "/public/icons/profile.svg";
import PassIcon from "/public/icons/passes.svg";
import EventIcon from "/public/icons/events.svg";
import CrossIcon from "/public/icons/cross.svg";
import LogoutIcon from "/public/icons/logout.svg";
import SlickModal from "@/components/profile/slickModal";
import {
  SET_UNAUTHENTICATED,
  selectAuthenticated,
  selectCredentials,
  selectMNIT,
} from "@/redux/reducers/userReducer";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import EventTab from "/src/components/profile/EventTab.js";
import PassTab from "/src/components/profile/PassTab.js";
import ProfileTab from "/src/components/profile/ProfileTab.js";
import { QRCode } from "react-qrcode-logo";
import { logOutUser } from "@/redux/actions/userAction";

import AmbassadorTab from "@/components/profile/AmbassadorTab";
export default function Profile({slickModal}) {



  const [currentTab, setCurrentTab] = useState(0);
  const [menu, setMenu] = useState(false);
  const router = useRouter();
  const auth = useSelector(selectAuthenticated);
  const credentials = useSelector(selectCredentials);
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);

  const isMNIT = useSelector(selectMNIT)
  const isAmbassador = useState(true)

  


  console.log(credentials);
  useEffect(() => {
    if (!auth) {
      router.push("/login");
    }
  }, [auth]);

  useEffect(() => {
    if (isMNIT && slickModal) {
      setOpenModal(true);
    }
  }, [slickModal]);

  return (
    <div className="flex bg-[#5F2B00]">
      <SlickModal openModal={openModal} setOpenModal={setOpenModal} />
      {/* {menu ? ( */}
      <div
        className={`z-10 grid h-fit gap-[32px] px-[40px] md:px-[80px] pr-[50px] md:pr-[140px] py-[50px] md:py-[100px] bg-[#5F2B00] text-[#FFFBED] 
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
        { isAmbassador &&
          <p
          className="flex gap-[20px] items-center cursor-pointer"
          onClick={() => setCurrentTab(4)}
        >
          <Image src={PassIcon} />
           Campus Ambassador
        </p>}
        <p
          className="flex gap-[20px] items-center cursor-pointer mt-[120px]"
          onClick={() => {
            logOutUser();
            dispatch(SET_UNAUTHENTICATED());
          }}
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
      ) :
      currentTab===4?<AmbassadorTab setMenu={setMenu} menu={menu} credentials={credentials}/> :
      null}
    </div>
  );
}
