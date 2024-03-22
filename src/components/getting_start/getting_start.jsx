import React from "react";
import image1 from "./assets/image1.svg";
import "./getting_start.css";
export default function GettingStart() {
    return (
        <div className="gettingStart_container">
            <div className="details_container">
                <div className="get_Started_text1">EXPLORE THE NEW DIMENSION</div>
                <div className="get_Started_text2" >Ready to unlock your potentials in a world of fun?</div>
                <button className="start_button">GET STARTED</button>
            </div>
            <div>
                <img src={image1}></img>
            </div>
        </div>
    )
}