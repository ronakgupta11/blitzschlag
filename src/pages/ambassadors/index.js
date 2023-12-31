
import AmbassdorP from '../../../public/assets/ambassdorP.jpeg'
import Image from "next/image";
import MiddleCard from "@/components/ambassdorComponents/MiddleCard";
import BottomMiddleCard from "@/components/ambassdorComponents/BottomMiddleCard";
const index = () => {
  return (
    <div className='w-full overflow-x-hidden'>

    <div
    
      className="relative"
    >
 <div className=' lg:top-[20%] top-[10%] z-2 w-full  overflow-x-hidden overflow-y-hidden  absolute font-sankaran text-white text-4xl md:text-7xl flex items-center justify-between'>
          <div className='w-[30%] border-2 border-[#745601] mr-1 rounded-lg'></div>
          <p className=' text-transparent !bg-clip-text [background:linear-gradient(90.35deg,_#e9b704_9.26%,_#463000)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-center flex items-center justify-center w-[70%] h-24'>Campus Ambassador</p>
          <div className='w-[30%] border-2 ml-1 border-[#745601] rounded-lg'></div>

        </div>
     
        <Image
        src={AmbassdorP}></Image>

</div>

      

     <MiddleCard/>
     <BottomMiddleCard/>
     
    </div>

  );
};

export default index;
