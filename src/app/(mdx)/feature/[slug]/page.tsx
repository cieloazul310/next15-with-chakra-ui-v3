export function generateStaticParams() {
  return [{ slug: "chakra" }, { slug: "mdx" }];
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post } = await import(`@/content/feature/${slug}.mdx`);

  return <Post />;
}
