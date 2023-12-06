import React from "react";
import "./RLS.css";

export const RLS = (props) => {
    return (
        <div className="rdesktop">
            <div className="div">
                <div className="text-wrapper">My Richer Life Statement {props.v1}</div>
                <p className="burh">Align your values and passions to live a richer life</p>
            </div>
        </div>
    );
};

export default RLS
