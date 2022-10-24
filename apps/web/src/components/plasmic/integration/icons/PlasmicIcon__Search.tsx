// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SearchIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SearchIcon(props: SearchIconProps) {
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
          "M2.5 6.667a4.167 4.167 0 118.333 0 4.167 4.167 0 01-8.333 0zM6.667 1.5a5.167 5.167 0 103.282 9.157l3.697 3.697a.5.5 0 00.708-.708L10.657 9.95a5.167 5.167 0 00-3.99-8.45z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SearchIcon;
/* prettier-ignore-end */
