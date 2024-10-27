import { Flex, Heading, Spacer, For } from "@chakra-ui/react";
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
      height="56px"
      alignItems="center"
      bg="bg.panel"
      shadow="md"
      position="sticky"
      zIndex="sticky"
      top={0}
      right={0}
      px="lg"
      width="full"
      gap="md"
    >
      <header>
        <Heading as="h1">Next.js + Chakra UI</Heading>
        <For each={menu}>
          {(item) => {
            if (isMenuGroup(item)) {
              return (
                <MenuRoot key={item.title}>
                  <MenuTrigger asChild>
                    <Button variant="plain" colorPalette="teal">
                      {item.title}
                    </Button>
                  </MenuTrigger>
                  <MenuContent colorPalette="teal">
                    <For each={item.items}>{renderMenuItem}</For>
                  </MenuContent>
                </MenuRoot>
              );
            }
            return renderMenuItem(item);
          }}
        </For>
        <Spacer />
        <ColorModeButton />
      </header>
    </Flex>
  );
}
