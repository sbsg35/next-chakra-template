import { ComponentStyleConfig } from "@chakra-ui/react";
import { StyleFunctionProps } from "@chakra-ui/theme-tools";
import { Dict } from "@chakra-ui/utils";

const HeadingStyle: ComponentStyleConfig = {
  baseStyle: (_: Dict<any> | StyleFunctionProps) => ({
    color: "gray.700",
    fontWeight: "500",
  }),
};

export default HeadingStyle;
