import React from "react";
import load from '../../public/blitz.gif'
export default function Loader() {
  return (
    <div className="loader top-0 fixed h-screen w-[100vw] z-[1001] bg-black  flex items-center justify-center">
      <img src={load.src} className="loader-back w-60"></img>{" "}
    </div>

  );
}
