import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
function Layout({ children }) {
  return (
    <ParallaxProvider>

    <div className="layout ">
      {/* <div className="sidebar fixed z-[9999999]  "><Sidebar/></div> */}
      <Navbar/>
      <div className="content flex-1 relative w-full ">{children}</div>
      <Footer />
    </div>
    </ParallaxProvider>
  );
}

export default Layout;
