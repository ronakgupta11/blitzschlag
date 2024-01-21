import React from "react";
import Link from "next/link";
function EventCard1(props) {
  const data = props.data;

  return (
    <div className="flex relative md:w-[420px] w-[290px] items-center scale-90 m-4">
      <div className="image absolute -left-20 md:-left-32 -top-4 w-40 md:w-56  h-44 md:h-64">
        <img className="w-full h-full rounded-lg" src={data.banner} />
      </div>
      <div className="flex flex-col bg-[#894e0d]  items-center  text-white justify-around md:w-[420px] w-[290px] h-40 md:h-[207px] border-b-2 border-t-2 border-r-2  rounded-br-[100px] ">
        <p className=" md:text-2xl text-lg font-bold font-amita">{data.name}</p>
        <p className="self-end pl-2 md:pr-8  text-xs md:text-sm w-[213px] md:w-[316px]">
          {data.oneliner}
        </p>
        <button className="px-4 text-xs md:text-sm  text-white py-1   bg-[#9D390E] border-white border rounded-3xl">
          <Link href={`/events/${data.id}`}>Know more</Link>
        </button>
      </div>
    </div>
  );
}

export default EventCard1;
