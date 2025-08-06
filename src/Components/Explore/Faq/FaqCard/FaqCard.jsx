import React from "react";
import styles from "./FaqCard.module.css";
import classNames from "classnames";

function FaqCard({ isActive, onToggle, title, content }) {
  return (
    <div className={classNames(styles.faqCardContainer)}>
      <button className={classNames(styles.faqCard)} onClick={onToggle}>
        {title}
        <svg
          xmlns="https://www.w3.org/2000/svg"
          fill="none"
          role="img"
          viewBox="0 0 36 36"
          width="36"
          height="36"
          data-icon="PlusLarge"
          aria-hidden="true"
          className={classNames(styles.faqPlusSvg, {
            [styles.faqCrossSvgActive]: isActive,
          })}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z"
            fill="currentColor"
          ></path>
        </svg>
      </button>
      <div
        className={classNames(styles.faqCardcontent, {
          [styles.faqCardcontentActive]: isActive,
        })}
      >
        <span dangerouslySetInnerHTML={{ __html: content }}></span>
      </div>
    </div>
  );
}

export default FaqCard;
