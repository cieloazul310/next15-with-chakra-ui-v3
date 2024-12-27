import type { PropsWithChildren, ReactNode } from "react";
import { Box } from "@chakra-ui/react";
import { Footer } from "./footer";
import Menu from "./menu";

export type MainLayoutProps = PropsWithChildren<{
  sidebarContents?: ReactNode;
}>;

export function MainLayout({ children, sidebarContents }: MainLayoutProps) {
  return (
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
        {sidebarContents}
        <Menu />
      </Box>
      <Box flexGrow={1} overflowX="hidden" asChild>
        <main>
          {children}
          <Footer />
        </main>
      </Box>
    </Box>
  );
}
