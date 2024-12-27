import { Box, Flex, Heading, Spacer, For } from "@chakra-ui/react";
import NextLink from "next/link";
import { IconButton } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa6";
import { Link } from "@/components/link";
import { Button } from "@/components/ui/button";
import { ColorModeButton } from "@/components/ui/color-mode";
import { menu } from "@/data/menu";
import { siteMetadata } from "@/data/site-metadata";

export function Header() {
  return (
    <Flex
      asChild
      width="full"
      height="header-height"
      top={0}
      right={0}
      position="sticky"
      zIndex="sticky"
      alignItems="center"
      justifyContent={{ base: "center", sm: "start" }}
      bgGradient="to-r"
      gradientFrom="bg.panel/80"
      gradientTo={{ base: "colorPalette.50/80", _dark: "colorPalette.950/80" }}
      backdropFilter="blur(4px)"
      borderBottomWidth="1px"
      borderBottomColor="colorPalette.subtle"
      px={{ base: "md", md: "lg" }}
      gap="md"
    >
      <header>
        <Heading
          as="h1"
          _hover={{ color: "colorPalette.fg", textDecoration: "underline" }}
        >
          <NextLink href="/">{siteMetadata.title}</NextLink>
        </Heading>
        <Box display={{ base: "none", md: "inherit" }}>
          <For each={menu}>
            {(item) => (
              <Button variant="plain" key={item.title} asChild>
                <Link href={item.href}>{item.title}</Link>
              </Button>
            )}
          </For>
        </Box>
        <Spacer display={{ base: "none", sm: "inherit" }} />
        <Flex
          gap="xs"
          alignItems="center"
          display={{ base: "none", sm: "inherit" }}
        >
          <IconButton variant="ghost" size="sm" asChild>
            <a
              href="https://github.com/cieloazul310/next15-with-chakra-ui-v3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </IconButton>
          <ColorModeButton />
        </Flex>
      </header>
    </Flex>
  );
}
