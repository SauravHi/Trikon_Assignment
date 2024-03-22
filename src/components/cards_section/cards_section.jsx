import React from "react";
import bigImg from "./assets/background1.svg"
import Card from "../reusable_card/cardComp";
import pic1 from "./assets/cardPic1.svg";
import "./cards_section.css";

export default function Cards_Section() {
    return (
        <div style={{ position: "relative" }}>
            <img src={bigImg} style={{ position: "absolute" }}></img>
            <div
                style={{ margin: "100px 0px 100px 100px" }}
            >
                <h3 className="text1_style">Newly Released Games</h3>
                <div className="text2_subSection">
                    <p>ALL</p>
                    <p>PS4</p>
                    <p>PS5</p>
                    <p>X-Box</p>
                </div>
                <div className="cards_container">
                    <Card
                        imgSrc={pic1}
                        title="Call of Duty: Vanguard"
                        subtitle="Activision"
                        platforms="PS4, PS5, Xbox One, Xbox Series X" />
                    <Card
                        imgSrc={pic1}
                        title="Call of Duty: Vanguard"
                        subtitle="Activision"
                        platforms="PS4, PS5, Xbox One, Xbox Series X" />
                    <Card
                        imgSrc={pic1}
                        title="Call of Duty: Vanguard"
                        subtitle="Activision"
                        platforms="PS4, PS5, Xbox One, Xbox Series X" />
                    <Card
                        imgSrc={pic1}
                        title="Call of Duty: Vanguard"
                        subtitle="Activision"
                        platforms="PS4, PS5, Xbox One, Xbox Series X" />
                    <Card
                        imgSrc={pic1}
                        title="Call of Duty: Vanguard"
                        subtitle="Activision"
                        platforms="PS4, PS5, Xbox One, Xbox Series X" />
                    <Card
                        imgSrc={pic1}
                        title="Call of Duty: Vanguard"
                        subtitle="Activision"
                        platforms="PS4, PS5, Xbox One, Xbox Series X" />
                    <Card
                        imgSrc={pic1}
                        title="Call of Duty: Vanguard"
                        subtitle="Activision"
                        platforms="PS4, PS5, Xbox One, Xbox Series X" />
                </div>
            </div>
        </div>
    )
}