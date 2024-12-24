import { useMDXComponents } from "@/mdx-components";
import { Container } from "@chakra-ui/react";
import { MDXProvider } from "@mdx-js/react";
import type { Meta, StoryObj } from "@storybook/react";
import Page from "@/app/(mdx)/page.mdx";

const meta: Meta = {
  title: "components/mdx",
  render: () => {
    const components = useMDXComponents({});
    return (
      <Container maxWidth="xl">
        <MDXProvider components={components}>
          <Page />
        </MDXProvider>
      </Container>
    );
  },
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {};
