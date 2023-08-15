//@ts-nocheck
import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query';
import React from 'react';
import { fetchTvShows } from './api/fetchTvShows';
import Layout from '@/components/layout/Layout';

import axios from 'axios';
import Card from '@/container/Card';
import { API_KEY } from '@/utils/URI';
import Slides from '@/components/slide/Slides';

const baseUrl = 'https://api.themoviedb.org/3';

const tvShowsUrl = `${baseUrl}/tv/top_rated?api_key=${API_KEY}`;
const tvShowsUrlPopular = `${baseUrl}/tv/popular?api_key=${API_KEY}`;
const tvShowsUrlLatest = `${baseUrl}/tv/latest?api_key=${API_KEY}`;

type Props = {};

const Tv = ({ tvShows, tvShowsPopular, latestShows }: any) => {
    const name = tvShows.results.name;
    
    return (
        <Layout>
            <div className='bg-black'>
                <Slides movies={tvShows.results} />
                <Card movies={[...tvShows.results.slice(0, 10), { title: name }]} title='Top Rated TV Shows 🌟' />
                <Card movies={tvShowsPopular.results} title='Popular TV shows 🔥' />
                <Card movies={[...tvShows.results.slice(10, 20), { title: name }]} title='Top Rated TV Shows 🌟' />
            </div>
        </Layout>
    );
};

export async function getStaticProps() {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery('tv', async () => await fetchTvShows());

    const top_rated = await axios(tvShowsUrl);
    const tvShows = top_rated.data;

    const popular = await axios(tvShowsUrlPopular);
    const tvShowsPopular = popular.data;

    const latest = await axios(tvShowsUrlLatest);
    const latestShows = latest.data;
    return {
        props: {
            dehydratedState: dehydrate(queryClient),
            tvShows,
            tvShowsPopular,
            latestShows,
        },
    };
}

export default Tv;
