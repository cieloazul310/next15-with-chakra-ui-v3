import type { PropsWithChildren } from "react";
import { Box, Container } from "@chakra-ui/react";
import MainLayout from "@/components/layout/main";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <MainLayout>
      <article>
        <Box
          width="full"
          height="240px"
          bgGradient="to-br"
          gradientFrom="colorPalette.muted/10"
          gradientVia="bg.muted"
          gradientTo="colorPalette.muted/10"
          asChild
        >
          <header />
        </Box>
        <Container maxWidth="breakpoint-md">{children}</Container>
      </article>
    </MainLayout>
  );
}
