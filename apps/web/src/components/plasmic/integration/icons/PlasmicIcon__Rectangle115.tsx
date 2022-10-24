// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle115IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle115Icon(props: Rectangle115IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 10"}
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
        d={"M8.72 1v7.72H1"}
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default Rectangle115Icon;
/* prettier-ignore-end */
