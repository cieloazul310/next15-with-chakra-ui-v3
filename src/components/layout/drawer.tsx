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
import Menu from "./menu";

export default function Drawer() {
  return (
    <DrawerRoot placement="bottom">
      <DrawerBackdrop />
      <DrawerTrigger asChild>
        <IconButton
          position="fixed"
          colorPalette="teal"
          display={{ base: undefined, md: "none" }} 
          bottom={4}
          right={4}
          shadow="xl"
          size="xl"
          aria-label="Open Drawer"
        >
          <LuMenu />
        </IconButton>
      </DrawerTrigger>
      <DrawerContent roundedTop="l3">
        <DrawerCloseTrigger />
        <DrawerHeader>
          <DrawerTitle asChild>
            <NextLink href="/">Next.js v15 + Chakra UI v3</NextLink>
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
