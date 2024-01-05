import Link from "next/link";
import Image from "next/image";
import HamIcon from "/public/icons/hamburger.svg";
import LeftArrow from "/public/icons/left_arrow.svg";

function PassTab({ menu, setMenu, credentials }) {
  return credentials ? (
    <div className="bg-[#FFFBED] p-[40px] text-black text-[18px] font-amita w-full">
      No Passes yet
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
