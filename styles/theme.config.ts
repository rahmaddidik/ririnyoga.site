import { CSSObject, MantineThemeOverride } from "@mantine/core";

export const generateSxStyles = <T = unknown>(
  params: Record<keyof T, CSSObject> | T
): Record<keyof T, CSSObject> | T => params;

export const theme: MantineThemeOverride = {
  colorScheme: "light",
  primaryColor: "orange",
  defaultRadius: 0,
  fontFamily: "'Quicksand', sans-serif",
  headings: {
    fontFamily: "'Brittany Signature', sans-serif",
    fontWeight: "400",
    sizes: {
      h1: {
        fontSize: 48,
      },
      h2: {
        fontSize: 36,
      },
    },
  },
  breakpoints: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1440,
  },
  colors: {
    aspal: [
      "#7B7B7B",
      "#7B7B7B",
      "#7B7B7B",
      "#7B7B7B",
      "#7B7B7B",
      "#7B7B7B",
      "#7B7B7B",
      "#7B7B7B",
      "#7B7B7B",
      "#7B7B7B",
    ],
    background: [
      "#E4D4C4",
      "#E4D4C4",
      "#E4D4C4",
      "#E4D4C4",
      "#E4D4C4",
      "#E4D4C4",
      "#E4D4C4",
      "#E4D4C4",
      "#E4D4C4",
      "#E4D4C4",
    ],
    backgroundLight: [
      "#ECE7DF",
      "#ECE7DF",
      "#ECE7DF",
      "#ECE7DF",
      "#ECE7DF",
      "#ECE7DF",
      "#ECE7DF",
      "#ECE7DF",
      "#ECE7DF",
      "#ECE7DF",
    ],
    title: [
      "#B48739",
      "#B48739",
      "#B48739",
      "#B48739",
      "#B48739",
      "#B48739",
      "#B48739",
      "#B48739",
      "#B48739",
      "#B48739",
    ],
    textDark: [
      "#50261F",
      "#50261F",
      "#50261F",
      "#50261F",
      "#50261F",
      "#50261F",
      "#50261F",
      "#50261F",
      "#50261F",
      "#50261F",
    ],
  },
};
