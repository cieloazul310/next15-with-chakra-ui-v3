import { defineConfig, defaultConfig, createSystem } from "@chakra-ui/react";

export default createSystem(
  defaultConfig,
  defineConfig({
    theme: {
      semanticTokens: {
        colors: {
          primary: {
            solid: { value: "{colors.teal.500}" },
            contrast: { value: "{colors.teal.100}" },
            fg: { value: "{colors.teal.700}" },
            muted: { value: "{colors.teal.100}" },
            subtle: { value: "{colors.teal.200}" },
            emphasized: { value: "{colors.teal.300}" },
            focusRing: { value: "{colors.teal.500}" },
          },
        },
        spacing: {
          xs: { value: "{spacing.1}" },
          sm: { value: "{spacing.2}" },
          md: { value: "{spacing.4}" },
          lg: { value: "{spacing.8}" },
          xl: { value: "{spacing.16}" },
          "2xl": { value: "{spacing.32}" },
        },
      },
    },
  }),
);
