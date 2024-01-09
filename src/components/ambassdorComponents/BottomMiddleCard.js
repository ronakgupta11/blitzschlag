import React from "react";
import Image from "next/image";
import flower1 from "../../../public/assets/flower1.png";
import flower2 from "../../../public/assets/flower2.png";

const BottomMiddleCard = () => {
  return (
    <div className="bg-[#463000] ">
      <div className="flex sm:justify-center md:justify-between lg:justify-between   ">
        <Image className="hidden md:block" src={flower1}></Image>
        <div className="w-full lg:flex flex-col align-middle justify-center gap-4 text-white text-center font-sankaran text-[36px] lg:text-[48px] font-normal leading-[40px] mt-[36px] lg:mt-[78px]">
          <div className="">Benefits you</div>
          <div>will enjoy!</div>
        </div>
        <Image className="hidden md:block" src={flower2}></Image>
      </div>
      <div className="flex ml-5 justify-center w-[100%]  ">
        <div className="flex gap-[64px] gap-x-[94px] max-w-[1084px] mt-[35px] justify-center align-middle mb-12 flex-wrap ">
          {/* 1 */}
          <div className="flex-[45%]">
            <div className="flex justify-center gap-2 ">
              <p className="text-[#E9B704] pt-1 text-center font-sankaran lg:text-[64px] text-[40px]  font-normal leading-[40px]">
                1
              </p>
              <div style={{ textAlign: "start" }}>
                <div
                  style={{ fontFamily: "amita" }}
                  className="text-white max-w-[250px] lg:text-[40px] text-[20px] font-bold leading-[39px] tracking-[-1.2px]"
                >
                  Exclusive Merchandise
                </div>
                <p
                  style={{ fontFamily: "amita" }}
                  className="text-white font-Amita max-w-[311px] text-base font-normal leading-[35px] tracking-[-0.6px]"
                >
                  Flaunt your ambassador status with a cool t-shirt, badge, and
                  other exciting goodies.
                </p>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="flex-[45%]">
            <div className="flex justify-center gap-2 ">
              <p className="text-[#E9B704] pt-1 text-center font-sankaran lg:text-[64px] text-[40px]  font-normal leading-[40px]">
                2
              </p>
              <div style={{ textAlign: "start" }}>
                <div
                  style={{ fontFamily: "amita" }}
                  className="text-white max-w-[350px] lg:text-[40px] text-[20px] font-bold leading-[39px] tracking-[-1.2px]"
                >
                  Priority access to events
                </div>
                <p
                  style={{ fontFamily: "amita" }}
                  className="text-white font-Amita max-w-[311px] text-base font-normal leading-[35px] tracking-[-0.6px]"
                >
                  Skip the queues and enjoy priority access to all competitions,
                  workshops, and performances.
                </p>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className="flex-[45%]">
            <div className="flex gap-2 justify-center ">
              <p className="text-[#E9B704] pt-1 text-center font-sankaran lg:text-[64px] text-[40px]  font-normal leading-[40px]">
                3
              </p>
              <div style={{ textAlign: "start" }}>
                <div
                  style={{ fontFamily: "amita" }}
                  className="text-white max-w-[350px] lg:text-[40px] text-[20px] font-bold leading-[39px] tracking-[-1.2px]"
                >
                  Behind-the-scenes experience
                </div>
                <p
                  style={{ fontFamily: "amita" }}
                  className="text-white font-Amita max-w-[311px] text-base font-normal leading-[35px] tracking-[-0.6px]"
                >
                  Get a glimpse of the inner workings of the fest and interact
                  with the organizing team.
                </p>
              </div>
            </div>
          </div>
          {/* 4 */}
          <div className="flex-[45%]">
            <div className="flex gap-2 justify-center ">
              <p className="text-[#E9B704] pt-1 text-center font-sankaran lg:text-[64px] text-[40px]  font-normal leading-[40px]">
                4
              </p>
              <div style={{ textAlign: "start" }}>
                <div
                  style={{ fontFamily: "amita" }}
                  className="text-white max-w-[250px] lg:text-[40px] text-[20px] font-bold leading-[39px] tracking-[-1.2px]"
                >
                  Networking opportunities
                </div>
                <p
                  style={{ fontFamily: "amita" }}
                  className="text-white font-Amita max-w-[311px] text-base font-normal leading-[35px] tracking-[-0.6px]"
                >
                  Connect with fellow ambassadors, talented performers, and
                  renowned artists, expanding your network and building valuable
                  relationships.
                </p>
              </div>
            </div>
          </div>
          {/* 5 */}
          <div className="flex-[45%]">
            <div className="flex gap-2 justify-center ">
              <p className="text-[#E9B704] pt-1 text-center font-sankaran lg:text-[64px] text-[40px]  font-normal leading-[40px]">
                5
              </p>
              <div style={{ textAlign: "start" }}>
                <div
                  style={{ fontFamily: "amita" }}
                  className="text-white max-w-[250px] lg:text-[40px] text-[20px] font-bold leading-[39px] tracking-[-1.2px]"
                >
                  Certificate of recognition
                </div>
                <p
                  style={{ fontFamily: "amita" }}
                  className="text-white font-Amita max-w-[311px] text-base font-normal leading-[35px] tracking-[-0.6px]"
                >
                  Showcase your contribution to the fest with a prestigious
                  certificate acknowledging your valuable efforts.
                </p>
              </div>
            </div>
          </div>
          {/* 6 */}
          <div className="flex-[45%]">
            <div className="flex gap-2 justify-center ">
              <p className="text-[#E9B704] pt-1 text-center font-sankaran lg:text-[64px] text-[40px]  font-normal leading-[40px]">
                6
              </p>
              <div style={{ textAlign: "start" }}>
                <div
                  style={{ fontFamily: "amita" }}
                  className="text-white max-w-[250px] lg:text-[40px] text-[20px] font-bold leading-[39px] tracking-[-1.2px]"
                >
                  The Top Chart
                </div>
                <p
                  style={{ fontFamily: "amita" }}
                  className="text-white font-Amita max-w-[311px] text-base font-normal leading-[35px] tracking-[-0.6px]"
                >
                  There will be multiple students from each college chosen for
                  this position
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
