import type { PropsWithChildren } from "react";
import { Box } from "@chakra-ui/react";
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
          py="lg"
          position="sticky"
          top="token(sizes.header-height)"
          overflowY="auto"
          flexShrink={0}
        >
          <Menu />
        </Box>
        <Box flexGrow={1} overflowX="hidden" asChild>
          <main>{children}</main>
        </Box>
      </Box>
      <Drawer />
    </>
  );
}
