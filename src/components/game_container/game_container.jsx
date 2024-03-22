import React from "react";
import "./game_container.css";
import image1 from "./assets/image1.svg";
import image2 from "./assets/image2.svg";

export default function GameContainer() {
    return (
        <div className="game-container">
            <div>
                <div className="banner">
                    <img src={image1} alt="Banner Image" />
                </div>
                <div className="thumbnails">
                    <img src={image2} alt="Thumbnail 1" />
                    <img src={image2} alt="Thumbnail 2" />
                    <img src={image2} alt="Thumbnail 3" />
                </div>
            </div>


            <div className="info">
                <div className="info_text1">Mortal Combat 1</div>
                <div className="info_text2">For single-player, the game features the return of the plot-driven Story Mode and the traditional form of Towers mode from the previous games, while introducing the addition of the seasonal Invasion mode, an online mode combining fighting mechanics with board game and role-playing game elements.</div>
                <div className="info_text3">Category: Fighting Action-adventure</div>
                <div className="info_text3">Listed Date: September 19, 2023</div>
                <div className="info_text3">Chain: Ethereum</div>
                <div className="info_text3">Number of users: 439,475 </div>
                <button className='container-button'>PLAY</button>
            </div>
        </div>
    )
}
