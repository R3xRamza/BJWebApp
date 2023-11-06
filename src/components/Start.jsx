import React, { useState } from "react";
import "./Start.css";
import Values from "./Values"; // Replace with the appropriate component

export const Hero = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleRectangleClick = () => {
    setShowLogin(true); // Set the state to true to render the Login component
  };

  return (
    <div className="desktop">
      {!showLogin ? (
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
            <div className="rectangle-2" onClick={handleRectangleClick} />
            <div className="text-wrapper-3">Login</div>
          </div>
        </div>
      ) : (
        <Values />
      )}
    </div>
  );
};

export default Hero;
