import React, { useState, useEffect } from 'react';

const ScrollColorChangeComponent = () => {
  const [bgColor, setBgColor] = useState('#3498db'); // Initial background color

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    // You can adjust the condition based on your scroll behavior
    if (scrollPosition > 100) {
      setBgColor('#e74c3c'); // Change to the target background color
    } else {
      setBgColor('#3498db'); // Initial background color
    }
  };

  useEffect(() => {
    // Add event listener for scroll on component mount
    window.addEventListener('scroll', handleScroll);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'background-color 0.5s ease', // Add a smooth transition
        backgroundColor: bgColor,
      }}
    >
      <h1 style={{ color: 'white' }}>Scroll to Change Background Color</h1>
      <div className='h-screen'>

      </div>
      <div className='h-screen'>

</div>
<div className='h-screen'>

</div>
<div className='h-screen'>

</div>

    </div>
  );
};

export default ScrollColorChangeComponent;
