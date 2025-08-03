import React from "react";
import "./Banner.css";
import NavBar from "../NavBar/NavBar";
import BannerEmailSignUp from "../EmailSignUp/EmailSignUp";

function Banner() {
  return (
    <div className="banner">
      <div className="banner-overlay"></div>
      <NavBar />
      <div className="banner-content-container">
        <div className="banner-content">
          <div className="banner-header">
            <h1>Unlimited movies, TV shows and more</h1>
            <p>Starts at ₹149. Cancel at any time.</p>
          </div>
          <div className="banner-email-signup">
            <BannerEmailSignUp />
          </div>
        </div>
      </div>
      <div className="banner-curve-container">
      <div className="banner-bottom-curve"></div>
      </div>
    </div>
  );
}

export default Banner;
