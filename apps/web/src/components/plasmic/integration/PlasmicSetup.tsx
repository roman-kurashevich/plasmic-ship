// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ph1WL4Cxb3ZK7yQC6LjnPo
// Component: EDVx4DP3jG
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Header from "../../Header"; // plasmic-import: lao2224rYIi/component
import { Select } from "@mantine/core"; // plasmic-import: aQ6gxybG5l/codeComponent
import { Button } from "@mantine/core"; // plasmic-import: eV6E2AjDCw/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_integration.module.css"; // plasmic-import: ph1WL4Cxb3ZK7yQC6LjnPo/projectcss
import sty from "./PlasmicSetup.module.css"; // plasmic-import: EDVx4DP3jG/css

import Ellipse3Icon from "./icons/PlasmicIcon__Ellipse3"; // plasmic-import: VYfKL0Faz2r/icon

export type PlasmicSetup__VariantMembers = {};
export type PlasmicSetup__VariantsArgs = {};
type VariantPropType = keyof PlasmicSetup__VariantsArgs;
export const PlasmicSetup__VariantProps = new Array<VariantPropType>();

export type PlasmicSetup__ArgsType = {};
type ArgPropType = keyof PlasmicSetup__ArgsType;
export const PlasmicSetup__ArgProps = new Array<ArgPropType>();

export type PlasmicSetup__OverridesType = {
  root?: p.Flex<"div">;
  onboarding?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  rectangle120?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
  rectangle121?: p.Flex<"div">;
  form?: p.Flex<"div">;
  frame4268?: p.Flex<"div">;
  text3?: p.Flex<"div">;
  text4?: p.Flex<"div">;
  frame4267?: p.Flex<"div">;
  frame4266?: p.Flex<"div">;
  link?: p.Flex<"a"> & Partial<LinkProps>;
};

export interface DefaultSetupProps {}

function PlasmicSetup__RenderFunc(props: {
  variants: PlasmicSetup__VariantsArgs;
  args: PlasmicSetup__ArgsType;
  overrides: PlasmicSetup__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div
        data-plasmic-name={"root"}
        data-plasmic-override={overrides.root}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        className={classNames(
          projectcss.all,
          projectcss.root_reset,
          projectcss.plasmic_default_styles,
          projectcss.plasmic_mixins,
          sty.root
        )}
      >
        <div
          data-plasmic-name={"onboarding"}
          data-plasmic-override={overrides.onboarding}
          className={classNames(projectcss.all, sty.onboarding)}
        >
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header)}
          />

          <div
            data-plasmic-name={"rectangle120"}
            data-plasmic-override={overrides.rectangle120}
            className={classNames(projectcss.all, sty.rectangle120)}
          />

          <Ellipse3Icon
            data-plasmic-name={"svg"}
            data-plasmic-override={overrides.svg}
            className={classNames(projectcss.all, sty.svg)}
            role={"img"}
          />

          <div
            data-plasmic-name={"rectangle121"}
            data-plasmic-override={overrides.rectangle121}
            className={classNames(projectcss.all, sty.rectangle121)}
          />

          <p.Stack
            as={"div"}
            data-plasmic-name={"form"}
            data-plasmic-override={overrides.form}
            hasGap={true}
            className={classNames(projectcss.all, sty.form)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"frame4268"}
              data-plasmic-override={overrides.frame4268}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame4268)}
            >
              <div
                data-plasmic-name={"text3"}
                data-plasmic-override={overrides.text3}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text3
                )}
              >
                {"Set up account"}
              </div>

              <div
                data-plasmic-name={"text4"}
                data-plasmic-override={overrides.text4}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text4
                )}
              >
                {"This info is needed to provide more accurate search results"}
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame4267"}
              data-plasmic-override={overrides.frame4267}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame4267)}
            >
              <Select
                className={classNames(
                  "__wab_instance",
                  sty.selectMantine__dkhvA
                )}
                data={["English", "Spanish", "Russian", "French"]}
                disabled={false}
                dropdownPosition={"top" as const}
                label={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__f8Pt
                    )}
                  >
                    {"Language preference"}
                  </div>
                }
                placeholder={"Select language" as const}
                radius={5 as const}
                size={"md" as const}
                variant={"default" as const}
              />

              <Select
                className={classNames(
                  "__wab_instance",
                  sty.selectMantine__oQgiH
                )}
                data={["A1", "A2", "B1", "B2", "C1", "C2"]}
                disabled={false}
                dropdownPosition={"top" as const}
                label={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__iErVp
                    )}
                  >
                    {"Insurance"}
                  </div>
                }
                placeholder={"Select insurance" as const}
                radius={5 as const}
                size={"md" as const}
                variant={"default" as const}
              />
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame4266"}
              data-plasmic-override={overrides.frame4266}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame4266)}
            >
              <Button
                className={classNames("__wab_instance", sty.button__iPbGz)}
                color={"green" as const}
                compact={false}
                disabled={false}
                fullWidth={true}
                loaderPosition={"left" as const}
                loading={false}
                radius={5 as const}
                size={"md" as const}
                type={"button" as const}
                uppercase={false}
                variant={"filled" as const}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__qvvkz
                  )}
                >
                  {"Save"}
                </div>
              </Button>

              <p.PlasmicLink
                data-plasmic-name={"link"}
                data-plasmic-override={overrides.link}
                className={classNames(projectcss.all, projectcss.a, sty.link)}
                component={Link}
                href={`/signup`}
                platform={"nextjs"}
              >
                <Button
                  className={classNames("__wab_instance", sty.button__v4A2V)}
                  color={"green" as const}
                  compact={false}
                  disabled={false}
                  fullWidth={true}
                  loaderPosition={"left" as const}
                  loading={false}
                  radius={5 as const}
                  size={"md" as const}
                  type={"button" as const}
                  uppercase={false}
                  variant={"white" as const}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__aYlZe
                    )}
                  >
                    {"Skip"}
                  </div>
                </Button>
              </p.PlasmicLink>
            </p.Stack>
          </p.Stack>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "onboarding",
    "header",
    "rectangle120",
    "svg",
    "rectangle121",
    "form",
    "frame4268",
    "text3",
    "text4",
    "frame4267",
    "frame4266",
    "link"
  ],
  onboarding: [
    "onboarding",
    "header",
    "rectangle120",
    "svg",
    "rectangle121",
    "form",
    "frame4268",
    "text3",
    "text4",
    "frame4267",
    "frame4266",
    "link"
  ],
  header: ["header"],
  rectangle120: ["rectangle120"],
  svg: ["svg"],
  rectangle121: ["rectangle121"],
  form: [
    "form",
    "frame4268",
    "text3",
    "text4",
    "frame4267",
    "frame4266",
    "link"
  ],
  frame4268: ["frame4268", "text3", "text4"],
  text3: ["text3"],
  text4: ["text4"],
  frame4267: ["frame4267"],
  frame4266: ["frame4266", "link"],
  link: ["link"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  onboarding: "div";
  header: typeof Header;
  rectangle120: "div";
  svg: "svg";
  rectangle121: "div";
  form: "div";
  frame4268: "div";
  text3: "div";
  text4: "div";
  frame4267: "div";
  frame4266: "div";
  link: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSetup__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSetup__VariantsArgs;
    args?: PlasmicSetup__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSetup__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSetup__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicSetup__ArgProps,
          internalVariantPropNames: PlasmicSetup__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicSetup__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSetup";
  } else {
    func.displayName = `PlasmicSetup.${nodeName}`;
  }
  return func;
}

export const PlasmicSetup = Object.assign(
  // Top-level PlasmicSetup renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    onboarding: makeNodeComponent("onboarding"),
    header: makeNodeComponent("header"),
    rectangle120: makeNodeComponent("rectangle120"),
    svg: makeNodeComponent("svg"),
    rectangle121: makeNodeComponent("rectangle121"),
    form: makeNodeComponent("form"),
    frame4268: makeNodeComponent("frame4268"),
    text3: makeNodeComponent("text3"),
    text4: makeNodeComponent("text4"),
    frame4267: makeNodeComponent("frame4267"),
    frame4266: makeNodeComponent("frame4266"),
    link: makeNodeComponent("link"),

    // Metadata about props expected for PlasmicSetup
    internalVariantProps: PlasmicSetup__VariantProps,
    internalArgProps: PlasmicSetup__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicSetup;
/* prettier-ignore-end */
