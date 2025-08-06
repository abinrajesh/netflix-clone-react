import React, { useEffect, useRef, useState } from "react";
import { API_KEY } from "../../../Constants/Constants";
import axios from "../../../axios";
import classNames from "classnames";
import styles from "./Trending.module.css";
import TrendingCard from "./TrendingCard/TrendingCard";
import PreviewModal from "../../PreviewModal/PreviewModal";

function Trending() {
  const [showScrollLeft, setShowScrollLeft] = useState(false);
  const [showScrollRight, setShowScrollRight] = useState(false);
  const [trending, setTrending] = useState([]);
  const [isPosterClicked, setIsPosterClicked] = useState(false);
  const [previewMovieDetals, setPreviewMovieDetails] = useState("");

  const scrollListRef = useRef(null);
  useEffect(() => {
    axios
      .get(`/3/discover/tv?api_key=${API_KEY}&with_networks=213`)
      .then((response) => {
        setTrending(response.data.results);
      })
      .catch((err) => {
        alert("Network error");
      });
  }, []);

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
      setTimeout(() => {
        handleScroll();
      }, 0);
    }

    el.addEventListener("scroll", handleScroll);

    return () => {
      el.removeEventListener("scroll", handleScroll);
    };
  }, [trending]);

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

  const handlePreviewModal = (index, obj) => {
    setIsPosterClicked(true);
    setPreviewMovieDetails(obj);
  };

  const handlePreviewClose = () => {
    setIsPosterClicked(false);
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
                xmlns="https://www.w3.org/2000/svg"
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
                xmlns="https://www.w3.org/2000/svg"
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
          {trending &&
            trending.slice(0, 10).map((obj, index) => (
              <li key={index}>
                <TrendingCard
                  index={index}
                  poster_path={obj.poster_path}
                  PosterClick={() => handlePreviewModal(index, obj)}
                />
              </li>
            ))}
        </ul>
      </div>
      {isPosterClicked && (
        <PreviewModal
          onClose={handlePreviewClose}
          movieDetails={previewMovieDetals}
        />
      )}
    </div>
  );
}

export default Trending;
