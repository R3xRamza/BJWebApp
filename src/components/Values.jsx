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
                <div className="text-wrapper-2">Value 1</div>
                <div className="text-wrapper-3">Value 2</div>
                <div className="text-wrapper-4">Value 3</div>
                <div className="overlap-group">
                    <div className="rectangle-3" />
                    <div className="text-wrapper-5">Submit Values</div>
                </div>
            </div>
        </div>
    );
};


export default Values;