import { Box, Flex, Heading, Spacer, For } from "@chakra-ui/react";
import NextLink from "next/link";
import { Button } from "@/components/ui/button";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { ColorModeButton } from "@/components/ui/color-mode";
import { menu, isMenuGroup, type MenuItem as MenuItemType } from "@/utils/menu";

function renderMenuItem({ title, href }: MenuItemType) {
  return (
    <MenuItem asChild value={title} key={title}>
      <NextLink href={href}>{title}</NextLink>
    </MenuItem>
  );
}

export default function Header() {
  return (
    <Flex
      asChild
      height="header-height"
      alignItems="center"
      bgGradient="to-r"
      gradientFrom="bg.panel/80"
      gradientTo={{ base: "colorPalette.50/80", _dark: "colorPalette.950/80" }}
      backdropFilter="blur(4px)"
      borderBottomWidth="1px"
      borderBottomColor="colorPalette.subtle"
      position="sticky"
      zIndex="sticky"
      top={0}
      right={0}
      px={{ base: "md", md: "lg" }}
      width="full"
      gap="md"
    >
      <header>
        <Heading
          as="h1"
          _hover={{ color: "colorPalette.solid", textDecoration: "underline" }}
        >
          <NextLink href="/">Next.js + Chakra UI</NextLink>
        </Heading>
        <Box display={{ base: "none", md: "block" }}>
          <For each={menu}>
            {(item) => {
              if (isMenuGroup(item)) {
                return (
                  <MenuRoot key={item.title}>
                    <MenuTrigger asChild>
                      <Button variant="plain">{item.title}</Button>
                    </MenuTrigger>
                    <MenuContent>
                      <For each={item.items}>{renderMenuItem}</For>
                    </MenuContent>
                  </MenuRoot>
                );
              }
              return renderMenuItem(item);
            }}
          </For>
        </Box>
        <Spacer />
        <ColorModeButton />
      </header>
    </Flex>
  );
}
