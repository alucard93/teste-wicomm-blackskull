import React from "react";

interface LeftArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
}

export const LeftArrow = (props: LeftArrowProps) => {
  let { className, style, onClick } = props;
  return (
    <div onClick={onClick}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={{ ...style, display: "block" }}
      >
        <rect
          width="32"
          height="32"
          rx="4"
          transform="matrix(-1 0 0 1 32 0)"
          fill="#CACACA"
        />
        <path
          d="M24.25 16H7.75"
          stroke="#0B0B0B"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14.5 9.25L7.75 16L14.5 22.75"
          stroke="#0B0B0B"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};
