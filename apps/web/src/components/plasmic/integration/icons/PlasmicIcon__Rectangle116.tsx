// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle116IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle116Icon(props: Rectangle116IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 12"}
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
        d={"M10.265 1v9.265H1"}
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default Rectangle116Icon;
/* prettier-ignore-end */
