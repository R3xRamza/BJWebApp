import React from "react";
import "./desktop.css";

export const Hero = () => {
  return (
    <div className="desktop">
      <div className="div">
        <div className="overlap">
          <div className="text-wrapper">My Values, Passions, Purpose</div>
          <p className="p">Align your influence with your interests</p>
        </div>
        <div className="overlap-group">
          <div className="rectangle" />
          <div className="text-wrapper-2">Email</div>
        </div>
        <div className="overlap-group-2">
          <div className="rectangle" />
          <div className="text-wrapper-2">Password</div>
        </div>
        <div className="overlap-2">
          <div className="rectangle-2" />
          <div className="text-wrapper-3">Login</div>
        </div>
      </div>
    </div>
  );
};


export default Hero;
