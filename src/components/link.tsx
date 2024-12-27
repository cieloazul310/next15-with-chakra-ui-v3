import NextLink from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { Link as ChakraLink } from "@chakra-ui/react";
import { isInternal } from "@/utils/isInternal";
import { RiExternalLinkLine } from "react-icons/ri";

export function Link({
  children,
  href,
  ...props
}: ComponentPropsWithoutRef<"a">) {
  const internal = isInternal(href);

  if (href && internal) {
    return (
      <ChakraLink asChild>
        <NextLink href={href} {...props}>
          {children}
        </NextLink>
      </ChakraLink>
    );
  }
  return (
    <ChakraLink wordBreak="break-all" asChild {...props}>
      <a href={href} target="_blank" rel="noreffer noopener">
        {children}
        <RiExternalLinkLine />
      </a>
    </ChakraLink>
  );
}
