import React from "react";

export const EventCard = ({title,desc1,desc2}) => {
  return (

<div className="relative w-full m-2 ">
  <div className=" absolute z-10 border rounded-lg h-full w-full " style={{background: 'linear-gradient(99deg, rgba(0, 22.45, 42.06, 0.80) 0%, rgba(65, 48, 90, 0.03) 100%)',boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)',}}></div>

<div className="relative flex flex-col space-y-2 md:flex-row p-4 md:p-8 overflow-x-hidden rounded-lg z-10 ">



  <div className="md:w-96">
    <img className="w-full rounded-lg"
      src="https://c.animaapp.com/NTSSYpw2/img/yogendra-singh-koiodzd-byq-unsplash@2x.png"
      
      >
    </img>
  </div>
  <div className="flex flex-col px-4 text-white space-y-4">

  <div className="flex flex-col space-y-4">
    <div className="font-black-ops-one text-white text-xl">
      {title}
    </div>
    <div className="font-amita text-white flex flex-col space-y-4">

    <p>
      {desc1}
    </p>
    <p>
      {desc2}
    </p>
    </div>
  </div>
<div className="flex flex-col space-y-2 md:flex-row px-4 w-full justify-between items-center">

  <div className="flex w-full space-x-16">
    <div className="">
      <p className="font-amita">
        Venue
      </p>
      <p className="font-bold text-lg">
        Oat
      </p>
      <p>
        8:00 pm
      </p>
    </div>
    <div>
      <p className="font-amita">
        Date
      </p>
      <p className="font-bold text-lg">
        Oat
      </p>
      <p>
        8:00 pm
      </p>
    </div>
  </div>

  
    <button className="bg-[#FF002F] w-full md:w-60  text-white font-black-ops-one text-lg  rounded-md px-16 py-2 " >

    Register
    </button>
  
    </div>
    </div>

      </div>
</div>
      
    

  );
};


      
        // <div className="relative w-[897px] h-[280px] rounded-[16px] shadow-[4px_4px_4px_#00000040] [background:linear-gradient(180deg,rgba(0,22.45,42.06,0.8)_0%,rgba(65,48,90,0.03)_100%)]">
        //   <img
        //     className="absolute w-[320px] h-[240px] top-[20px] left-[32px] object-cover"
        //     alt="Yogendra singh"
        //     src="https://c.animaapp.com/NTSSYpw2/img/yogendra-singh-koiodzd-byq-unsplash@2x.png"
        //   />
        //   <div className="absolute top-[16px] left-[384px] font-black-ops-one font-normal text-white text-[18px] text-center tracking-[0] leading-[44px] whitespace-nowrap">
        //    {title}
        //   </div>
        //   <p className="absolute w-[481px] top-[62px] left-[384px] [font-family:'Amita-Regular',Helvetica] font-normal text-[#e1e1e1] text-[14px] tracking-[0] leading-[24px]">
        //     {desc1} <br />
        //     <br />
        //    {desc2}
        //   </p>
        //   <div className="absolute w-[220px] h-[38px] top-[210px] left-[645px] bg-[#ff002e] rounded-[4px]">
        //     <div className="w-[89px] top-[3px] left-[66px] [font-family:'Black_Ops_One-Regular',Helvetica] text-center leading-[32px] absolute font-normal text-white text-[16px] tracking-[0] whitespace-nowrap">
        //       Register
        //     </div>
        //   </div>
        //   <div className="w-[79px] left-[384px] absolute h-[85px] top-[175px]">
        //     <div className="absolute w-[56px] top-0 left-0 [font-family:'Amita-Regular',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[24px] whitespace-nowrap">
        //       Venue
        //     </div>
        //     <div className="absolute top-[31px] left-0 [font-family:'Inter-Bold',Helvetica] font-bold text-white text-[16px] tracking-[0] leading-[24px] whitespace-nowrap">
        //       OAT
        //     </div>
        //     <div className="absolute top-[61px] left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[24px] whitespace-nowrap">
        //       06:00 pm
        //     </div>
        //   </div>
        //   <div className="w-[88px] left-[505px] absolute h-[85px] top-[175px]">
        //     <div className="w-[56px] top-0 left-0 [font-family:'Amita-Regular',Helvetica] leading-[24px] absolute font-normal text-white text-[16px] tracking-[0] whitespace-nowrap">
        //       Date
        //     </div>
        //     <div className="absolute top-[31px] left-0 [font-family:'Inter-Bold',Helvetica] font-bold text-white text-[16px] tracking-[0] leading-[24px] whitespace-nowrap">
        //       2.02.2024
        //     </div>
        //     <div className="absolute top-[61px] left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[24px] whitespace-nowrap">
        //       Friday
        //     </div>
        //   </div>
        // </div>
