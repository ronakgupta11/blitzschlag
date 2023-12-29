import colorLine from "../../../public/assets/colorline.svg";
import ellipse55 from "../../../public/assets/Ellipse55.svg";
import ellipse54 from "../../../public/assets/Ellipse54.svg";
import ambassdorP1 from "../../../public/assets/ambassdorP1.png";
import ambassdorP2 from "../../../public/assets/ambassdorP2.png";

import Image from "next/image";
import MiddleCard from "@/components/MiddleCard";
import BottomMiddleCard from "@/components/ambassdorComponents/BottomMiddleCard";
const index = () => {
  return (
    <div
      style={{ backgroundColor: "#0A0A0A" }}
      className="relative w-1280 h-832 flex-shrink-0  overflow-hidden text-center text-[3rem] text-white font-black-ops-one"
    >
      <div
        className="flex mt-[100px] gap-[50px]  items-center justify-center flex-shrink-0 w-952 h-74"
        style={{}}
      >
        <Image src={colorLine} ></Image>
        <div
          className="text-center font-BlackOpsOne text-[64px] font-normal leading-[40px]"
          style={{
            background:
              "linear-gradient(90deg, #E9B704 12.9%, #463000 108.85%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          CAMPUS AMBASSDOR
        </div>
        <Image src={colorLine} ></Image>
      </div>

      <div>
        
        <div
          style={{
            height: "1500px",
            width: "1400px",
          }}
          className=""
        >
          <Image
            src={ellipse55}
            width={839}
            height={1498}
            style={{
              top: "140px",
            }}
            className="absolute z-10 w-full transform rotate-90.103 flex-shrink-0 fill-current stroke-2 stroke-current filter drop-shadow"
          ></Image>
          <Image
            width={1056}
            height={1056}
            style={{
              top: "501px",
              left: "50%",
              transform: "translate(-50%, 0)",
              zIndex: 20,
              borderRadius: "1056.998px",
            }}
            className=" absolute  transform rotate-90.103 flex-shrink-0 rounded-full bg-yellow-400"
            src={ellipse54}
          ></Image>
        </div>
        <div></div>
      </div>

     <MiddleCard/>
     <BottomMiddleCard/>
     
    </div>
  );
};

export default index;
