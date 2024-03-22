// src/components/GameCarousel.js
import React from 'react';
import photo1 from "./assets/photo1.svg";
import photo2 from "./assets/photo2.svg";
import leftArrow from "./assets/leftArrow.svg";
import rightArrow from "./assets/rightArrow.svg";

import "./game_carousel.css";

const GameCarousel = () => {
    return (
        <>
            <div className="carousel-container">
                <div className='carousel-data'>
                    <p style={{ color: "#BEF56E" }}>EXPLORE A NEW DIMENSION</p>
                    <h2>Ready to unlock your potentials in a world of fun?</h2>
                    <button className='carousel-button'>GET STARTED</button>
                </div>

                <div className="carousel-slide">
                    <img src={photo1} alt="Game 1" />
                </div>
                <div className="carousel-slide">
                    <img src={photo2} alt="Game 2" />
                </div>
                {/* Add more game slides as needed */}

            </div>
            <div className='carousel-arrow'>
                <img src={leftArrow} alt="left arrow"></img>
                <img src={rightArrow} alt="right arrow"></img>
            </div>
        </>

    );
};

export default GameCarousel;
