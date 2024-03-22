import React, { useState } from "react";
import bigImg from "./assets/background1.svg"
import Card from "../reusable_card/cardComp";
import pic1 from "./assets/cardPic1.svg";
import pic2 from "./assets/cardPic2.svg";
import pic3 from "./assets/cardPic3.svg";
import pic4 from "./assets/cardPic4.svg";
import pic5 from "./assets/cardPic5.svg";
import pic6 from "./assets/cardPic6.svg";
import pic7 from "./assets/cardPic7.svg";
import pic8 from "./assets/cardPic8.svg";
import "./cards_section.css";

const Cards_Section = () => {

    const [selectedCategory, setSelectedCategory] = useState("ALL");

    const cardData = [
        { imgSrc: pic1, title: "Call of Duty: Vanguard", subtitle: "Activision", platforms: "PS4, PS5, Xbox One, Xbox Series X", category: "PS5" },
        { imgSrc: pic2, title: "FIFA 22", subtitle: "Activision", platforms: "PS4, PS5, Xbox One, Xbox Series X", category: "PS5" },
        { imgSrc: pic3, title: "GOFTG", subtitle: "Activision", platforms: "PS4, PS5, Xbox One, Xbox Series X", category: "PS5" },
        { imgSrc: pic4, title: "Alan Awake", subtitle: "Activision", platforms: "PS4, PS5, Xbox One, Xbox Series X", category: "PS5" },
        { imgSrc: pic4, title: "Alan Awake", subtitle: "Activision", platforms: "PS4, PS5, Xbox One, Xbox Series X", category: "PS5" },
        { imgSrc: pic5, title: "Far Cry 6", subtitle: "Activision", platforms: "PS4, PS5, Xbox One, Xbox Series X", category: "PS5" },
        { imgSrc: pic6, title: "Prince of Persia", subtitle: "Activision", platforms: "PS4, PS5, Xbox One, Xbox Series X", category: "PS4" },
        { imgSrc: pic7, title: "Dead Island 2", subtitle: "Activision", platforms: "PS4, PS5, Xbox One, Xbox Series X", category: "PS4" },
        { imgSrc: pic8, title: "Saint Row", subtitle: "Activision", platforms: "PS4, PS5, Xbox One, Xbox Series X", category: "PS5" },
        { imgSrc: pic8, title: "Saint Row", subtitle: "Activision", platforms: "PS4, PS5, Xbox One, Xbox Series X", category: "PS5" }
    ];

    const filteredCards = selectedCategory === "ALL" ? cardData : cardData.filter(card => card.category === selectedCategory);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category.toUpperCase());
    };

    return (
        <div style={{ position: "relative" }}>
            <img src={bigImg} style={{ position: "absolute" }} alt="Background" />
            <div style={{ margin: "100px 0px 100px 100px" }}>
                <h3 className="text1_style">Newly Released Games</h3>
                <div className="text2_subSection" style={{ position: "relative" }}>
                    <p onClick={() => handleCategoryChange("ALL")} className={selectedCategory === "ALL" ? "active" : ""}>ALL</p>
                    <p onClick={() => handleCategoryChange("PS4")} className={selectedCategory === "PS4" ? "active" : ""}>PS4</p>
                    <p onClick={() => handleCategoryChange("PS5")} className={selectedCategory === "PS5" ? "active" : ""}>PS5</p>
                    <p onClick={() => handleCategoryChange("X-Box")} className={selectedCategory === "X-Box" ? "active" : ""}>X-Box</p>
                </div>
                <div className="cards_container">
                    {filteredCards.map((data, index) => (
                        <Card
                            key={index}
                            imgSrc={data.imgSrc}
                            title={data.title}
                            subtitle={data.subtitle}
                            platforms={data.platforms}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Cards_Section;