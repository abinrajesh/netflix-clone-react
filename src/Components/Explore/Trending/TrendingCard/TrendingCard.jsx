import React from "react";
import styles from "./TrendingCard.module.css";
import { API_KEY,imageUrl } from "../../../../Constants/Constants";


function TrendingCard({ index, poster_path }) {
  return (
    <div className={styles.trendingCard} style={{backgroundImage:`url(${imageUrl+poster_path})`}}>
      {console.log(imageUrl+poster_path)}
      <h1>{index + 1}</h1>
    </div>
  );
}

export default TrendingCard;
