import React from "react";

export default function Rightarrow({Arrowstyle}) {
  return (
    <svg
      width="17"
      height="14"
      viewBox="0 0 17 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={Arrowstyle}
    >
      <path
        d="M1 7L15.2093 7"
        stroke="#D2D3E0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.39709 13L15.21 7L9.3971 1"
        stroke="#D2D3E0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
