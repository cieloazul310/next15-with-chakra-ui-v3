import NextLink from "next/link";
import { IconButton } from "@chakra-ui/react";
import { LuMenu } from "react-icons/lu";
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { ColorModeButton } from "@/components/ui/color-mode";
import { siteMetadata } from "@/data/site-metadata";
import Menu from "./menu";

export default function Drawer() {
  return (
    <DrawerRoot placement="bottom">
      <DrawerBackdrop />
      <DrawerTrigger asChild>
        <IconButton
          position="fixed"
          colorPalette="colorPalette"
          display={{ base: undefined, md: "none" }}
          bottom={4}
          right={4}
          shadow="lg"
          size="xl"
          aria-label="Open Drawer"
        >
          <LuMenu />
        </IconButton>
      </DrawerTrigger>
      <DrawerContent roundedTop="l3" maxHeight={{ base: "60vh", sm: "80vh" }}>
        <DrawerCloseTrigger />
        <DrawerHeader>
          <DrawerTitle asChild>
            <NextLink href="/">{siteMetadata.title}</NextLink>
          </DrawerTitle>
        </DrawerHeader>
        <DrawerBody>
          <Menu />
        </DrawerBody>
        <DrawerFooter>
          <ColorModeButton />
          <Button asChild>
            <NextLink href="/">Top</NextLink>
          </Button>
          <DrawerTrigger asChild>
            <Button variant="outline">Close</Button>
          </DrawerTrigger>
        </DrawerFooter>
      </DrawerContent>
    </DrawerRoot>
  );
}
