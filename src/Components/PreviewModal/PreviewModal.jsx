import React, { useEffect, useState } from "react";
import { imageUrl } from "../../Constants/Constants";
import { API_KEY } from "../../Constants/Constants";
import styles from "./PreviewModal.module.css";
import classNames from "classnames";
import axios from "../../../src/axios";
import YouTube from "react-youtube";

function PreviewModal({ onClose, movieDetails }) {
  const [genre, setGenre] = useState([]);
  const [isHowered, setIsHoweverd] = useState(false);
  const [urlIdYt, setUrlIdYt] = useState("");
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`)
      .then((response) => {
        setGenre(response.data.genres);
      });

    axios
      .get(`3/tv/${movieDetails.id}/videos?api_key=${API_KEY}`)
      .then((response) => {
        if (response.data.results !== 0) {
          setUrlIdYt(response.data.results[0]);
        } else {
          console.log(response.data.results.length);
        }
      });
  }, []);

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
      controls: 0,
    },
  };

  const handleMouseEnter = () => {
    setIsHoweverd(true);
  };

  const handleMouseLeave = () => {
    setIsHoweverd(false);
  };

  console.log(urlIdYt);

  return (
    <div className={classNames(styles.previewModalBgOverlay)} onClick={onClose}>
      <div
        className={classNames(styles.previewModal)}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={classNames(styles.previewModalPoster)}
          style={{
            backgroundImage: `url(${imageUrl + movieDetails.backdrop_path})`,
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className={classNames(styles.youTubeVideoWrapper)}>
            {isHowered && (
              <YouTube
                videoId={urlIdYt.key}
                opts={opts}
                className={classNames(styles.youTubeEmbed)}
              />
            )}
          </div>
          <div className={classNames(styles.PreviewTitle)}>
            <h1>{movieDetails.name}</h1>
          </div>
        </div>
        <div className={classNames(styles.previewModalContent)}>
          <ul>
            <li>
              <span>{movieDetails.first_air_date}</span>
            </li>
            <li>
              <span>{!movieDetails.adult ? "U/A 13+⁩" : "A"}</span>
            </li>
            <li>
              <span>Show</span>
            </li>
            <li>
              {genre
                .filter((g) => movieDetails.genre_ids.includes(g.id))
                .map((g, index) => {
                  return <span key={index}>{g.name}</span>;
                })}
            </li>
          </ul>

          <div className={classNames(styles.previewMovieDescription)}>
            <p>{movieDetails.overview}</p>
          </div>

          <div className={classNames(styles.previewGetStarted)}>
            <button className={classNames(styles.getStartedBtn)}>
              Get Started
              <div className={classNames(styles.getStartedBtnSvg)}>
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
              </div>
            </button>
          </div>
          <div className={classNames(styles.previewClose)}>
            <button onClick={onClose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                role="img"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                data-icon="XStandard"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.5858 12L2.29291 3.70706L3.70712 2.29285L12 10.5857L20.2929 2.29285L21.7071 3.70706L13.4142 12L21.7071 20.2928L20.2929 21.7071L12 13.4142L3.70712 21.7071L2.29291 20.2928L10.5858 12Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreviewModal;
