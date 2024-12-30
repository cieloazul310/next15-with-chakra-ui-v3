import { Container, type ContainerProps } from "@chakra-ui/react";

export function ArticleContainer({
  maxWidth = "breakpoint-md",
  minHeight = "calc(100vh - token(sizes.header-height))",
  py = "lg",
  ...props
}: ContainerProps) {
  return (
    <Container maxWidth={maxWidth} minHeight={minHeight} py={py} {...props} />
  );
}
