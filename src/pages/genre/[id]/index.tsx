import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import Layout from '@/components/layout/Layout';
import Card from '@/container/Card';
import { useRouter } from 'next/router';
import { fetchGenre, useGenre } from '@/hooks/useMovie';
import { GetServerSideProps, GetServerSidePropsContext, } from 'next';
import Slides from '@/components/slide/Slides';
import LoadingCard from '@/components/loading/LoadingCard';
import Head from 'next/head';
import SecCard from '@/container/SecCard';

export default function Genre({ genreId }: { genreId: number }) {
    const router = useRouter();
    console.log('router ', router.query);
    const { name } = router.query;

    const { isSuccess, data: genre, isError, isLoading } = useGenre(genreId);
    if (isLoading) return <LoadingCard size={40} />;

    return (
        <>
            <Head>
                <title>Genres | {name}</title>
                <meta name='description' content={genre?.description} />
            </Head>
            <Layout>
                <div className='bg-black mx-auto '>
                    <Slides movies={[...genre?.results.slice(0, 10), { title: name }]} genreName={`${name}`} />
                    <Card movies={[...genre?.results.slice(0, 10), { title: name }]} title={`Genre: ${name}`} />
                    <Card movies={[...genre?.results.slice(6, 12), { title: name }]} title={``} />
                    
                    <SecCard
                        movies={[...genre?.results.slice(12, 16), { title: name }]}
                        title={`More of ${name} genre`}
                    />
                    <Card movies={[...genre?.results.slice(16, 20), { title: name }]} title={``} />


                </div>
            </Layout>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    const genreId = parseInt(context.params?.id as string);
    console.log('context', context.params);
    console.log('genre id => in SSR  ', genreId);
    const queryClient = new QueryClient();
    if (genreId) {
        await queryClient.prefetchQuery(['genre', genreId], () => fetchGenre(genreId));
    }
    return {
        props: {
            dehydratedState: dehydrate(queryClient),
            genreId,
        },
    };
};

