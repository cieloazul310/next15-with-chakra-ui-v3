import type { PropsWithChildren } from "react";
import type { Metadata } from "next";
import { RootLayout as Layout } from "@/components/layout/root";
import { Provider } from "@/providers/chakra-provider";
import { noto_sans } from "@/styles/font";
import { siteMetadata } from "@/data/site-metadata";

export const metadata: Metadata = {
  ...siteMetadata,
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ja" className={noto_sans.variable} suppressHydrationWarning>
      <body>
        <Provider>
          <Layout>{children}</Layout>
        </Provider>
      </body>
    </html>
  );
}
