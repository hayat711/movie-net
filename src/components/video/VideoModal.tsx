import { useState } from 'react';
import ReactPlayer from 'react-player';

import React from 'react'

type Props = {
    trailer: any
}

const VideoModal = ({ trailer}: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <>
            <button onClick={openModal}>Play</button>

            {isOpen && (
                <div
                    className='fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-75'
                    onClick={closeModal}
                >
                    <div className='relative z-10'>
                        <ReactPlayer
                            className='mx-auto'
                            playing
                            controls
                            width='100%'
                            height='100%'
                            url={`https://www.youtube.com/watch?v=${trailer?.results[3]?.key}`}
                        />
                    </div>
                </div>
            )}
        </>
    );
}
