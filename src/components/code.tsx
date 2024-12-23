import { chakra } from "@chakra-ui/react";
import type { HTMLAttributes } from "react";

export type CodeProps = HTMLAttributes<"code">;

export function Code(props: CodeProps) {
  return <chakra.code fontFamily="mono" {...props} />
}
/*
export const Code = chakra("code", {
  base: {
    fontFamily: "mono",
    borderRadius: "l2",
    ":not(pre) > &": {
      color: { base: "colorPalette.800", _dark: "colorPalette.400" },
      bg: "colorPalette.600/8",
      px: 1,
      rounded: "md",
    },
  },
});
*/
