import React from 'react'
import Image from 'next/image'

import { motion } from 'framer-motion'

import classes from './LandingSection.module.css'

import bottomCloud from "../../../../public/assets/home/page1/cloudsbottom.png"
import topCloud from "../../../../public/assets/home/page1/cloudstop.png"
import sun from "../../../../public/assets/home/page1/sun.png"
import gate from "../../../../public/assets/home/page1/gate.png"


function LandingSection() {
    return (
        <div className={`${classes.root} h-screen relative overflow-hidden`}>
            <motion.div
                initial={{ y: 0, scale: 1 }} 
                animate={{ y: 40, scale: 3 }} 
                transition={{ duration: 1, delay: 0 }}
                className='absolute w-screen z-[25] w-screen absolute flex items-center overflow-hidden pointer-events-none'>
                    <Image className='w-screen' src={gate} />
            </motion.div>
            <motion.div
                initial={{ y: 100 }} 
                animate={{ y: 0 }} 
                transition={{ duration: 2, delay: 0 }} 
                className='absolute bottom-0 w-screen z-10'
            >
                <Image className='w-screen' src={bottomCloud} />
            </motion.div>
            <div className='absolute font-sankaran w-screen z-20'>
                <motion.div className="flex items-center justify-center h-screen"
                    initial={{ y: 400, scale: 1 }} 
                    animate={{ y: 0 }} 
                    transition={{ duration: 2, delay: 0 }} 
                >
                    <h1

                        className={`${classes.maintext} text-center`}
                    >
                        blitzschlag'24
                    </h1>
                </motion.div>
            </div>
            <motion.div
                initial={{ y: 70 }} 
                animate={{ y: 0 }} 
                transition={{ duration: 2, delay: 0 }} 
                className='absolute bottom-0 w-screen z-[25]'
            >
                <Image className='w-screen' src={topCloud} />
            </motion.div>
            <motion.div className="flex items-center justify-center h-screen"
                initial={{ y: 0, scale: 0.3 }} 
                animate={{ y: 40, scale: 2 }} 
                transition={{ duration: 1.7, delay: 0 }}>

                <Image className='w-50' src={sun} />
            </motion.div>
        </div>
    )
}
export default LandingSection;


