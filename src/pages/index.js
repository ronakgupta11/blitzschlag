import { useEffect } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Page1 from '@/components/parallax/Page1';
import Page2 from '@/components/parallax/Page2';
import Page3 from '@/components/parallax/Page3';
import Page4 from '@/components/parallax/page4';
import Page5 from '@/components/parallax/page5';

const Home = () => {


  return (
<>
<Page2/>
<Page3/>
<Page4/>
<Page5/>
</>
  );
};

export default Home;
