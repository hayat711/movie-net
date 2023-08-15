import React, { useState } from 'react';
import heartImage from '../../../public/img.png';

const LikeButton = () => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <div className={`heart-btn ${isActive ? 'heart-active' : ''}`}>
            <div className='content' onClick={handleClick}>
                <span
                    className={`heart ${isActive ? 'heart-active' : ''}`}
                    style={{ backgroundImage: `url(${heartImage})` }}
                ></span>
                <span className={`text ${isActive ? 'heart-active' : ''}`}>Like</span>
            </div>
        </div>
    );
};

export default LikeButton;
