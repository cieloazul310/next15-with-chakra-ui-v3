import { defineGlobalStyles } from "@chakra-ui/react";

/**
 * https://www.chakra-ui.com/guides/theming-change-default-color-palette
 */
export default defineGlobalStyles({
  html: {
    colorPalette: "orange",
    fontSize: { base: "100%", md: "111.25%", lg: "125%" },
  },
});
