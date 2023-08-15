import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const api_key = process.env.NEXT_PUBLIC_API_KEY;
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const fetchMovie = async (movieId: number) => {
    const { data: movie } = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}`);
    return movie;
};
const fetchMovieCast = async (movieId: number) => {
    const { data: casts } = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${api_key}`);
    return casts.cast;
};

const fetchRecMovie = async (movieId: number) => {
    const { data: recommendation } = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${api_key}`
    );
    console.log('recommendation =>', recommendation);
    return recommendation;
};

const fetchSimilarMovie = async (movieId: number) => {
    const { data: similar } = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${api_key}`
    );
    console.log('similar =>', similar);
    return similar;
};

const fetchVideo = async (movieId: number) => {
    const { data: videos } = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${api_key}`);
    console.log('videos =>', videos);
    return videos;
};

const fetchGenres = async () => {
    const { data: genres } = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}&language=en-US`
    );
    return genres.results;
};

const fetchGenre = async (genreId: number) => {
    const { data: genre } = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=${genreId}`
    );
    return genre;
};

const fetchSearchMovie = async (query: string) => {
    const { data : searchResult} = await axios.get(
        `https://api.themoviedb.org/3/search/keyword?api_key=${api_key}&query=${query}&page=1`
    );
    return searchResult;
};

const useMovie = (movieId: number) => {
    return useQuery({
        queryKey: ['movie', movieId],
        queryFn: () => fetchMovie(movieId),
        enabled: movieId > 0,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        keepPreviousData: true,
    });
};

const useCasts = (movieId: number) => {
    return useQuery({
        queryKey: ['casts', movieId],
        queryFn: () => fetchMovieCast(movieId),
        enabled: movieId > 0,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        keepPreviousData: true,
    });
};

const useRecommendation = (movieId: number) => {
    return useQuery({
        queryKey: ['recommendations', movieId],
        queryFn: () => fetchRecMovie(movieId),
        enabled: movieId > 0,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        keepPreviousData: true,
    });
};

const useSimilarMovies = (movieId: number) => {
    return useQuery({
        queryKey: ['similar', movieId],
        queryFn: () => fetchSimilarMovie(movieId),
        enabled: movieId > 0,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        keepPreviousData: true,
    });
};

const useVideo = (movieId: number) => {
    return useQuery({
        queryKey: ['video', movieId],
        queryFn: () => fetchVideo(movieId),
        enabled: movieId > 0,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        keepPreviousData: true,
    });
};

const useGenres = () => {
    return useQuery({
        queryKey: ['genres'],
        queryFn: () => fetchGenres(),
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        keepPreviousData: true,
    });
};

const useGenre = (genreId: number) => {
    return useQuery({
        queryKey: ['genre', genreId],
        queryFn: () => fetchGenre(genreId),
        enabled: !!genreId,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        keepPreviousData: true,
    });
};

const useSearchMovie = (query: string) => {
    return useQuery({
        queryKey: ['search', query],
        queryFn: () => fetchSearchMovie(query),
        enabled: !!query,
        refetchOnMount: true,
        refetchOnWindowFocus: true,
        keepPreviousData: true,
    });
}

export {
    useVideo,
    useMovie,
    fetchMovie,
    useCasts,
    fetchMovieCast,
    useSimilarMovies,
    useRecommendation,
    fetchGenres,
    useGenres,
    fetchGenre,
    useGenre,
    fetchSearchMovie,
    useSearchMovie,
};
