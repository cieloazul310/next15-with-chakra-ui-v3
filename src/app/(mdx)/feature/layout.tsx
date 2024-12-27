import type { PropsWithChildren } from "react";
import { Box } from "@chakra-ui/react";

export default function Layout({
  children,
}: PropsWithChildren<{ params: Promise<Record<string, unknown>> }>) {
  return (
    <>
      <Box></Box>
      {children}
    </>
  );
}
