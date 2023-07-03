import { extendTheme, withDefaultColorScheme, withDefaultSize } from "@chakra-ui/react";

import FormLabel from "./formlabel";
import Heading from "./heading";
import Input from "./input";
import Text from "./text";
import Textarea from "./textarea";

export const theme = extendTheme(
  { components: { Input, Textarea, Text, FormLabel, Heading } },
  withDefaultColorScheme({ colorScheme: "green", components: ["Button"] }),
  withDefaultSize({
    size: "lg",
    components: ["Text"],
  })
);
