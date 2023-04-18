import React from "react";

interface RightArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
}

export const RightArrow = (props: RightArrowProps) => {
  let { className, style, onClick } = props;
  className = "iconRight"
  return (
    <div onClick={onClick}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={{ ...style, display: "block", height: "32px", fontSize: "32" }}
      >
        <rect width="32" height="32" rx="4" fill="#CACACA" />
        <path
          d="M7.75 16H24.25"
          stroke="#0B0B0B"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M17.5 9.25L24.25 16L17.5 22.75"
          stroke="#0B0B0B"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      ;
    </div>
  );
};
