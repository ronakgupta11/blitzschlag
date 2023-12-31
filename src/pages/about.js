import React from "react";
// import Menu from '../components/Menu'
import flower1 from "../../public/assets/team/flower1.png";
import flower from "../../public/assets/team/flower.png";
import Image from "next/image";
const about = () => {
  return (
    <div className="bg-[#fffbed] min-h-screen relative w-full text-[#393939] text-lg font-amita flex flex-col items-center justify-center">
      <Image className="absolute top-0 right-0 rotate-90" src={flower1} />
      <div className="flex m-2 w-full items-center justify-between">
        <Image src={flower} />
        <Image src={flower} />
      </div>
      <p className="text-[#00293E] font-amita text-2xl my-4 ">About Us</p>
      <p className="text-justify w-[70%] mx-auto my-6">
        BLITZSCHLAG 2024, the largest annual cultural festival of Rajasthan and
        the crown jewel of the Malaviya National Institute of Technology Jaipur,
        ignites the spirit of the entire MNIT community! A vibrant tapestry of
        students woven together by a shared love for creativity and celebration.
        A carnival that offers a platform for students to unleash their talents,
        discover potential, and form lifelong bonds. From the exhilarating dance
        battles of RAMBA SAMBA to artistic masterpieces in the PRONITES, we
        offer an unparalleled stage for every passion to shine. BLITZSCHLAG is
        all about participating, connecting, and creating memories. We are a
        community of diverse individuals brought together by a common thread,
        the desire to celebrate life, explore our interests, and create
        something remarkable. The 2024 edition of Blitzschlag promises to be
        brimming with exciting new additions and beloved traditions. Join us as
        we embark on a weekend of laughter and unforgettable experiences.
      </p>
      <div className="h-12"></div>
      <div className="flex m-2 w-full items-center justify-between">
        <Image src={flower} />
        <Image src={flower} />
      </div>
      <Image className="absolute bottom-0 left-0 -rotate-90 " src={flower1} />
    </div>
  );
};

export default about;
