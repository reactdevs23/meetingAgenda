import React from "react";

const CheckMark = ({ color, bg }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <circle cx="8.89117" cy="8.89117" r="8.89117" fill={bg} />
      <path
        d="M5.28711 8.6508L8.17073 11.5344L12.4962 7.20898"
        stroke={color}
        strokeWidth="1.92242"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CheckMark;
