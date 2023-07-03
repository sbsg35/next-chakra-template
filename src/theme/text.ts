import { StyleFunctionProps } from "@chakra-ui/theme-tools";
import { Dict } from "@chakra-ui/utils";

const TextStyle = {
  baseStyle: (_: Dict<any> | StyleFunctionProps) => ({
    fontSize: "lg",
    color: "gray.800",
  }),
};

export default TextStyle;
