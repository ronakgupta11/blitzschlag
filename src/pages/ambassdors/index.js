import colorLine from "../../../public/assets/colorline.svg";
import AmbassdorP from '../../../public/assets/ambassdorP.jpeg'


import Image from "next/image";
import MiddleCard from "@/components/ambassdorComponents/MiddleCard";
import BottomMiddleCard from "@/components/ambassdorComponents/BottomMiddleCard";
import Footer from "@/components/Footer";
const index = () => {
  return (
    <div
      style={{ backgroundColor: "#0A0A0A" }}
      className="relative w-1280 h-832 flex-shrink-0  overflow-hidden text-center text-[3rem] text-white font-black-ops-one"
    >
      <div
        className="flex flex-wrap mt-[100px] gap-[50px]  items-center justify-center flex-shrink-0 w-952 h-74"
        style={{}}
      >
        <Image src={colorLine} ></Image>
        <div
          className="text-center  font-BlackOpsOne text-[36px] lg:text-[64px] font-normal leading-[40px]"
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

      <div className="w-full">
        <Image
         style={{width:"100%"}}
        src={AmbassdorP}></Image>
      </div>

     <MiddleCard/>
     <BottomMiddleCard/>
     <Footer/>
    </div>
  );
};

export default index;
