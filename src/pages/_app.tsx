import '@/styles/globals.css';
import "@fontsource/montserrat/400.css"; // Regular 400 weight
import "@fontsource/montserrat/700.css"; // Bold 700 weight


import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider, Hydrate } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
                <Component {...pageProps} />
            </Hydrate>
            {/* <ReactQueryDevtools /> */}
        </QueryClientProvider>
    );
}
