// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group4195IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group4195Icon(props: Group4195IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 14"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M6.802 8.905a.7.7 0 01.991.991l-3.298 3.299a.7.7 0 01-.991 0L.205 9.896a.7.7 0 01.991-.99l2.716 2.714a.124.124 0 00.175 0l2.715-2.715zM3.504.205a.7.7 0 01.99 0l3.299 3.299a.7.7 0 11-.991.99L4.087 1.78a.124.124 0 00-.175 0L1.196 4.495a.7.7 0 11-.99-.991L3.503.205z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group4195Icon;
/* prettier-ignore-end */
