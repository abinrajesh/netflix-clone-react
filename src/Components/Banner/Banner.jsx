import React, { useEffect, useState } from "react";
import { API_KEY, imageUrl } from "../../Constants/Constants";
import styles from "./Banner.module.css";
import NavBar from "../NavBar/NavBar";
import BannerEmailSignUp from "../EmailSignUp/EmailSignUp";
import classNames from "classnames";
import axios from "../../axios";

function Banner() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(`/3/discover/tv?api_key=${API_KEY}&with_networks=213`)
      .then((response) => {
        const randomIndex = Math.floor(Math.random() * 10);
        setMovie(response.data.results[randomIndex]);
      });
  }, []);

  return (
    <div
      className={classNames(styles.banner)}
      style={{
        backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""} )`,
      }}
    >
      <div className={classNames(styles.bannerOverlay)}></div>
      <NavBar />
      <div className={classNames(styles.bannerContentContainer)}>
        <div className={classNames(styles.bannerContent)}>
          <div className={classNames(styles.bannerHeader)}>
            <h1>Unlimited movies, TV shows and more</h1>
            <p>Starts at ₹149. Cancel at any time.</p>
          </div>
          <div className={classNames(styles.bannerEmailSignup)}>
            <BannerEmailSignUp isFromExplore={false}/>
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
