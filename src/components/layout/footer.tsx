import { Flex, Center, Heading, Text } from "@chakra-ui/react";
import { siteMetadata } from "@/data/site-metadata";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <Center bg="bg.muted" minHeight="160px" py="lg" asChild>
      <footer>
        <Flex gap="sm" direction="column" alignItems="center" asChild>
          <hgroup>
            <Heading as="h2" size="sm">
              {siteMetadata.title}
            </Heading>
            <Text fontSize="xs">
              © {year} {siteMetadata.title} All rights reserved.
            </Text>
          </hgroup>
        </Flex>
      </footer>
    </Center>
  );
}
