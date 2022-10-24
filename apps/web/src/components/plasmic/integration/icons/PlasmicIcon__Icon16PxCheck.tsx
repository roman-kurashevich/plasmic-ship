// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon16PxCheckIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon16PxCheckIcon(props: Icon16PxCheckIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M8 14A6 6 0 108 2a6 6 0 000 12zm2.005-7.977a.759.759 0 011.036 0 .691.691 0 010 .982L8.15 9.95a.285.285 0 01-.082.055.29.29 0 00-.082.054c-.109.055-.218.11-.327.11a.88.88 0 01-.49-.165L5.476 8.26a.759.759 0 010-1.036c.273-.328.71-.328.982 0l1.2 1.2 2.346-2.4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon16PxCheckIcon;
/* prettier-ignore-end */
