import { Heading } from "@chakra-ui/react";
import MainLayout from "@/components/layout/main";

export default function Home() {
  return (
    <MainLayout>
      <Heading as="h1" size="4xl">
        雨にも負けず、風にも負けず
      </Heading>
    </MainLayout>
  );
}
