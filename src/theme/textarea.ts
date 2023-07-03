import { ComponentStyleConfig } from "@chakra-ui/react";

// Useful link to other parts of this component
const TextareaStyle: ComponentStyleConfig = {
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
export default TextareaStyle;
