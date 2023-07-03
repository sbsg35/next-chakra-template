import { appWithTranslation } from "next-i18next";

import { theme } from "@/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import i18nConfig from "../next-i18next.config";

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 1 } },
});

import type { AppProps } from "next/app";
function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default appWithTranslation(App, i18nConfig as any);
