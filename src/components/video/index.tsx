// @flow
import * as React from 'react';
import {useState} from "react";
import ReactPlayer from "react-player/lazy";

type Props = {
  trailerUrl : string;
};

export function Video(trailerUrl: Props) {
    const [showTrailer, setShowTrailer] = useState(false);

    const handlePlay = () => {
        setShowTrailer(true);
    }

    const handleClose = () => {
        setShowTrailer(false);
    }

    return (
        <div>
            <button onClick={handlePlay}>Play Trailer</button>
            { showTrailer && (
                <div>
                    <ReactPlayer
                        // url={trailerUrl}
                        playing controls />
                    <button onClick={handleClose}>Close trailer</button>
                </div>
            )}
        </div>
    );
};