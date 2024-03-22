// src/components/GameCarousel.js
import React, { useState } from 'react';
import photo1 from "./assets/photo1.svg";
import photo2 from "./assets/photo2.svg";
import leftArrow from "./assets/leftArrow.svg";
import rightArrow from "./assets/rightArrow.svg";

import "./game_carousel.css";

const GameCarousel = () => {

    const initialSlides = [photo1, photo2]; // Define your slide images
    const [slides, setSlides] = useState(initialSlides); // State to track current slide index

    const nextSlide = () => {
        const newSlides = [slides[1], slides[0]]; // Swap slides
        setSlides(newSlides);
    };

    const prevSlide = () => {
        const newSlides = [slides[1], slides[0]]; // Swap slides
        setSlides(newSlides);
    };


    // console.log(slides);

    return (
        <>
            <div className="carousel-container">
                <div className='carousel-data'>
                    <p style={{ color: "#BEF56E" }}>EXPLORE A NEW DIMENSION</p>
                    <h2>Ready to unlock your potentials in a world of fun?</h2>
                    <button className='carousel-button'>GET STARTED</button>
                </div>
                {slides.map((slide) => (
                    <div className="carousel-slide" key={slide}>
                        <img src={slide} />
                    </div>
                ))}
                {/* <div className="carousel-slide">
                    <img src={slides[currentSlide]} alt={`Game`} />
                </div>
                <div className="carousel-slide">
                    <img src={slides[currentSlide + 1]} alt={`Game`} />
                </div> */}
                {/* Add more game slides as needed */}

            </div>
            <div className='carousel-arrow'>
                <img src={leftArrow} alt="left arrow" style={{ cursor: "pointer" }} onClick={prevSlide} />
                <img src={rightArrow} alt="right arrow" style={{ cursor: "pointer" }} onClick={nextSlide} />
            </div>
        </>

    );
};

export default GameCarousel;
