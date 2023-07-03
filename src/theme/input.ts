import { ComponentStyleConfig } from "@chakra-ui/react";

// Useful link to other parts of this component
const InputStyle: ComponentStyleConfig = {
  variants: {
    outline: {
      field: {
        borderWidth: "2.5px",
      },
    },
  },
  defaultProps: {
    variant: "outline",
  },
};
export default InputStyle;
