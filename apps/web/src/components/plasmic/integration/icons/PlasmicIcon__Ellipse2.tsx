// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse2Icon(props: Ellipse2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 38 38"}
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

      <circle cx={"19"} cy={"19"} r={"19"} fill={"currentColor"}></circle>
    </svg>
  );
}

export default Ellipse2Icon;
/* prettier-ignore-end */
