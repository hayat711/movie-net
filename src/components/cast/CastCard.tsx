import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export interface ICastCard {
    id: number;
    name: string;
    character: string;
    profile_path: string;
}

function CastCard({ cast }: { cast: ICastCard }) {
    const imagePath = 'https://image.tmdb.org/t/p/original';

    return (
        <>
            <div className='bg-black rounded-md'>
                <Image
                    src={imagePath + cast.profile_path}
                    width={205}
                    height={295}
                    alt={cast.name}
                    priority
                    // fill
                    className='rounded-md'
                />
                <h2 className='text-white text-sm'>Name: {cast.name}</h2>
                <h2 className='text-white text-sm'>Character: {cast.character}</h2>

            </div>
        </>
    );
}

export default CastCard;
