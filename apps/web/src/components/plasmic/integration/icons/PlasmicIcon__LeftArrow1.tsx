// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LeftArrow1IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LeftArrow1Icon(props: LeftArrow1IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 7 11"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M5.875 9.75L1.75 5.625 5.875 1.5"}
        stroke={"currentColor"}
        strokeWidth={"1.7"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default LeftArrow1Icon;
/* prettier-ignore-end */
