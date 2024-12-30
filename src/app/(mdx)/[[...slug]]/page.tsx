import type { MDXContent } from "mdx/types";
import { Box } from "@chakra-ui/react";
import { BreadCrumb } from "@/components/breadcrumb";
import { ArticleContainer } from "@/components/article-container";
import { PageHeader } from "@/components/page-header";

async function importMdx<P = Record<string, unknown>>(
  slug?: string[],
): Promise<{ default: MDXContent } & P> {
  const filePath = slug?.map((str) => str) ?? ["index"];
  try {
    const file = await import(`@/content/${filePath.join("/")}.mdx`);
    return file;
  } catch {
    const file = await import(
      `@/content/${[...filePath, "index"].join("/")}.mdx`
    );
    return file;
  }
}

export function generateStaticParams() {
  return [
    { slug: undefined },
    { slug: ["about"] },
    { slug: ["feature"] },
    { slug: ["feature", "chakra"] },
    { slug: ["feature", "mdx"] },
  ];
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;
  const { default: Post, metadata } = await importMdx<{
    metadata?: { title: string; description: string };
  }>(slug);

  return (
    <>
      <Box px="md" py="sm">
        <BreadCrumb slug={slug} />
      </Box>
      <ArticleContainer asChild>
        <article>
          {metadata?.title && <PageHeader title={metadata.title} />}
          <Post />
        </article>
      </ArticleContainer>
    </>
  );
}
