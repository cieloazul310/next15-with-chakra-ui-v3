import { defineTokens } from "@chakra-ui/react";

export default defineTokens({
  sizes: {
    "header-height": { value: "56px" },
    "content-max-width": { value: "1280px" },
    "sidebar-width": { value: "320px" },
  },
  /**
   * https://www.chakra-ui.com/guides/theming-add-custom-font-to-nextjs
   */
  fonts: {
    heading: { value: "var(--font-noto-sans)" },
    body: { value: "var(--font-noto-sans)" },
  },
});
