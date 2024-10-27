"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeProvider } from "@/components/ui/color-mode";
import defaultSystem from "@/theme";

export function Provider({ children }: React.PropsWithChildren) {
  return (
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider>{children}</ColorModeProvider>
    </ChakraProvider>
  );
}
