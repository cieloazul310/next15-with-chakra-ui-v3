import type { PropsWithChildren } from "react";
import { MainLayout } from "@/components/layout/main";
import { ArticleContainer } from "@/components/article-container";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <MainLayout>
      <article>
        <ArticleContainer>{children}</ArticleContainer>
      </article>
    </MainLayout>
  );
}
