import { CSSObject, MantineThemeOverride } from "@mantine/core";

export const generateSxStyles = <T = unknown>(
  params: Record<keyof T, CSSObject> | T
): Record<keyof T, CSSObject> | T => params;

export const theme: MantineThemeOverride = {
  colorScheme: "light",
  primaryColor: "orange",
  defaultRadius: 0,
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
  },
};
