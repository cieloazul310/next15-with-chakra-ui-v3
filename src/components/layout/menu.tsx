import { VStack, Heading, For } from "@chakra-ui/react";
import { Link } from "@/components/link";
import { Button } from "@/components/ui/button";
import { menu } from "@/data/menu";
import { isMenuGroup, type MenuItem } from "@/utils/menu";

function renderMenuItem({ title, href }: MenuItem) {
  return (
    <Button variant="plain" size="md" key={title} asChild>
      <Link href={href}>{title}</Link>
    </Button>
  );
}

export default function Menu() {
  return (
    <VStack gap="md">
      {renderMenuItem({ title: "Top", href: "/" })}
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
