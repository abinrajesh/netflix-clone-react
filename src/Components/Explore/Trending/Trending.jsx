import React, { useEffect, useRef, useState } from "react";
import styles from "./Trending.module.css";
import TrendingCard from "./TrendingCard/TrendingCard";
import classNames from "classnames";

function Trending() {
  const [showScrollLeft, setShowScrollLeft] = useState(false);
  const [showScrollRight, setShowScrollRight] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const scrollListRef = useRef(null);

  useEffect(() => {
    const el = scrollListRef.current;

    const handleScroll = () => {
      if (!el) return;

      const atStart = el.scrollLeft === 0;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth;

      setShowScrollLeft(!atStart);
      setShowScrollRight(!atEnd);
    };

    if (el) {
      handleScroll();
    }

    el.addEventListener("scroll", handleScroll);

    return () => {
      el.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToLeft = () => {
    if (scrollListRef.current) {
      scrollListRef.current.scrollLeft = 0;
    }
  };

  const scrollToRight = () => {
    if (scrollListRef.current) {
      scrollListRef.current.scrollLeft = scrollListRef.current.scrollWidth;
    }
  };

  return (
    <div className={styles.trendingSection}>
      <div className={styles.trendingHeader}>
        <h3>Trending Now</h3>
      </div>
      <div className={styles.trendingContent}>
        <div className={styles.scrollBtns}>
          <div
            className={classNames(
              styles.scrollBtnBg,
              styles.leftScrollBtnBG,
              showScrollLeft ? styles.visible : styles.hidden
            )}
          >
            <button
              className={classNames(styles.scrollBtn)}
              onClick={scrollToLeft}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                role="img"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                data-icon="ChevronLeftStandard"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.41409 12L15.707 19.2928L14.2928 20.7071L6.29277 12.7071C6.10523 12.5195 5.99988 12.2652 5.99988 12C5.99988 11.7347 6.10523 11.4804 6.29277 11.2928L14.2928 3.29285L15.707 4.70706L8.41409 12Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={classNames(
              styles.scrollBtnBg,
              styles.rightScrollBtnBG,
              showScrollRight ? styles.visible : styles.hidden
            )}
          >
            <button
              className={classNames(styles.scrollBtn, styles.rightScrollBtn)}
              onClick={scrollToRight}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                role="img"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                data-icon="ChevronRightStandard"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <ul ref={scrollListRef}>
          <li>
            <TrendingCard />
          </li>
          <li>
            <TrendingCard />
          </li>
          <li>
            <TrendingCard />
          </li>
          <li>
            <TrendingCard />
          </li>
          <li>
            <TrendingCard />
          </li>
          <li>
            <TrendingCard />
          </li>
          <li>
            <TrendingCard />
          </li>
          <li>
            <TrendingCard />
          </li>
          <li>
            <TrendingCard />
          </li>
          <li>
            <TrendingCard />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Trending;
