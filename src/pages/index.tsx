import Layout from '@/components/layout/Layout';
import Card from '@/container/Card';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import {
    fetchMovies,
    fetchUpCompingMovies,
    fetchTopRatedMovies,
    fetchNowPlayingMovies,
    useMovies,
} from '@/hooks/useMovies';
import SecCard from '@/container/SecCard';
import Head from 'next/head';
import Slides from '@/components/slide/Slides';

export default function Home({ movies, top_rated, up_coming }: any) {
    const types = [{ movies, top_rated, up_coming }];
    return (
        <div className=''>
            <Head>
                <title>TWING</title>
            </Head>
            <Layout>
                <Slides movies={up_coming.results} type='Popular 🌟' />

                <div className='flex flex-col gap-2'>
                    <Card movies={movies.results} title='Popular' />
                    <SecCard movies={top_rated.results} title='Top Rated' />
                    <Card movies={up_coming.results} title='Up Coming' />
                    <SecCard movies={top_rated.results.slice(10, 20)} title='Top Rated' />
                    <Card movies={up_coming.results.slice(10, 20)} title='Up Coming' />
                </div>
            </Layout>
        </div>
    );
}

export async function getStaticProps() {
    const queryClient = new QueryClient();

    // Parallel requests
    await Promise.all([
        queryClient.prefetchQuery({
            queryKey: ['popular'],
            queryFn: () => fetchMovies(),
        }),
        queryClient.prefetchQuery({
            queryKey: ['top_rated'],
            queryFn: () => fetchTopRatedMovies(),
        }),
        queryClient.prefetchQuery({
            queryKey: ['up_coming'],
            queryFn: () => fetchUpCompingMovies(),
        }),
        queryClient.prefetchQuery({
            queryKey: ['now_playing'],
            queryFn: () => fetchNowPlayingMovies(),
        }),
    ]);

    const dehydratedState = dehydrate(queryClient);

    return {
        props: {
            dehydratedState,
            movies: queryClient.getQueryData(['popular']),
            top_rated: queryClient.getQueryData(['top_rated']),
            up_coming: queryClient.getQueryData(['up_coming']),
        },
    };
}

