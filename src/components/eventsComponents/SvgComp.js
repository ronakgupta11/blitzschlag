// components/CustomShapeSVG.js
import React from 'react';

const CustomShapeSVG = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" style={{ display: 'none' }}>
      <defs>
        <clipPath id="custom-clip-path" clipPathUnits="objectBoundingBox">
          <path d="M0 120C0 240 0 240 106.124 240C212.248 240 212.248 240 212.248 120C212.248 53.7258 141.063 48.3692 106.124 0C76.4092 46.5231 0 53.7258 0 120Z" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
};

export default CustomShapeSVG;
