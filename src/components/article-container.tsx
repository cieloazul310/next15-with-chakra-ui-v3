import { Container } from "@chakra-ui/react";
import type { PropsWithChildren } from "react";

export function ArticleContainer({ children }: PropsWithChildren) {
  return (
    <Container
      maxWidth="breakpoint-md"
      minHeight="calc(100vh - token(sizes.header-height))"
      py="lg"
    >
      {children}
    </Container>
  );
}
