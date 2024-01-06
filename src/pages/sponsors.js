import React, { useEffect } from "react";
import SponsorHeader from "@/components/sponsorComponents/SponsorHeader";
import SponsorList from "@/components/sponsorComponents/SponsorList";
import { motion, useAnimation } from "framer-motion";

function sponsors() {

  return (
    <motion.div
      // initial={{ opacity: 0, y: 0 }}
      // animate={{ opacity: 1, y: -100 }}
      // transition={{ duration: 1 }}

      className="w-full flex flex-col items-center justify-center"
    >
      <SponsorHeader />
      <SponsorList />
    </motion.div>
  );
}

export default sponsors;
