import React from "react";
import { AnimatedSvg } from "./style";

export const BoxSvg = () => {
  return (
    <AnimatedSvg
      className="rotating"
      width="180"
      height="180"
      viewBox="0 0 180 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="move-up"
        opacity="0.2"
        d="M23.2735 52.4536C22.764 53.3287 22.497 54.3238 22.5 55.3364V124.665C22.5054 125.666 22.7747 126.648 23.2809 127.512C23.787 128.377 24.512 129.092 25.3828 129.586L87.2578 164.391C88.0921 164.868 89.0394 165.111 90 165.094L90.6328 90.0005L23.2735 52.4536Z"
        fill="#CACACA"
      />
      <path
        className="move-up"
        d="M157.5 124.664V55.3363C157.495 54.3349 157.225 53.3526 156.719 52.4885C156.213 51.6244 155.488 50.909 154.617 50.4145L92.7422 15.6098C91.9085 15.1284 90.9627 14.875 90 14.875C89.0373 14.875 88.0915 15.1284 87.2578 15.6098L25.3828 50.4145C24.512 50.909 23.787 51.6244 23.2808 52.4885C22.7747 53.3526 22.5054 54.3349 22.5 55.3363V124.664C22.5054 125.666 22.7747 126.648 23.2808 127.512C23.787 128.376 24.512 129.092 25.3828 129.586L87.2578 164.391C88.0915 164.872 89.0373 165.126 90 165.126C90.9627 165.126 91.9085 164.872 92.7422 164.391L154.617 129.586C155.488 129.092 156.213 128.376 156.719 127.512C157.225 126.648 157.495 125.666 157.5 124.664V124.664Z"
        stroke="#CACACA"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="move-up"
        d="M124.453 107.227V70.6641L56.25 33.0469"
        stroke="#CACACA"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="move-up"
        d="M156.727 52.4536L90.6329 90.0005L23.2735 52.4536"
        stroke="#CACACA"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="move-up"
        d="M90.6328 90L90 165.094"
        stroke="#CACACA"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </AnimatedSvg>
  );
};
