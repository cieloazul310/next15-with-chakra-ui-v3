import { Heading, Text, Box } from "@chakra-ui/react";
import type { MDXComponents } from "mdx/types";
import type { PropsWithChildren, PropsWithoutRef } from "react";
import { Blockquote } from "@/components/ui/blockquote";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: (props) => <Heading as="h1" size="4xl" mt="xl" mb="md" {...props} />,
    h2: (props) => <Heading as="h2" size="2xl" mt="xl" mb="md" {...props} />,
    h3: (props) => <Heading as="h3" size="xl" mt="xl" mb="md" {...props} />,
    h4: (props) => (
      <Heading
        as="h4"
        size={{ base: "lg", sm: "xl" }}
        mt="lg"
        mb="md"
        {...props}
      />
    ),
    h5: (props) => (
      <Heading
        as="h5"
        size={{ base: "md", sm: "lg" }}
        mt="lg"
        mb="md"
        {...props}
      />
    ),
    h6: (props) => <Heading as="h6" size="md" my="md" {...props} />,
    p: (props) => <Text my="md" {...props} />,
    pre: (props) => (
      <Box as="pre" p="md" rounded="md" my="lg" bg={{ base: "colorPalette.50", _dark: "bg.muted" }} overflowX="scroll" {...props} />
    ),
    code: (props) => (
      <Text as="code" fontFamily="mono" fontSize="sm" {...props} />
    ),
    blockquote: (props: PropsWithoutRef<PropsWithChildren>) => (
      <Blockquote my="lg" {...props} />
    ),
  };
}
