import { Head, Html, Main, NextScript } from "next/document";

import { theme } from "@/theme";
import { ColorModeScript } from "@chakra-ui/react";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
