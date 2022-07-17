import { MantineThemeOverride } from "@mantine/core";
import colors from "./colors";

const theme: MantineThemeOverride = {
  // Defines color scheme for all components
  colorScheme: "light",

  // Controls focus ring styles:
  // auto – display focus ring only when user navigates with keyboard (default)
  // always – display focus ring when user navigates with keyboard and mouse
  // never – focus ring is always hidden (not recommended)
  focusRing: "auto",

  // Default border-radius for most elements
  defaultRadius: 0,

  // White and black colors
  white: colors["cool-grey-100"],
  black: colors["cool-grey-900"],

  // Object of arrays with 10 colors
  colors: {
    purple: [
      colors["purple-100"],
      colors["purple-200"],
      colors["purple-300"],
      colors["purple-400"],
      colors["purple-500"],
      colors["purple-600"],
      colors["purple-700"],
      colors["purple-800"],
      colors["purple-900"],
      "#000000", // Placeholder. Theme settings require 10 colors but we only have 9.
    ],
    "cool-grey": [
      colors["cool-grey-100"],
      colors["cool-grey-200"],
      colors["cool-grey-300"],
      colors["cool-grey-400"],
      colors["cool-grey-500"],
      colors["cool-grey-600"],
      colors["cool-grey-700"],
      colors["cool-grey-800"],
      colors["cool-grey-900"],
      "#000000", // Placeholder. Theme settings require 10 colors but we only have 9.
    ],
    green: [
      colors["green-100"],
      colors["green-200"],
      colors["green-300"],
      colors["green-400"],
      colors["green-500"],
      colors["green-600"],
      colors["green-700"],
      colors["green-800"],
      colors["green-900"],
      "#000000", // Placeholder. Theme settings require 10 colors but we only have 9.
    ],
    red: [
      colors["red-100"],
      colors["red-200"],
      colors["red-300"],
      colors["red-400"],
      colors["red-500"],
      colors["red-600"],
      colors["red-700"],
      colors["red-800"],
      colors["red-900"],
      "#000000", // Placeholder. Theme settings require 10 colors but we only have 9.
    ],
    yellow: [
      colors["yellow-100"],
      colors["yellow-200"],
      colors["yellow-300"],
      colors["yellow-400"],
      colors["yellow-500"],
      colors["yellow-600"],
      colors["yellow-700"],
      colors["yellow-800"],
      colors["yellow-900"],
      "#000000", // Placeholder. Theme settings require 10 colors but we only have 9.
    ],
  },

  // Key of theme.colors
  primaryColor: "purple",

  // Index of color from theme.colors that is considered primary
  primaryShade: 4,

  // Font family and line-height used in most components
  fontFamily: "Proxima Nova, Soleil, Noto Sans, sans-serif",
  lineHeight: 1.14,

  // Timing function used for animations
  transitionTimingFunction: "ease",

  // Monospace font family, used in Code, kbd, and Prism components
  fontFamilyMonospace: "monospace",

  // Sizes for corresponding properties
  fontSizes: { xs: 12, sm: 18, md: 30, lg: 48, xl: 72 },
  radius: { xs: 5, sm: 10, md: 20, lg: 35, xl: 50 },
  spacing: { xs: 8, sm: 24, md: 55, lg: 80, xl: 124 },

  // Breakpoints used to add responsive styles
  // breakpoints: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920 },

  // h1-h6 styles, used in Title and TypographyStylesProvider components
  headings: {
    fontFamily: "Proxima Nova",
    fontWeight: "semibold",
    sizes: {
      h1: { fontSize: 72, lineHeight: 1 },
      h2: { fontSize: 60, lineHeight: 1 },
      h3: { fontSize: 48, lineHeight: 1.5 },
      h4: { fontSize: 36, lineHeight: 1.5 },
      h5: { fontSize: 30, lineHeight: 2 },
      h6: { fontSize: 24, lineHeight: 2 },
    },
  },

  // Text direction
  dir: "ltr",

  // Default loader used in Loader and LoadingOverlay components
  loader: "oval",
};
export default theme;
