import React, { useState } from "react";
import styles from "./TrendingCard.module.css";
import { imageUrl } from "../../../../Constants/Constants";
import PreviewModal from "../PreviewModal/PreviewModal";

function TrendingCard({ index, poster_path }) {
  const [isPosterClicked, setIsPosterClicked] = useState(false);

  const onClose = () => {
      console.log("Preview closed");
      
  }

  const handlePreviewPopup = () => {
    setIsPosterClicked(true);
  };

  return (
    <div
      className={styles.trendingCard}
      style={{ backgroundImage: `url(${imageUrl + poster_path})` }}
      onClick={handlePreviewPopup}
    >
      <h1>{index + 1}</h1>
      {isPosterClicked ? <PreviewModal onClose={onClose}/> : ""}
    </div>
  );
}

export default TrendingCard;
