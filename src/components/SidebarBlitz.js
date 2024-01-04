import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`sm:px-16 px-6 flex w-full items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto ">
        <Link
          className="flex items-center gap-2"
          href={"/"}
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-[18px] font-bold cursor-pointer text-white">
            Ronak Gupta
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          <li
            className={`
      "text-white":"text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => setActive(nav.title)}
          >
            <a href={""}>hello</a>
          </li>
        </ul>
        <div className="sm:hidden flex flex-1 justify-end cursor-pointer">
          <button
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          >
            Toggle
          </button>

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient bg-[#0A0A0A] absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl `}
          >
            <ul className="list-none flex flex-col  items-start justify-end gap-4  text-white text-center font-black-ops-one text-[16px]  font-normal leading-[44px]">
              <li></li>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Events</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
              <li className="flex flex-col justify-center align-middle">
                <button className="bg-[#463000] btn-sm lg:btn text-white lg:px-6 text-center flex flex-col justify-center align-middle rounded-full">
                  <a className="text-[16px]" href="">
                    Register
                  </a>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
