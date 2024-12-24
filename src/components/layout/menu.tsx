import NextLink from "next/link";
import { VStack, Heading, For } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import { menu, isMenuGroup, type MenuItem } from "@/utils/menu";

function renderMenuItem({ title, href }: MenuItem) {
  return (
    <Button
      variant="plain"
      width="full"
      colorPalette="colorPalette"
      size="md"
      key={title}
      asChild
    >
      <NextLink href={href}>{title}</NextLink>
    </Button>
  );
}

export default function Menu() {
  return (
    <VStack gap="md">
      <For each={menu}>
        {(item) => {
          if (isMenuGroup(item)) {
            return (
              <VStack gap="sm">
                <Heading as="h3" size="lg">
                  {item.title}
                </Heading>
                <For each={item.items}>{renderMenuItem}</For>
              </VStack>
            );
          }
          return renderMenuItem(item);
        }}
      </For>
    </VStack>
  );
}
