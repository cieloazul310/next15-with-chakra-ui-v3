import { defineMenu } from "@/utils/menu";

export const menu = defineMenu([
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Feature",
    href: "/feature",
    items: [
      {
        title: "Chakra UI",
        href: "/feature/chakra",
      },
      {
        title: "MDX",
        href: "/feature/mdx",
      },
    ],
  },
]);
