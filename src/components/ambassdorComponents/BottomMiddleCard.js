import React from "react";
import Image from "next/image";
import flower1 from "../../../public/assets/flower1.png";
import flower2 from "../../../public/assets/flower2.png";


const BottomMiddleCard = () => {
  return (
    <div className="bg-[#463000] ">
      <div className="flex sm:justify-center md:justify-between lg:justify-between  ">
        <Image className="hidden md:block" src={flower1}></Image>
        <div className="w-full lg:flex flex-col align-middle justify-center gap-4 text-white text-center font-BlackOpsOne text-[36px] lg:text-[48px] font-normal leading-[40px] mt-[36px] lg:mt-[78px]">
          <div className="">
          Benefits you
          </div>
          <div>
          will enjoy!
          </div>
        </div>
        <Image className="hidden md:block" src={flower2}></Image>
      </div>
      <div className="flex ml-5 justify-center w-[100%]  ">
      <div 
      className="flex gap-[64px] gap-x-[94px] max-w-[1084px] mt-[35px] justify-center align-middle  flex-wrap ">
        {/* 1 */}
        <div className="flex-[45%]">
          <div className="flex justify-center gap-2 ">
            <p className="text-[#E9B704] pt-1 text-center font-BlackOpsOne text-[64px] font-normal leading-[40px]">
              1
            </p>
            <div style={{textAlign:"start"}}>
            <div 
            style={{fontFamily:"amita"}}
            className="text-white max-w-[250px] text-[40px] font-bold leading-[39px] tracking-[-1.2px]">
            Goods and Merchandise
          </div>
          <p 
           style={{fontFamily:"amita"}}
          className="text-white font-Amita max-w-[311px] text-base font-normal leading-[35px] tracking-[-0.6px]">
            There will be multiple students from each college chosen for this
            position
          </p>
            </div>
          </div>
          
        </div>
        {/* 2 */}
        <div className="flex-[45%]">
          <div className="flex justify-center gap-2 ">
            <p className="text-[#E9B704] pt-1 text-center font-BlackOpsOne text-[64px] font-normal leading-[40px]">
              2
            </p>
            <div style={{textAlign:"start"}}>
            <div 
            style={{fontFamily:"amita"}}
            className="text-white max-w-[250px] text-[40px] font-bold leading-[39px] tracking-[-1.2px]">
            Networking
          </div>
          <p 
           style={{fontFamily:"amita"}}
          className="text-white font-Amita max-w-[311px] text-base font-normal leading-[35px] tracking-[-0.6px]">
            There will be multiple students from each college chosen for this
            position
          </p>
            </div>
          </div>
          
        </div>
        {/* 3 */}
        <div className="flex-[45%]">
          <div className="flex gap-2 justify-center ">
            <p className="text-[#E9B704] pt-1 text-center font-BlackOpsOne text-[64px] font-normal leading-[40px]">
              3
            </p>
            <div style={{textAlign:"start"}}>
            <div 
            style={{fontFamily:"amita"}}
            className="text-white max-w-[250px] text-[40px] font-bold leading-[39px] tracking-[-1.2px]">
            Take Charge
          </div>
          <p 
           style={{fontFamily:"amita"}}
          className="text-white font-Amita max-w-[311px] text-base font-normal leading-[35px] tracking-[-0.6px]">
            There will be multiple students from each college chosen for this
            position
          </p>
            </div>
          </div>
          
        </div>
        {/* 4 */}
        <div className="flex-[45%]">
          <div className="flex gap-2 justify-center ">
            <p className="text-[#E9B704] pt-1 text-center font-BlackOpsOne text-[64px] font-normal leading-[40px]">
              4
            </p>
            <div style={{textAlign:"start"}}>
            <div 
            style={{fontFamily:"amita"}}
            className="text-white max-w-[250px] text-[40px] font-bold leading-[39px] tracking-[-1.2px]">
            Passes
          </div>
          <p 
           style={{fontFamily:"amita"}}
          className="text-white font-Amita max-w-[311px] text-base font-normal leading-[35px] tracking-[-0.6px]">
            There will be multiple students from each college chosen for this
            position
          </p>
            </div>
          </div>
          
        </div>
        {/* 5 */}
        <div className="flex-[45%]">
          <div className="flex gap-2 justify-center ">
            <p className="text-[#E9B704] pt-1 text-center font-BlackOpsOne text-[64px] font-normal leading-[40px]">
              5
            </p>
            <div style={{textAlign:"start"}}>
            <div 
            style={{fontFamily:"amita"}}
            className="text-white max-w-[250px] text-[40px] font-bold leading-[39px] tracking-[-1.2px]">
            Certification
          </div>
          <p 
           style={{fontFamily:"amita"}}
          className="text-white font-Amita max-w-[311px] text-base font-normal leading-[35px] tracking-[-0.6px]">
            There will be multiple students from each college chosen for this
            position
          </p>
            </div>
          </div>
          
        </div>
        {/* 6 */}
        <div className="flex-[45%]">
          <div className="flex gap-2 justify-center ">
            <p className="text-[#E9B704] pt-1 text-center font-BlackOpsOne text-[64px] font-normal leading-[40px]">
              6
            </p>
            <div style={{textAlign:"start"}}>
            <div 
            style={{fontFamily:"amita"}}
            className="text-white max-w-[250px] text-[40px] font-bold leading-[39px] tracking-[-1.2px]">
            The Top Chart
          </div>
          <p 
           style={{fontFamily:"amita"}}
          className="text-white font-Amita max-w-[311px] text-base font-normal leading-[35px] tracking-[-0.6px]">
            There will be multiple students from each college chosen for this
            position
          </p>
            </div>
          </div>
          
        </div>
      </div>

      </div>
    </div>
  );
};

export default BottomMiddleCard;
