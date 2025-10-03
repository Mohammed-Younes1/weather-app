import * as React from "react";
import { SVGProps } from "react";
const DropDownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={18}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M6.309 6.984 1.105 1.816c-.175-.14-.175-.421 0-.597L1.81.55a.405.405 0 0 1 .597 0l4.219 4.148L10.809.551c.175-.176.457-.176.597 0l.703.668c.176.176.176.457 0 .597L6.906 6.984a.405.405 0 0 1-.597 0Z"
    />
  </svg>
);
export default DropDownIcon;
