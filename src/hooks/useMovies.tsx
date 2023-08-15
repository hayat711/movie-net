import axios from 'axios';
import { popularMoviesUrl, topRatedUrl, upComingUrl, latestUrl, nowPlayingUrl } from '../utils/URI';
import { useQuery } from '@tanstack/react-query';

const fetchMovies = async (): Promise<any[]> => {
    const { data: movies } = await axios.get(`${popularMoviesUrl}`);
    return movies;
};

const fetchTopRatedMovies = async (): Promise<any[]> => {
    const { data } = await axios.get(`${topRatedUrl}`);
    return data;
};

const fetchUpCompingMovies = async (): Promise<any[]> => {
    const { data } = await axios.get(`${upComingUrl}`);
    return data;
};

const fetchLatestMovies = async (): Promise<any[]> => {
    const { data } = await axios.get(`${latestUrl}`);
    return data;
};

const fetchNowPlayingMovies = async (): Promise<any[]> => {
    const { data } = await axios.get(`${nowPlayingUrl}`);
    return data;
};

const useMovies = () => {
    return useQuery({ queryKey: ['movies'], queryFn:() => fetchMovies() });
};

export { useMovies, fetchMovies, fetchLatestMovies, fetchTopRatedMovies, fetchNowPlayingMovies, fetchUpCompingMovies };

