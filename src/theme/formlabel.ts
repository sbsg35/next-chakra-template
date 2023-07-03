import { StyleFunctionProps } from "@chakra-ui/theme-tools";
import { Dict } from "@chakra-ui/utils";

const FormLabelStyle = {
  baseStyle: (_: Dict<any> | StyleFunctionProps) => ({
    fontSize: "lg",
    color: "gray.700",
  }),
};

export default FormLabelStyle;
