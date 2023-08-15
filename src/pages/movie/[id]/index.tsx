import { useRouter } from 'next/router';
import Image from 'next/image';
import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs';
import {HiOutlinePause } from 'react-icons/hi';
import { RxShare2 } from 'react-icons/rx';
import { BiPlay } from 'react-icons/bi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
const emptyMovie = '/1.webp';
import Link from 'next/link';
import Card from '@/container/Card';
import Layout from '@/components/layout/Layout';
import { fetchMovie, useCasts, useMovie, useRecommendation, useSimilarMovies, useVideo } from '@/hooks/useMovie';
import CastCard, { ICastCard } from '@/components/cast/CastCard';
import ReactPlayer from 'react-player/youtube';
import { useEffect, useState } from 'react';
import SecCard from '@/container/SecCard';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import LikeButton from '@/components/button/HeartButton';

export interface IMovieCard {
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
}

interface IParamsMovieDetails {
    params: {
        id: IMovieCard['id'];
    };
}

const Movie = ({ movieId }: { movieId: number }) => {
    const [playTrailer, setPlayTrailer] = useState<boolean>(false);
    const [showMore, setShowMore] = useState<boolean>(false);
    const [isMobile, setIsMobile] = useState<boolean>(true);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [liked, setLiked] = useState<boolean>(false);
    const router = useRouter();

    const { isSuccess, data: movie, isError, isLoading } = useMovie(movieId);

    const { data: movieCast, isFetching } = useCasts(movieId);

    const { data: recommendations } = useRecommendation(movieId);

    const { data: similarMovies } = useSimilarMovies(movieId);

    const { data: trailer, error } = useVideo(movieId);

    console.log('trailer results ', trailer?.results[1]?.key);

    const durationHours = Math.round(movie?.runtime / 60);
    const durationMinutes = Math.round(movie?.runtime % 60);

    const imagePath = 'https://image.tmdb.org/t/p/original';

    const handlePlayTrailer = () => {
        setPlayTrailer(!playTrailer);
    };

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    const handleModalOpen = () => {
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMobile(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (isSuccess) {
        return (
            <>
                <Layout>
                    <div
                        className='min-h-full bg-contain bg-center bg-no-repeat sm:bg-cover overflow-x-hidden'
                        style={{ backgroundImage: `url(${imagePath + movie.backdrop_path})` }}
                    >
                        <div className='p-4 sm:p-8 md:p-16 backdrop-blur-3xl bg-black bg-opacity-60'>
                            <div className='flex xl/lg:flex-row md:flex-row  md:gap-0 xs/sm:flex-col-reverse justify-between flex-grow items-center sm:pb-16'>
                                {/* <div className='flex flex-col text-white select-none mb-8 sm:mb-0 pt-8 sm:px-0 sm:pr-12'> */}
                                <div className='flex-grow-0 flex-shrink-0 w-full xl:w-1/3 lg:w-1/3 md:w-1/3 xs:w-full sm:w-full text-white select-none mb-8 sm:mb-0 pt-8 sm:px-0 sm:pr-12 '>
                                    <h2 className='text-4xl md:text-xl xs:text-lg font-sans font-bold'>
                                        {movie.title}
                                    </h2>
                                    <div className='flex flex-row sm/xs:flex-row py-2 sm:py-4 gap-2 text-sm sm:text-base'>
                                        <h1 className='border-2 rounded-sm border-zinc-100 p-0.5'>
                                            {movie.release_date}
                                        </h1>
                                        <h2 className='border-2 rounded-sm border-zinc-100 p-0.5'>
                                            {movie.runtime} min
                                        </h2>
                                        <h2 className='border-2 bg-green-500 rounded-sm border-zinc-100 p-1'>
                                            Rate: {movie.vote_average}
                                        </h2>
                                    </div>

                                    {/* the react player*/}
                                    <div
                                        className={` w-full h-full flex items-center justify-center z-50 ${
                                            playTrailer ? '' : 'hidden'
                                        }`}
                                    >
                                        <div className={`relative  z-50 ${isMobile ? ' py-4' : ''}`}>
                                            {playTrailer && trailer.results && (
                                                <div className=''>
                                                    <ReactPlayer
                                                        className={`${isMobile ? '' : 'absolute top-0 left-0 z-1'}`}
                                                        playing
                                                        controls
                                                        // width='720px'
                                                        // height='480px'
                                                        style={{ width: '100%', height: '100%' }}
                                                        url={`https://www.youtube.com/watch?v=${trailer?.results[1]?.key}`}
                                                    />
                                                </div>
                                            )}
                                            {playTrailer && (
                                                <div
                                                    className='ml-3  bg-gray-200 rounded-full cursor-pointer top-3 -right-16 absolute'
                                                    onClick={() => setPlayTrailer(false)}
                                                >
                                                    <AiOutlineCloseCircle className='w-12 h-12 text-red-700' />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    {/* play and button */}
                                    <div className='flex justify-between'>
                                        <div
                                            className={`flex ${
                                                isMobile
                                                    ? 'flex-row gap-32 items-center justify-between'
                                                    : 'flex-col justify-start'
                                            } sm:flex-row  sm:justify-between gap-4 items-center`}
                                        >
                                            <button
                                                onClick={() => handlePlayTrailer()}
                                                className='hover:font-bold flex items-center gap-1 hover:scale-105 hover:transition duration-300 ease-in-out bg-gray-200 font-bold text-black my-2 py-2 sm:py-4 px-6 sm:px-8 rounded-sm'
                                            >
                                                <span className=''>
                                                    {playTrailer ? (
                                                        <HiOutlinePause size={30} />
                                                    ): (

                                                    <BiPlay size={30} />
                                                    )}
                                                </span>{' '}
                                                <p>
                                                    {playTrailer ? 'CLOSE' : 'PLAY'}
                                                </p>
                                            </button>
                                            <div className='flex gap-4 items-center'>
                                                <div className='flex flex-col text-center'>
                                                    {liked ? (
                                                        <BsSuitHeartFill size={35} onClick={() => setLiked(false)} />
                                                    ) : (
                                                        <BsSuitHeart size={35} onClick={() => setLiked(true)} />
                                                    )}
                                                    <span className=''>찜</span>
                                                </div>
                                                <div className='flex flex-col text-center'>
                                                    <RxShare2 size={40} />
                                                    <span className=''>공요</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className='mt-5 text-gray-300 text-lg'>
                                        Genres:{' '}
                                        <span className='font-bold'>
                                            {movie.genres.map((genre: any) => genre.name).join(' | ')}
                                        </span>
                                    </p>
                                    <p className='text-lg mt-8 sm:mt-12 max-w-md'>
                                        {showMore ? movie.overview : movie?.overview?.substring(0, 190) + '...'}
                                    </p>
                                    {movie?.overview?.length > 190 && (
                                        <div className='mt-2'>
                                            <button className='text-blue-500' onClick={toggleShowMore}>
                                                {showMore ? 'Show Less' : 'Show More'}
                                            </button>
                                        </div>
                                    )}
                                    <div className='mt-8'>
                                        <button
                                            className='bg-white text-black px-6 py-2 sm:px-12 sm:-mb-4 font-extrabold rounded-sm'
                                            onClick={() => router.push('/')}
                                        >
                                            Back
                                        </button>
                                    </div>
                                </div>
                                <div
                                    className={`flex-grow flex-shrink-0 ${
                                        isMobile ? 'w-full mr-12' : ''
                                    } w-full md:w-1/2 xl:w-2/3 lg:w-2/3 xs:w-full sm:w-full ml-12`}
                                >
                                    <Image
                                        src={movie?.backdrop_path ? imagePath + movie.backdrop_path : emptyMovie}
                                        alt={movie.title}
                                        width={720}
                                        height={480}
                                        priority
                                        // layout='responsive'
                                        className='my-12 rounded-lg drop-shadow-2xl shadow-gray-100 items-end sm:ml-16'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Top Casts */}
                    <div className='flex w-full max-w-full px-4 mx-auto bg-black overflow-x-auto'>
                        <div className='flex flex-col mb-6'>
                            <div className='flex justify-between items-center mt-4'>
                                <h1 className='text-2xl text-white font-medium'>Top Cast</h1>
                                <Link
                                    href={`/movie/${movie.id}/casts`}
                                    className='py-2 px-5 text-md font-normal text-white'
                                >
                                    See All
                                </Link>
                            </div>

                            <div className='flex mt-4 gap-4'>
                                {movieCast?.slice(0, 10).map((cast: ICastCard) => (
                                    <CastCard cast={cast} key={cast?.id} />
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Top recommendations */}
                    <div className='pb-6 pt-6 bg-black'>
                        <div className='flex flex-col'>
                            <Card
                                movies={recommendations?.results}
                                key={recommendations?.results.id}
                                title='Top Recommendations'
                            />
                        </div>
                    </div>

                    {/*    Similar movies */}
                    <div className='pb-6 pt-6 bg-black'>
                        <div className='flex flex-col'>
                            <SecCard
                                movies={similarMovies?.results}
                                key={similarMovies?.results.id}
                                title='Top Similar Movies '
                            />
                        </div>
                    </div>
                </Layout>
            </>
        );
    }

    if (isLoading) {
        return <h1>Loading... </h1>;
    }

    if (isError) {
        return <h1>Error 🥲</h1>;
    }
};
export default Movie;

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    const movieId = parseInt(context.params?.id as string);
    console.log('context', context.params);
    console.log('genre id => in SSR  ', movieId);
    const queryClient = new QueryClient();
    if (movieId) {
        await queryClient.prefetchQuery(['movie', movieId], () => fetchMovie(movieId));
    }
    return {
        props: {
            dehydratedState: dehydrate(queryClient),
            movieId,
        },
    };
};
