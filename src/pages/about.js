import React from "react";
import { connect } from "react-redux";
import img_1 from "../../public/assets/about/img_1.png";
import bg_container from "../../public/assets/about/bg_container.png";
import Image from "next/image";
import { useEffect,useState } from "react";
const aboutNew = () => {
  const [isMobile,setIsMobile]=useState(false)
  useEffect(() => {
    const handleResize = () => {
      const isMobileScreen = window.innerWidth < 768; // You can adjust the threshold as needed
      setIsMobile(isMobileScreen);
    };
    // Initial check
    handleResize();
    // Listen for resize events
    window.addEventListener("resize", handleResize);
    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
   <>
    {
      !isMobile && 
      <div className="bg-[#ffa401] flex w-full h-screen relative">
      <div className="w-[60%]">
        <div
          style={{ fontFamily: "sankaran" }}
          className=" pt-3 text-black text-center text-[64px] font-normal leading-[78px]"
        >
          About Us
        </div>
        <div className="p-5 text-black text-left font-amita text-[18px] lg:text-[22px] font-normal leading-loose">
          BLITZSCHLAG 2024, the largest annual cultural festival of Rajasthan
          and the crown jewel of the Malaviya National Institute of Technology
          Jaipur, ignites the spirit of the entire MNIT community! A vibrant
          tapestry of students woven together by a shared love for creativity
          and celebration. A carnival that offers a platform for students to
          unleash their talents, discover potential, and form lifelong bonds.
          From the exhilarating dance battles of RAMBA SAMBA to artistic
          masterpieces in the PRONITES, we offer an unparalleled stage for every
          passion to shine. BLITZSCHLAG is all about participating, connecting,
          and creating memories. We are a community of diverse individuals
          brought together by a common thread, the desire to celebrate life,
          explore our interests, and create something remarkable. The 2024
          edition of Blitzschlag promises to be brimming with exciting new
          additions and beloved traditions. Join us as we embark on a weekend of
          laughter and unforgettable experiences.
        </div>
      </div>
      <div className="absolute right-0 top-0 overflow-hidden object-cover max-w-[40%] h-screen">
        <Image className="w-full h-full" src={img_1} />
      </div>
    </div>
    }
    { isMobile && <div className="bg-[#ffa401] flex w-full h-screen relative">
      <div>
      <div
          style={{ fontFamily: "sankaran" }}
          className=" text-black  text-center pt-2 text-[40px] font-normal leading-normal"
        >
          About Us
        </div>
        <div className="p-5 text-black text-left font-amita text-[12px]  font-normal leading-normal">
          BLITZSCHLAG 2024, the largest annual cultural festival of Rajasthan
          and the crown jewel of the Malaviya National Institute of Technology
          Jaipur, ignites the spirit of the entire MNIT community! A vibrant
          tapestry of students woven together by a shared love for creativity
          and celebration. A carnival that offers a platform for students to
          unleash their talents, discover potential, and form lifelong bonds.
          From the exhilarating dance battles of RAMBA SAMBA to artistic
          masterpieces in the PRONITES, we offer an unparalleled stage for every
          passion to shine. BLITZSCHLAG is all about participating, connecting,
          and creating memories. We are a community of diverse individuals
          brought together by a common thread, the desire to celebrate life,
          explore our interests, and create something remarkable. The 2024
          edition of Blitzschlag promises to be brimming with exciting new
          additions and beloved traditions. Join us as we embark on a weekend of
          laughter and unforgettable experiences.
        </div>
      </div>
      <div>
        <Image className="absolute left-0 bottom-0 object-top max-h-[40%]" src={bg_container}></Image>
      </div>
    </div>}
   </>
  );
};
export default aboutNew;
