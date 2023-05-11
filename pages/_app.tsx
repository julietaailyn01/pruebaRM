import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


function App({Component, pageProps}: AppProps) {
    const queryClient = new QueryClient();
    
    return(
        <QueryClientProvider client={queryClient}>
          <ChakraProvider>
              <Component {...pageProps} />
          </ChakraProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}

export default App;