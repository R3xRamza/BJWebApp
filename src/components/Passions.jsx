import React, { useState } from "react";
import "./Values.css";
import PRectangle from "./PassionBox";
import RLS from "./RLS";

export const Passions = () => {

    const [showLogin, setShowLogin] = useState(false);

    const handleRectangleClick = () => {
        setShowLogin(true); 
        window.scrollTo({
        top: 0
    });
  };

    return (
        <div className="pdesktop">
            {!showLogin ? (
            <div className="div">
                <div className="text-wrapper">My Values</div>
                <p className="burh">Click on words to add them to your values list. Choose up to 12 words that align with your values</p>
                <p className="p">Click on three values to write shortly about</p>
                <PRectangle />
                <div className="overlap-group" onClick={handleRectangleClick}>
                    <div className="rectangle-3"/>
                    <div className="text-wrapper-5">Submit Values</div>
                </div>
            </div>
            ) : (
            <RLS/>
            )};
        </div>

)};


export default Passions;