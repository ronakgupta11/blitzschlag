import React, { useEffect } from "react";
import { useRouter } from "next/router";
import borderDown from "../../../public/assets/events/border.png";
import styles from "./events.module.css";
import Image from "next/image";
import axios from "axios";
import { url } from "@/constants";
import img from "/public/assets/img4.png";

function eventPage() {
  const router = useRouter();

  const id = router.query.id;
  // console.log(id);

  useEffect(() => {
    axios
      .get(`${url}/events/${id}`)
      .then((d) => console.log(d.data))
      .catch((e) => console.error(e));
  }, [id]);
  return (
    <div className="bg-black w-full flex h-full">
      <div
        className={`${styles.cont1} pl-[60px] flex flex-col gap-[25px] pt-[60px] pb-[40px]`}
      >
        <p className="text-[60px] text-[#751300]">PANACHE</p>
        <p className="text-[#313131] text-[14px] text-justify z-10">
          Lorem ipsum dolor sit amet consectetur. Odio vitae ac donec aliquam.
          Amet dictum scelerisque velit libero donec purus amet consectetur
          molestie. Lectus morbi imperdiet convallis porttitor. Leo justo mi
          consequat rhoncus sociis consectetur. Nunc rhoncus et sed duis turpis
          rutrum tristique. Dui habitant senectus tempus tristique morbi varius.
          Aliquet porttitor elementum scelerisque amet senectus adipiscing in
          eu. Auctor nibh turpis et elit dictumst. Molestie sit praesent et nunc
          nulla etiam id risus lacinia. Ut adipiscing mi rhoncus tincidunt
          suscipit lectus adipiscing aliquet sit. Integer felis felis
          sollicitudin elementum malesuada rhoncus purus id sollicitudin. Lorem
          ipsum dolor sit amet consectetur. Odio vitae ac donec aliquam. Amet
          dictum scelerisque velit libero donec purus amet consectetur molestie.
          Lectus morbi imperdiet convallis porttitor. Leo justo mi consequat
          rhoncus sociis consectetur. Nunc rhoncus et sed duis turpis rutrum
          tristique. Dui habitant senectus tempus tristique morbi varius.
          Aliquet porttitor elementum scelerisque amet senectus adipiscing in
          eu. Auctor nibh turpis et elit dictumst. Molestie sit praesent et nunc
          nulla etiam id risus lacinia. Ut adipiscing mi rhoncus tincidunt
          suscipit lectus adipiscing aliquet sit. Integer felis felis
          sollicitudin elementum malesuada rhoncus purus id sollicitudin.
        </p>
        <div className="flex gap-[150px] items-center">
          <div>
            <div className="text-[#202020] text-[20px]">Venue: OAT</div>
            <div className="text-[#202020] text-[20px]">Date: 2.02.2024</div>
            <div className="text-[#202020] text-[20px]">Time: 6:00pm</div>
          </div>
          <div>
            <div className="text-[#202020] text-[30px]">Prize Worth</div>
            <div className="text-[#202020] text-[42px] font-bold">80k</div>
          </div>
        </div>
        <div className="mt-[52px] flex gap-[100px]">
          <div className="color-[#00293E] text-[20px] text-[#202020]">Back</div>
          <button className="w-fit bg-[#FB5E3F] px-[36px] py-[8px] text-white">
            Register
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-[100px] justify-between">
        {/* <div> */}
        <div className="flex w-full items-center relative ">
          <Image className="rotate-180" src={borderDown}></Image>
          <Image className="rotate-180" src={borderDown}></Image>
        </div>
        <Image
          src={img}
          width={400}
          height={600}
          className="border-r-8 border-b-8 border-[#fb5e3f] relative left-[30%]"
        />
        <div className="flex w-full items-center">
          {/* <Image src={borderDown}></Image> */}
          <Image src={borderDown}></Image>
          <Image src={borderDown}></Image>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default eventPage;
