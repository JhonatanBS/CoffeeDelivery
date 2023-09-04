import { extendTheme } from "native-base";

export const THEME = extendTheme({
  colors: {
    yellow_dark: "#C47F17",
    yellow: "#DBAC2C",

    purple_dark: "#4B2995",
    purple: "#8047F8",
    purple_light: "#EBE5F9",

    gray: {
      100: "#272221",
      200: "#403937",
      300: "#574F4D",
      400: "#8D8686",
      500: "#D7D5D5",
      600: "#E6E5E5",
      700: "#EDEDED",
      800: "#F3F2F2",
      900: "#FAFAFA",
    },

    white: "#FFFFFF",

    red_dark: "#C44117",
    red: "#E8BAAB",
    red_light: "#F2DFD8"
  },

  fontsFamily: {
    heading: "Roboto_700Bold",
    body: "Roboto_400Regular",
    mono: "Baloo2_700Bold"
  },

  fontsSizes: {
    title: {
      XL: 36,
      LG: 24,
      MD: 20,
      SM: 16,
      XS: 14
    },
    text: {
      LG: 20,
      MD: 16,
      SM: 14,
      XS: 12
    },
  },

  sizes: {
    TAG: 10,
    BUTTON: 14,
  }
});