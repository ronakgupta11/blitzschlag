import React from "react";
import Image from "next/image";
import img from "../../../public/assets/events/event.png";
import Link from "next/link";
function EventCard1(props) {
  const data = props.data;

  return (
    <div className="flex relative md:w-[420px] w-[290px] items-center scale-60 md:scale-90 m-4">
      <div className="image absolute -left-20 md:-left-32 -top-4  h-44 md:h-64">
        <img className="w-full h-full rounded-lg" src={data.banner} />
      </div>
      <div className="flex flex-col bg-[#894e0d]  items-center  text-white justify-around md:w-[420px] w-[290px] h-40 md:h-[207px] border-b-2 border-t-2 border-r-2  rounded-br-[100px] ">
        <p className=" md:text-2xl text-lg font-bold font-amita">{data.name}</p>
        <p className="self-end pl-2 text-xs md:text-sm w-[213px] md:w-[316px]">
          Panache is a Fashion walk. In this the participants may participate
          individually and in groups as well. ( grouppreferably ).
        </p>
        <button className="px-4 text-xs md:text-sm text-white py-1 self-end mr-20 md:mr-16 bg-[#9D390E] border-white border rounded-3xl">
          <Link href={`/events/${data.id}`}>Know more</Link>
        </button>
      </div>
    </div>
  );
}

export default EventCard1;
