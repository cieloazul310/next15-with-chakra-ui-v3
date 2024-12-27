import { Heading, Text, Box, Kbd, List, Table } from "@chakra-ui/react";
import type { MDXComponents } from "mdx/types";
import type { PropsWithChildren, PropsWithoutRef } from "react";
import { Blockquote } from "@/components/ui/blockquote";
import { Link } from "@/components/link";
import { shortcodes } from "@/components/shortcodes";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ...shortcodes,
    h1: (props) => <Heading as="h1" size="4xl" mt="xl" mb="lg" {...props} />,
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
    a: (props) => <Link {...props} />,
    ol: (props) => <List.Root as="ol" {...props} />,
    ul: (props) => <List.Root as="ul" {...props} />,
    li: (props) => <List.Item {...props} />,
    pre: (props) => (
      <Box as="pre" p="md" rounded="md" my="lg" overflowX="scroll" {...props} />
    ),
    table: (props) => (
      <Table.ScrollArea borderWidth="1px" maxW="xl" my="lg">
        <Table.Root variant="outline" stickyHeader {...props} />
      </Table.ScrollArea>
    ),
    thead: (props) => <Table.Header {...props} />,
    tbody: (props) => <Table.Body {...props} />,
    tr: (props) => <Table.Row {...props} />,
    th: (props) => <Table.ColumnHeader {...props} />,
    td: (props) => <Table.Cell {...props} />,
    code: (props) => (
      <Text as="code" fontFamily="mono" fontSize="sm" {...props} />
    ),
    blockquote: (props: PropsWithoutRef<PropsWithChildren>) => (
      <Blockquote my="lg" {...props} />
    ),
    kbd: (props) => <Kbd {...props} />,
  };
}
