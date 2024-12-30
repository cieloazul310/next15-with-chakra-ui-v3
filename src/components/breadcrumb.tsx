import NextLink from "next/link";
import {
  BreadcrumbCurrentLink,
  BreadcrumbLink,
  BreadcrumbRoot,
} from "@/components/ui/breadcrumb";

function firstLetterToUpperCase(str: string) {
  return `${str.slice(0, 1).toUpperCase()}${str.slice(1).toLowerCase()}`;
}

export type BreadCrumbProps = {
  slug?: string[];
};

export function BreadCrumb({ slug }: BreadCrumbProps) {
  if (!slug)
    return (
      <BreadcrumbRoot>
        <BreadcrumbCurrentLink>Home</BreadcrumbCurrentLink>
      </BreadcrumbRoot>
    );

  const bread = slug.slice(0, -1);
  const current = slug[slug.length - 1];

  return (
    <BreadcrumbRoot>
      <BreadcrumbLink asChild>
        <NextLink href="/">Home</NextLink>
      </BreadcrumbLink>
      {bread.map((path, index) => (
        <BreadcrumbLink key={`${path}${index}`} asChild>
          <NextLink href={`/${bread.slice(0, index + 1).join("/")}`}>
            {firstLetterToUpperCase(path)}
          </NextLink>
        </BreadcrumbLink>
      ))}
      <BreadcrumbCurrentLink>
        {firstLetterToUpperCase(current)}
      </BreadcrumbCurrentLink>
    </BreadcrumbRoot>
  );
}
