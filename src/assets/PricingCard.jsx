import React from 'react';
import {useState} from 'react';
import "../styles/PricingCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from '@fortawesome/free-solid-svg-icons';


function PricingCard({ amount, value, content, features, limit, bgColor, color, monthColor, buttonColor, buttonBgColor, outline }) {
    const limitedData = features.slice(0, limit);
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleMouseOut = () => {
        setIsHovered(false);
    };


    return (
        <div className="pricingCard" style={{ backgroundColor: `${bgColor}` }}>
            <div className="pricingTitle" style={{ width: `${value}%` }}>
                <p>{content}</p>
            </div>
            <h2 style={{ color: `${color}` }}>{amount}<span style={{ color: `${monthColor}` }}>/month</span></h2>
            <ul>
                {limitedData.map((feature, index) => (
                    <li key={index}> <span><FontAwesomeIcon icon={faCheck} style={{ color: "#27be5c", fontSize: "28" }} /><span></span>       </span>
                        {feature.title}
                    </li>
                ))}
            </ul>
            <button
                onMouseOver={handleHover}
                onMouseOut={handleMouseOut}
                style={{ backgroundColor: `${buttonBgColor}`, color: `${buttonColor}`, outline: isHovered ? outline : 'none', border: "none" }}>Get Started</button>
        </div>
    )
}

export default PricingCard;
