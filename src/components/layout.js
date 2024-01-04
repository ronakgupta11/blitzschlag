"use client"

import Footer from "./Footer";
import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <ParallaxProvider>

    <div className="layout ">
      {/* <div className="sidebar fixed z-[9999999]  "><Sidebar/></div> */}
      <div className="fixed  w-full z-[99]">
        <Navbar/>
      </div>
      <div className="content flex-1 w-full ">{children}</div>
      <Footer />
    </div>
    </ParallaxProvider>
  );
}

export default Layout;
