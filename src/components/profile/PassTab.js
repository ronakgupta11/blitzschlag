import Link from "next/link";
import Image from "next/image";
import HamIcon from "/public/icons/hamburger.svg";
import LeftArrow from "/public/icons/left_arrow_black.svg";

function PassTab({ menu, setMenu, credentials }) {
  const head = (id) => {

    console.log("pass id",id)
    if (id === "0") {
      return "Maharaja Pass";
    } else if (id === "1") {
      return "Diwan Pass";
    } else if( id === "2") {
      return "Day1 Pass";
    }
    else if( id === "3") {
      return "Day2 Pass";
    }
    else if( id === "4") {
      return "Day3 Pass";
    }
    else if( id === "5"){
      return "Rawat Pass"
    }
  };
  const passes = credentials?.passes;
  // console.log(passes)
  return credentials ? (
    <div className="bg-[#FFFBED] text-black text-[18px] font-amita w-full">
      <div className="px-[30px] py-[20px] md:py-[0px] md:px-[60px] align-right font-bold leading-[24px] text-right flex items-center justify-between md:justify-end">
        <div
          className="p-[8px] bg-black rounded-full md:hidden"
          onClick={() => setMenu(!menu)}
        >
          <Image src={HamIcon} width={28} height={28} className="h-fit " />{" "}
        </div>
        <Link href={"/"}>
          <div className="flex gap-[10px] items-center text-[#393939] font-amita">
            <Image src={LeftArrow} alt="left_arrow_icon" /> Back to home
          </div>
        </Link>
      </div>
      {passes?.map((p, k) => (
        <div
          key={k}
          className="border border-black rounded-xl h-48 w-48 m-4 flex flex-col items-center justify-around"
        >
          <p>{head(p?.passId)}</p>
          <p>{`status: ${p?.status}`}</p>
        </div>
      ))}
      {passes?.length === 0 && (
        <div className="font-amita text-black text-[18px] p-[40px]">
          {" "}
          No passes Yet{" "}
        </div>
      )}
    </div>
  ) : (
    <div className="grid w-full bg-[#FFFBED]">
      <div className="px-[30px] py-[20px] md:py-[0px] md:px-[60px] align-right font-bold leading-[24px] text-right flex items-center justify-between md:justify-end">
        <div
          className="p-[8px] bg-black rounded-full md:hidden"
          onClick={() => setMenu(!menu)}
        >
          <Image src={HamIcon} width={28} height={28} className="h-fit " />{" "}
        </div>
        <Link href={"/"}>
          <div className="flex gap-[10px] items-center text-[#393939] font-amita">
            <Image src={LeftArrow} alt="left_arrow_icon" /> Back to home
          </div>
        </Link>
      </div>
    </div>
  );
}

export default PassTab;
