import React from 'react';
import "./cardStyle.css";

const Card = ({ imgSrc, title, subtitle, platforms }) => {
    return (
        <div className="card">
            <img src={imgSrc} alt={title} />
            <div className="card-content" style={{ padding: "13px", fontSize: "10px", fontWeight: "bold", }}>
                <div style={{ fontSize: "11px" }}>{title}</div>
                <div style={{ margin: "none" }}>{subtitle}</div>
                <div style={{ margin: "none" }}>{platforms}</div>
            </div>
        </div>
    );
};

export default Card;
