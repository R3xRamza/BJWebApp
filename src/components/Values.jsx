import React from "react";
import "./Values.css";
import Rectangle from "./ValueBox";

export const Values = () => {
    return (
        <div className="vdesktop">
            <div className="div">
                <div className="text-wrapper">My Values</div>
                <p className="burh">Click on words to add them to your values list</p>
                <p className="p">Click on three values to write shortly about</p>
                <Rectangle />
            </div>
        </div>
    );
};


export default Values;