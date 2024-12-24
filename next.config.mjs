import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypeShiki from "@shikijs/rehype";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [
        rehypeShiki,
        {
          theme: "dark-plus",
        },
      ],
    ],
  },
});

export default withMDX(nextConfig);
