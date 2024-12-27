import type { PropsWithChildren } from "react";
import { Header } from "./header";
import { Drawer } from "./drawer";

export function RootLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
      <Drawer />
    </>
  );
}
