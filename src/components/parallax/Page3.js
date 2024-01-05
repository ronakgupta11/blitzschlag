import React from "react";
import Image from "next/image";
// import cloudBottom from "../../../public/assets/home/page2/bottomCloud.png"
import cloudback from "../../../public/assets/home/page3/cloudback.png";
import fort from "../../../public/assets/home/page3/fort.png";
import moon from "../../../public/assets/home/page3/moon.png";
import Link from "next/link";

import { useParallax } from "react-scroll-parallax";
function Page3() {
  const { ref: fortRef } = useParallax({
    translateX: [-30, 0],
  });

  return (
    <div
      className="h-[700px]  w-full relative flex flex-col  items-center overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #5DAAE7 -7.87%, #BEEBFF 74.4%)",
      }}
    >
      <div className="self-start mt-12 ml-4">
        <p
          className=" text-transparent bg-clip-text font-sankaran text-5xl md:text-7xl  "
          style={{ background: "#0D2138" }}
        >
          Events
        </p>
        <button
          className="btn z-20 px-12 mt-12 text-white"
          style={{
            background: "#0D2138",
            boxShadow: "0px 6px 14.899999618530273px rgba(102, 179, 215, 0.80)",
            borderRadius: 20,
          }}
        >
          <Link href={"/events"}>

          Explore
          </Link>
        </button>
      </div>

      <Image
        className="w-[300px] absolute left-[20%] top-[20%] z-0"
        src={moon}
      />

      <div className="w-full h-screen">
        <Image
          className="absolute bottom-0 z-0 w-full max-h-40"
          src={cloudback}
        />
        <Image
          ref={fortRef}
          className="absolute w-full md:w-[55%] bottom-0  object-top  z-10  max-h-[80%] "
          style={{
            objectFit: "cover",
            minHeight: "70%",
            objectPosition: "top",
          }}
          src={fort}
        />
      </div>
    </div>
  );
}

export default Page3;
