import React from "react";
import styles from "./Banner.module.css";
import NavBar from "../NavBar/NavBar";
import BannerEmailSignUp from "../EmailSignUp/EmailSignUp";
import classNames from "classnames";

function Banner() {
  return (
    <div className={classNames(styles.banner)}>
      <div className={classNames(styles.bannerOverlay)}></div>
      <NavBar />
      <div className={classNames(styles.bannerContentContainer)}>
        <div className={classNames(styles.bannerContent)}>
          <div className={classNames(styles.bannerHeader)}>
            <h1>Unlimited movies, TV shows and more</h1>
            <p>Starts at ₹149. Cancel at any time.</p>
          </div>
          <div className={classNames(styles.bannerEmailSignup)}>
            <BannerEmailSignUp />
          </div>
        </div>
      </div>
      <div className={classNames(styles.bannerCurveContainer)}>
        <div className={classNames(styles.bannerBottomCurve)}></div>
      </div>
    </div>
  );
}

export default Banner;
