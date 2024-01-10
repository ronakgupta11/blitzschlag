import AmbassdorP from "../../../public/assets/ambassdorP.jpeg";
import Image from "next/image";
import MiddleCard from "@/components/ambassdorComponents/MiddleCard";
import BottomMiddleCard from "@/components/ambassdorComponents/BottomMiddleCard";
import Navbar from "@/components/Navbar";
import { useState,useEffect } from "react";
import CampusAmbassdorDialog from "@/components/ambassdorComponents/CampusAmbassdorDialog";
const index = () => {

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      const isMobileScreen = window.innerWidth < 768; // You can adjust the threshold as needed
      setIsMobile(isMobileScreen);
    };

    // Initial check
    handleResize();

    // Listen for resize events
    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])
  return (
    <div className="w-full overflow-x-hidden ">
      
      <div className={`   relative`}>
       <div>
       <div className={`lg:top-[20%]  top-[3%] md:top-[10%] z-2 w-full  overflow-x-hidden overflow-y-hidden  absolute font-sankaran text-white text-4xl md:text-7xl flex items-center justify-between`}>
          <div className="w-[30%] border-2 border-[#745601] mr-1 rounded-lg"></div>
          <p className=" text-transparent !bg-clip-text [background:linear-gradient(90.35deg,_#e9b704_9.26%,_#463000)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-center flex items-center justify-center w-[70%] h-30">
            Campus Ambassador
          </p>
          <div className="w-[30%] border-2 ml-1 border-[#745601] rounded-lg"></div>
          
        </div>
        
       </div>
      
       
     
       <div className="bottom-0">
       <Image className="w-full  " src={AmbassdorP}></Image>
       </div>
      </div>

      <MiddleCard />
      <BottomMiddleCard />
      <div className="bg-[#463000] flex flex-col items-center justify-center p-3 font-amita">

      <CampusAmbassdorDialog/>
      <div className="h-8 w-full"></div>
      </div>
    </div>
  );
};

export default index;
