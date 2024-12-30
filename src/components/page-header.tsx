import { Flex, Heading } from "@chakra-ui/react";

export type PageHeaderProps = {
  title: string;
};

export function PageHeader({ title }: PageHeaderProps) {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      gap="sm"
      minHeight="180px"
      asChild
    >
      <header>
        <Heading as="h1" size="3xl">
          {title}
        </Heading>
      </header>
    </Flex>
  );
}
