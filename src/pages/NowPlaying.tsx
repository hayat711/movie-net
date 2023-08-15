//@ts-nocheck
import { fetchNowPlayingMovies } from '@/hooks';
import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query';
import React from 'react';
import Card from '@/container/Card';
import Layout from '@/components/layout/Layout';
import SecCard from "@/container/SecCard";
import Slides from '@/components/slide/Slides';
import Head from 'next/head';

type Props = {};


const NowPlaying = ({ movies }: any) => {

    const secondHalf = movies.results.slice(10, 20); 
    return (
        <>
        <Head>
            <title>Now Playing</title>
        </Head>
        <Layout>
            <div className='bg-black'>
                <Slides movies={movies.results} type='Now playing ⏯️' />
                <Card movies={movies.results.slice(0, 10)} title='Now Playing' />
                <SecCard movies={secondHalf} title='Now Playing ⏯️' />
            </div>
        </Layout>
        </>
    );
};

export async function getStaticProps() {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ['now_playing'],
        queryFn: () => fetchNowPlayingMovies(),
    });

    

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
            movies: queryClient.getQueryData(['now_playing']),
        },
    };
}

export default NowPlaying;
