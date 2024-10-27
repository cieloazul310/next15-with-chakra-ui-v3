import type { PropsWithChildren } from "react";
import { Box, Container } from "@chakra-ui/react";
import Header from "./header";
import Menu from "./menu";
import Drawer from "./drawer";

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <Box display="flex">
        <Box
          width="280px"
          borderRightWidth="1px"
          borderRightColor="gray.solid"
          display={{ base: "none", md: "block" }}
          pt="lg"
        >
          <Menu />
        </Box>
        <Box flexGrow={1} pt="lg" asChild>
          <main>
            <Container maxWidth="breakpoint-md">{children}</Container>
          </main>
        </Box>
      </Box>
      <Drawer />
    </>
  );
}
