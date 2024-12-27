import type { PropsWithChildren } from "react";
import { Container } from "@chakra-ui/react";
import { MainLayout } from "@/components/layout/main";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <MainLayout>
      <article>
        <Container
          maxWidth="breakpoint-md"
          minHeight="calc(100vh - token(sizes.header-height))"
          py="lg"
          css={{}}
        >
          {children}
        </Container>
      </article>
    </MainLayout>
  );
}
