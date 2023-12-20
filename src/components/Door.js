import { motion, useAnimation } from 'framer-motion';

const DoorAnimation = () => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();

  const handleOpenDoor = async () => {
    await Promise.all([
      controls1.start({ rotateY: 90, transition: { duration: 1, ease: 'easeInOut' } }),
      controls2.start({ rotateY: -90, transition: { duration: 1, ease: 'easeInOut' } }),
    ]);
  };

  const initialDoorsState = { rotateY: 0 };
  const initialWelcomeState = { opacity: 0, scale: 0.8 };
  const targetWelcomeState = { opacity: 1, scale: 1 };

  return (
    <div style={{ perspective: '1000px', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <motion.div
        style={{
          position: 'relative',
          width: '100%',
          height: '100vh',
          backgroundColor: '#4CAF50',
          transformOrigin: 'left',
        }}
        initial={initialDoorsState}
        animate={controls1}
      />

      <motion.div
        style={{
          position: 'relative',
          width: '100%',
          height: '100vh',
          backgroundColor: '#4CAF50',
          transformOrigin: 'right',
        }}
        initial={initialDoorsState}
        animate={controls2}
      />

      {/* Welcome content */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        initial={initialWelcomeState}
        animate={targetWelcomeState}
      >
        <p>Welcome!</p>
      </motion.div>

      <button style={{ position: 'absolute', bottom: '20px' }} onClick={handleOpenDoor}>
        Open Door
      </button>
    </div>
  );
};

export default DoorAnimation;
