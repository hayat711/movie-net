import { fetchSearchMovie, useSearchMovie } from '@/hooks/useMovie';
import { useQueries, useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { useDebounce } from 'use-debounce';

type SearchResultMovie = {
    name: string;
    id: number;
};
type Props = {
    isMobile?: boolean;
};

const Search: React.FC = ({ isMobile }: Props) => {
    const [searchTerm, setSearchTerm] = React.useState<string>('');
    const [debouncedSearchTerm] = useDebounce(searchTerm, 800);
    const router = useRouter();
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const {
        data: searchResult,
        isError,
        isFetching,
    } = useQuery(['search', debouncedSearchTerm], () => fetchSearchMovie(debouncedSearchTerm), {
        enabled: debouncedSearchTerm !== '',
    });

    if (isError) return <div>failed to load</div>;

    return (
        <div className='relative'>
            <input
                type='text'
                name='search-term'
                id='search-term'
                value={searchTerm}
                onChange={handleSearchChange}
                className={`text-white px-4 py-1 bg-gray-50 bg-opacity-10 rounded-3xl border-1 border-gray-300 focus:outline-none focus:border-red-300 placeholder-gray-300 ${
                    isMobile ? 'placeholder:text-sm w-48' : 'placeholder:text-base w-72'
                }`}
                placeholder='Search movies...'
            />
            <div className='absolute right-2 top-1'>
                <CiSearch className='h-6 w-6 text-white' />
            </div>
            {isFetching && <div>Loading...</div>}

            {searchResult && (
                <div className='absolute top-10 right-0  rounded-md'>
                    {searchResult.results.map((movie: SearchResultMovie) => (
                        <div
                            key={movie.id}
                            className='flex  w-72 h-70 text-white bg-zinc-800 bg-opacity-90 backdrop-blur-3xl divide-x divide-gray-200 '
                        >
                            <div
                                onClick={() => {
                                    setSearchTerm('');
                                    router.push(`/movie/${movie.id}`);
                                }}
                                className='text-lg px-8 py-1 hover:scale-105 hover:font-semibold'
                            >
                                {movie.name}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Search;
