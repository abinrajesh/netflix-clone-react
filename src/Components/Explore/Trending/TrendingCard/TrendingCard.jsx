import React, { useState } from "react";
import styles from "./TrendingCard.module.css";
import { imageUrl } from "../../../../Constants/Constants";

function TrendingCard({ index, poster_path, obj, PosterClick }) {
  return (
    <div
      onClick={() => PosterClick(index, obj)}
      className={styles.trendingCard}
      style={{ backgroundImage: `url(${imageUrl + poster_path})` }}
    >
      <h1>{index + 1}</h1>
    </div>
  );
}

export default TrendingCard;
