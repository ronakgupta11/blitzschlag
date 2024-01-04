"use client"

import Footer from "./Footer";
import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import Navbar from "./Navbar";
import SidebarBlitz from "./SidebarBlitz";
function Layout({ children }) {
  return (
    <ParallaxProvider>

    <div className="layout ">
      {/* <SidebarBlitz/> */}
      {/* <div className="sidebar fixed z-[9999999]  "><Sidebar/></div> */}
      <div className="  w-full z-[99]">
        <Navbar/>
      </div>
      <div className="content flex-1 w-full ">{children}</div>
      <Footer />
    </div>
    </ParallaxProvider>
  );
}

export default Layout;
