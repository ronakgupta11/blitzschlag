import { useState, useEffect } from 'react';
import { motion, AnimatePresence, delay } from "framer-motion";
import Head from "next/head";
import Page2 from '@/components/parallax/Page2';
import Page3 from '@/components/parallax/Page3';
import Page4 from '@/components/parallax/page4';
import Page5 from '@/components/parallax/page5';
import Loader from "@/components/loader";
import LandingSection from '@/components/parallax/LandingSection/LandingSection';

const Home = ({ SLoading }) => {
  return (
    <>

<Head>
        <title>Blitzschlag'24</title>
        <meta name="description" content="BLITZSCHLAG 2024, the largest annual cultural festival of Rajasthan and the crown jewel of the Malaviya National Institute of Technology ,Jaipur " />
        <meta name="keywords" content="blitzschlag, blitz mnit, blitz, blitz24 , blitzschlag24, mnit,mnit cultural fest, blitzschlag" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Blitzschlag'24" />
<meta property="og:description" content="BLITZSCHLAG 2024, the largest annual cultural festival of Rajasthan" />
<meta property="og:image" content="/favicon.ico" />
      </Head>

      <AnimatePresence mode="sync">

        {SLoading &&
          <motion.div key="loader" initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='absolute z-[1000]'>
            <Loader ></Loader>
          </motion.div>}
        {!SLoading && <motion.div
          key="content"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <LandingSection />
          <Page2 />
          <Page3 />
          <Page4 />
          <Page5 />
        </motion.div>}
      </AnimatePresence>
    </>
  );
};

export default Home;


// import React, { useRef, useEffect } from 'react';
// import { motion, useAnimation } from 'framer-motion';

// const Home = () => {
//   const controls1 = useAnimation();
//   const controls2 = useAnimation();
//   const containerRef = useRef();

//   const handleScroll = async (event) => {
//     if (event.deltaY > 0) {
//       // Scrolling down
//       await controls1.start({ opacity: 0, x: -50 }); // Custom exit animation
//       controls1.set({ display: 'none' });
//       controls2.set({ display: 'block' });
//       await controls2.start({ opacity: 1, x: 0 });
//     } else {
//       // Scrolling up
//       await controls2.start({ opacity: 0, x: 50 }); // Custom exit animation
//       controls2.set({ display: 'none' });
//       controls1.set({ display: 'block' });
//       await controls1.start({ opacity: 1, x: 0 });
//     }
//   };

//   useEffect(() => {
//     const container = containerRef.current;
//     container.addEventListener('wheel', handleScroll);

//     return () => {
//       container.removeEventListener('wheel', handleScroll);
//     };
//   }, []);

//   return (
//     <AnimatePresence>

//     <div ref={containerRef} style={{ overflow: 'hidden', height: '100vh' }}>
//       <motion.div
//         className="component"
//         animate={controls1}
//         initial={{ opacity: 1, display: 'block', x: 0 }}
//         exit={{ opacity: 0, x: -50, transition: { duration: 2, ease: 'easeInOut' } }} // Custom exit animation
//         transition={{ duration: 0.5 }}
//       >
//         {/* Content of the first component */}
//       <Page2/>
//       </motion.div>

//       <motion.div
//         className="component"
//         animate={controls2}
//         initial={{ opacity: 0, display: 'none', x: 50 }}
//         exit={{ opacity: 0, x: 50, transition: { duration: 2, ease: 'easeInOut' } }} // Custom exit animation
//         transition={{ duration: 0.5 }}
//       >
//         {/* Content of the second component */}
//         <Page3/>
//       </motion.div>
//     </div>
//     </AnimatePresence>

//   );
// };

// export default Home;
