// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon16PxCheck2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon16PxCheck2Icon(props: Icon16PxCheck2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 18"}
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
          "M9 15.75a6.75 6.75 0 100-13.5 6.75 6.75 0 000 13.5zm2.255-8.974a.853.853 0 011.166 0 .778.778 0 010 1.104L9.17 11.194a.32.32 0 01-.092.061.32.32 0 00-.092.061c-.123.062-.246.123-.368.123a.99.99 0 01-.553-.184L6.162 9.291a.853.853 0 010-1.165c.307-.369.798-.369 1.105 0l1.35 1.35 2.638-2.7z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon16PxCheck2Icon;
/* prettier-ignore-end */
