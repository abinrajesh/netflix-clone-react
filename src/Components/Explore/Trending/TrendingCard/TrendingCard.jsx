import React from "react";
import styles from "./TrendingCard.module.css";

function TrendingCard() {
  const key = "1";
  return (
    <div className={styles.trendingCard}>
      <h1>{key}</h1>
    </div>
  );
}

export default TrendingCard;
