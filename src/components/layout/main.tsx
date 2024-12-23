import type { PropsWithChildren } from "react";
import { Box, Container } from "@chakra-ui/react";
import Header from "./header";
import Menu from "./menu";
import Drawer from "./drawer";

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <Box display="flex" bg="bg.subtle">
        <Box
          width="sidebar-width"
          bg="colorPalette.subtle/10"
          maxHeight="calc(100vh - token(sizes.header-height))"
          borderRightWidth="1px"
          borderRightColor="colorPalette.subtle"
          display={{ base: "none", md: "block" }}
          pt="lg"
          position="sticky"
          top="token(sizes.header-height)"
          overflowY="auto"
        >
          <Menu />
        </Box>
        <Box flexGrow={1} overflowX="hidden">
          <Container maxWidth="breakpoint-md" asChild>
            <main>{children}</main>
          </Container>
        </Box>
      </Box>
      <Drawer />
    </>
  );
}
