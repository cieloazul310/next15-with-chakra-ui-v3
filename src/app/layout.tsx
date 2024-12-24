import type { PropsWithChildren } from "react";
import type { Metadata } from "next";
import { Provider } from "@/providers/chakra-provider";
import { NotoSans } from "@/styles/font";
import { siteMetadata } from "@/data/site-metadata";

export const metadata: Metadata = {
  ...siteMetadata,
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ja" className={NotoSans.variable} suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
