import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
    title: string;
    release_date: string;
    poster_path: string;
    id: string;
    index: number;
    isPopular: boolean;
};

function MovieCard({ title, release_date, poster_path, id, index, isPopular }: Props) {
    const imagePath = 'https://image.tmdb.org/t/p/original';
    const showRink = isPopular && index < 10;
    return (
        <>
            <div className='relative bg-black rounded-2xl p-1'>
                <Link href={`/movie/${id}`}>
                    <Image
                        src={imagePath + poster_path}
                        width={255}
                        height={345}
                        alt={title}
                        priority
                        // fill
                        className='rounded-md'
                    />
                    <div className='absolute   -bottom-2 left-1 font-bold text-white lg:text-7xl sm:text-4xl text-4xl'>
                        {isPopular && index <= 9 && index + 1}
                    </div>
                    <div>
                        <h2
                            className={`text-white font-bold sm:text-base md:text-sm xs:text-sm text-sm ${
                                showRink ? 'pl-12' : 'text-start'
                            }`}
                        >
                            {title?.length >= 16 ? title.substring(0, 12) + '...' : title}
                        </h2>
                        {/* <h3 className='text-white'>{release_date}</h3> */}
                    </div>
                </Link>
            </div>
        </>
    );
}

export default MovieCard;
