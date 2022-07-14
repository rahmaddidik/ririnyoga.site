import * as React from "react";
import { SVGProps } from "react";

const Aspal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={1280}
    height={136}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path fill="#7B7B7B" d="M0 0h1280v136H0z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M445.496 0-94.279 67.84H-130L435.924 0h9.572Zm183.74 4.196h20.779l-.934-2.098H630.17l-.934 2.098Zm22.413 4.43h-24.047l1.167-2.565h21.712l1.168 2.565ZM625.5 14.92h28.25l-1.401-3.73h-25.448l-1.401 3.73Zm31.752 9.092h-35.254l2.101-5.595h31.051l2.102 5.595Zm-40.391 14.92h45.526l-3.268-9.558H620.13l-3.269 9.558Zm-10.039 27.51h65.605l-6.538-18.184h-52.53l-6.537 18.184Zm766.708 1.399h35.72L843.324 0h-9.572l539.778 67.84Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h1280v136H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default Aspal;
