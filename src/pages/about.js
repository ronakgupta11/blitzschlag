import React from "react"
// import Menu from '../components/Menu'
 
const about = () => {
  return (
    <div class="relative flex flex-row m-0 bg-black w-screen overflow-hidden h-screen">
      <div class="absolute w-1/2 h-screen bg-black"></div>
      <div class="absolute w-ell1 left-left -top-top h-ell1 bg-brown rounded-l-full"></div>
      <div class="absolute w-ell2 h-ell2 -top-1/3 -right-in  bg-orange rounded-l-full "></div>
      <div class="absolute bg-slate-500 mix-blend-saturation backdrop-blur-sm p-4 w-screen h-108 text-white">
      </div> 
      {/* <Menu /> */}
      <div className="absolute top-[32px] left-[778px] w-[439px] h-11 text-center text-xl font-black-ops-one text-yellow-50">
        <div className="absolute top-[10px] left-[0px] w-[216px] h-6">
          <img
            className="absolute top-[0px] left-[0px] w-6 h-6 overflow-hidden object-cover"
            alt=""
            src="/riinstagramfill@2x.png"
          />
          <img
            className="absolute top-[0px] left-[64px] w-6 h-6 overflow-hidden object-cover"
            alt=""
            src="/icbaselinefacebook@2x.png"
          />
          <img
            className="absolute top-[0px] left-[128px] w-6 h-6 overflow-hidden object-cover"
            alt=""
            src="/mdilinkedin@2x.png"
          />
          <img
            className="absolute top-[0px] left-[192px] w-6 h-6 overflow-hidden object-cover"
            alt=""
            src="/mingcuteyoutubefill@2x.png"
          />
        </div>
        <div className="absolute top-[0px] left-[265px] leading-[44px]">
          Connect with Us
        </div>
      </div>
    </div>

  )
  
};

export default about;
