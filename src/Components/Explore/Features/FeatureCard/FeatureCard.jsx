import React from "react";
import styles from "./FeatureCard.module.css";
import classNames from "classnames";

function FeatureCard(props) {
  return (
    <div className={classNames(styles.featureCard)}>
      <div className={classNames(styles.featureCardContent)}>
        <div className={classNames(styles.featureCardHeader)}>
          <h3>{props.title}</h3>
        </div>
        <div className={classNames(styles.featureCardDescription)}>
          <p>{props.description}</p>
        </div>
      </div>
      <div className={classNames(styles.featureSvgContainer)}>
        {props.svg}
      </div>
    </div>
  );
}

export default FeatureCard;
