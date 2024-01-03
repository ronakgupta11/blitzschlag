import React, { useEffect } from "react";
import { useRouter } from "next/router";
import borderDown from "../../../public/assets/events/border.png";
// import styles from "./events.module.css";
import Image from "next/image";
import axios from "axios";
import { url } from "@/constants";
// import BG from "/public/bg_mobile.svg";
import img from "/public/assets/img4.png";
import LeftArrow from "/public/icons/left_arrow.svg";

function MobileEventPage() {
  const router = useRouter();

  const id = router.query.id;

  useEffect(() => {
    axios
      .get(`${url}/events/${id}`)
      .then((d) => console.log(d.data))
      .catch((e) => console.error(e));
  }, [id]);
  return (
    <div className="bg-[#fbae9e] w-full h-full ">
      <div
        className="flex flex-col gap-[50px] justify-between items-center
      bg-[url('/bg_mobile.svg')] bg-no-repeat bg-[length:100%] bg-center"
      >
        <div className="flex w-full items-center overflow-hidden">
          <Image className="rotate-180" src={borderDown}></Image>
          <Image className="rotate-180" src={borderDown}></Image>
        </div>

        <Image
          src={img}
          width={260}
          style={{ height: "300px !important" }}
          className={`border-r-8 border-b-8 border-[#fb5e3f]`}
        />
      </div>
      <div
        className={`flex flex-col gap-[18px] max-[500px]:px-[35px] px-[55px] pt-[15px] pb-[30px] items-center`}
      >
        <p className="text-[60px] text-[#751300]">PANACHE</p>
        <p className="text-[#313131] text-[14px] text-justify z-10 leading-[16px]">
          Lorem ipsum dolor sit amet consectetur. Odio vitae ac donec aliquam.
          Amet dictum scelerisque velit libero donec purus amet consectetur
          molestie. Lectus morbi imperdiet convallis porttitor. Leo justo mi
          consequat rhoncus sociis consectetur. Nunc rhoncus et sed duis turpis
          rutrum tristique. Dui habitant senectus tempus tristique morbi varius.
          Aliquet porttitor elementum scelerisque amet senectus adipiscing in
          eu. Auctor nibh turpis et elit dictumst. Molestie sit praesent et nunc
        </p>
        <div className="flex w-full justify-between items-center font-amita">
          <div>
            <div className="text-[#202020] text-[20px]">
              <span className="font-bold">Venue:</span> OAT
            </div>
            <div className="text-[#202020] text-[20px]">
              <span className="font-bold">Date:</span> 2.02.2024
            </div>
            <div className="text-[#202020] text-[20px]">
              <span className="font-bold">Time:</span> 6:00pm
            </div>
          </div>
          <div>
            <div className="text-[#202020] text-[24px]">Prize Worth</div>
            <div className="text-[#202020] text-[32px] font-bold text-right">
              ₹ 80k
            </div>
          </div>
        </div>
        <div className="mt-[52px] flex w-full justify-between items-center font-amita">
          <div className="color-[#00293E] text-[20px] text-[#202020] flex gap-[7px] items-center">
            {" "}
            <Image src={LeftArrow} /> Back
          </div>
          <button className="w-fit bg-[#FB5E3F] px-[36px] py-[8px] text-white">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default MobileEventPage;
