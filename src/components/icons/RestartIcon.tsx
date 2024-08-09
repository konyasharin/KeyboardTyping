import { FC, SVGAttributes } from 'react';

export const RestartIcon: FC<SVGAttributes<SVGElement>> = ({
  ...attributes
}) => {
  return (
    <svg
      width="64.000000"
      height="64.000000"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
    >
      <g clipPath="url(#clip2_7)">
        <path
          id="path"
          d="M56 10.66L56 32"
          stroke="#FFFFFF"
          strokeOpacity="1.000000"
          strokeWidth="1.500000"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <path
          id="path"
          d="M8 32L8 53.33"
          stroke="#FFFFFF"
          strokeOpacity="1.000000"
          strokeWidth="1.500000"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <path
          id="path"
          d="M56 32C56 18.74 45.25 8 32 8C25.21 8 19.09 10.81 14.73 15.33M8 32C8 45.25 18.74 56 32 56C38.47 56 44.34 53.43 48.66 49.26"
          stroke="#FFFFFF"
          strokeOpacity="1.000000"
          strokeWidth="1.500000"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};
