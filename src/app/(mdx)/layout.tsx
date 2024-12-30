import type { PropsWithChildren } from "react";
import { MainLayout } from "@/components/layout/main";

export default function Layout({ children }: PropsWithChildren) {
  return <MainLayout>{children}</MainLayout>;
}
