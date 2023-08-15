import Image from 'next/image';
import React, { lazy } from 'react';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';

type Props = {
    title: string;
    release_date: string;
    backdrop_path: string;
    poster_path: string;
    id: string;
    vote_average: number | string;
    genreName?: string;
    type?:string;
};

function Slide({ title, release_date, backdrop_path, id, vote_average, poster_path, genreName, type }: Props) {
    const imagePath = 'https://image.tmdb.org/t/p/original';
    const isMobile = useMediaQuery({ query: '(max-width: 640px)' });
    const imageSrc = isMobile ? imagePath + poster_path : imagePath + backdrop_path;

    return (
        <div className='relative'>
            <Link href={`/movie/${id}`}>
                <Image
                    src={imageSrc}
                    alt={title}
                    width={1480}
                    height={720}
                    priority
                    // fill
                    className='-mt-8'
                />
                <div className='absolute bottom-10 left-10 text-white font-sans'>
                    <h1 className='text-white font-extrabold  text-7xl md:text-4xl sm:text-2xl xs:text-lg'>{title}</h1>
                    {genreName && (
                        <h1 className='text-gray-300 font-medium  text-xl md:text-xl sm:text-medium xs:text-sm'>
                            {' '}
                            Genre: {genreName}
                        </h1>
                    )}
                    {type && (
                        <h1 className='text-gray-300 font-medium  text-xl md:text-xl sm:text-medium xs:text-sm'>
                            {' '}
                            {type}
                        </h1>
                    )}
                    <h1 className='text-white font-medium text-lg md:text-md xs:text-sm md:text-md'>
                        {' '}
                        &nbsp;{release_date}
                    </h1>
                </div>
            </Link>
        </div>
    );
}

export default Slide;
