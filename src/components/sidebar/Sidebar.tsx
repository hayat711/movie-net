import React from 'react';
import { useState, useEffect } from 'react';
import { BsFillPlayFill } from 'react-icons/bs';
import { FiCompass } from 'react-icons/fi';
import { FaFantasyFlightGames, FaHistory } from 'react-icons/fa';
import { MdStar, MdFamilyRestroom, MdLiveTv, MdMovieFilter } from 'react-icons/md';
import { IoIosFilm } from 'react-icons/io';
import {
    GiCrimeSceneTape,
    GiDramaMasks,
    GiLoveMystery,
    GiSelfLove,
    GiMaterialsScience,
    GiWarhammer,
    GiFireBomb,
} from 'react-icons/gi';
import { AiFillThunderbolt } from 'react-icons/ai';
import { FcMusic } from 'react-icons/fc';
import { useRouter } from 'next/router';
import axios from 'axios';
import { API_KEY } from '@/utils/URI';
import Link from 'next/link';

type Props = {
    isMobile?: boolean;
};

const Sidebar = ({ isMobile }: Props) => {
    const [activeGenre, setActiveGenre] = useState<any>(null);
    const router = useRouter();
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const getGenres = async () => {
            const response = await axios.get(
                `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
            );
            setGenres(response.data.genres);
        };
        getGenres();
    }, []);

    const handleGenreClick = (genre: any) => {
        setActiveGenre(genre);
        router.push(`/genre/${genre.id}?name=${encodeURIComponent(genre.name)}`);
    };

    return (
        <div>
            <div
                className={`text-white flex-shrink bg-black ${
                    isMobile ? 'w-60 bg-opacity-50 backdrop-blur-lg pt-4 ' : 'w-full pt-12'
                } rounded-md shadow-lg px-4 pb-4`}
            >
                <div className=''>
                    <ul className='flex flex-col justify-between gap-3 pl-2'>
                        <li
                            className='font-semibold text-sm md:text-lg text-white hover:font-bold md:hidden '
                            onClick={() => router.push('/NowPlaying')}
                        >
                            Now Playing
                        </li>

                        <li
                            className='font-semibold text-sm md:text-lg text-white hover:font-bold md:hidden '
                            onClick={() => router.push('/Tv')}
                        >
                            TV-Shows
                        </li>
                        <Link href={`/genre/53?name=Movie`}>
                            <li className='font-semibold text-sm md:text-lg text-white hover:font-bold md:hidden'>
                                Movie
                            </li>
                        </Link>
                    </ul>
                    <h2 className='text-white text-lg mt-4 pl-2 font-extrabold mb-4'>Genres</h2>
                    <ul className='space-y-2 p-0.5'>
                        {genres.map((genre: any) => (
                            <Link href={`/genre/${genre.id}?name=${encodeURIComponent(genre.name)}`} key={genre?.id}>
                                <li
                                    className={` flex items-center space-x-1 text-center space-y-3 ${isMobile ? 'text-md font-semibold pl-2': 'text-sm'} font-medium text-gray-300 rounded-md hover:bg-red-500 hover:scale-105  hover:text-white cursor-pointer transition-colors duration-200 ${
                                        activeGenre?.id === genre?.id ? 'bg-red-700  text-white' : ''
                                    }`}
                                    onClick={() => handleGenreClick(genre)}
                                    key={genre?.id}
                                >
                                    <div className='flex items-center gap-2 space-y-2'>
                                        <div className=' w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full p-0.5 bg-white bg-opacity-20'>
                                            {genre?.id === 28 && <BsFillPlayFill className='w-6 h-6 text-yellow-300' />}
                                            {genre?.id === 12 && <FiCompass className='w-6 h-6 text-green-300' />}
                                            {genre?.id === 16 && <IoIosFilm className='w-6 h-6 text-blue-300' />}
                                            {genre?.id === 35 && <AiFillThunderbolt className='w-6 h-6 text-red-300' />}
                                            {genre?.id === 99 && <MdStar className='w-6 h-6 text-pink-300' />}
                                            {genre?.id === 80 && <GiCrimeSceneTape className='w-6 h-6 text-red-300' />}
                                            {genre?.id === 18 && <GiDramaMasks className='w-6 h-6 text-yellow-300' />}
                                            {genre?.id === 10751 && (
                                                <MdFamilyRestroom className='w-6 h-6 text-blue-300' />
                                            )}
                                            {genre?.id === 14 && (
                                                <FaFantasyFlightGames className='w-6 h-6 text-red-300' />
                                            )}
                                            {genre?.id === 36 && <FaHistory className='w-6 h-6 text-cyan-300' />}
                                            {genre?.id === 10402 && <FcMusic className='w-6 h-6 ' />}
                                            {genre?.id === 9648 && (
                                                <GiLoveMystery className='w-6 h-6 text-purple-800' />
                                            )}
                                            {genre?.id === 10749 && <GiSelfLove className='w-6 h-6 text-pink-800' />}
                                            {genre?.id === 878 && (
                                                <GiMaterialsScience className='w-6 h-6 text-yellow-300' />
                                            )}
                                            {genre?.id === 10770 && <MdLiveTv className='w-6 h-6 text-green-300' />}
                                            {genre?.id === 53 && <MdMovieFilter className='w-6 h-6 text-rose-500' />}
                                            {genre?.id === 10752 && <GiWarhammer className='w-6 h-6 text-gray-200 ' />}
                                            {genre?.id === 37 && <GiCrimeSceneTape className='w-6 h-6 text-red-300' />}
                                            {genre?.id === 27 && <GiFireBomb className='w-6 h-6 text-purple-800' />}
                                        </div>
                                        {genre?.name === 'Science Fiction' ? 'SciFiction' : genre?.name}
                                    </div>
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
