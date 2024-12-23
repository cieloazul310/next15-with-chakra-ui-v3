import { defineConfig, defaultConfig, createSystem } from "@chakra-ui/react";
import globalCss from "./global-css";
import tokens from "./tokens";
import semanticTokens from "./semantic-tokens";
import slotRecipes from "./slot-recipes";
import recipes from "./recipes";
import textStyles from "./text-styles";

export default createSystem(
  defaultConfig,
  defineConfig({
    globalCss,
    theme: {
      tokens,
      semanticTokens,
      slotRecipes,
      recipes,
      textStyles,
    },
  }),
);
