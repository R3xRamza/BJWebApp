import React, { useState } from "react";
import "./Start.css";
import Values from "./Values"; // Replace with the appropriate component

export const Hero = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleRectangleClick = () => {
    setShowLogin(true); 
    window.scrollTo({
      top: 0
      });
  };

  return (
    <div className="desktop">
      <a href="https://www.brightonjones.com/" target="_blank" rel="noopener noreferrer">
            <img
              className="logo"
              src="https://www.brightonjones.com/wp-content/themes/brightonjones/assets/images/logo.svg"
            />
          </a>
      {!showLogin ? (
        <div className="div">
          <div className="overlap">
            <div className="text-wrapper">My Values, Passions, Purpose</div>
            <p className="p">Align your influence with your interests</p>
          </div>
          <input className="text-input" placeholder="Email" />
          <input className="text-input1" type="password" placeholder="Password" />
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
