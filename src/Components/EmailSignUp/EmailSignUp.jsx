import React from "react";
import styles from "./EmailSignUp.module.css";
import classNames from "classnames";

function BannerEmailSignUp({ isFromExplore }) {
  return (
    <div
      className={classNames({
        [styles.exploreEmailSignup]: isFromExplore,
        [styles.emailSignup]: !isFromExplore,
      })}
    >
      <h3>
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <form
        action=""
        className={classNames({
          [styles.exploreEmailSignupForm]: isFromExplore,
          [styles.emailSignupForm]: !isFromExplore,
        })}
      >
        <div className={classNames(styles.emailInputSection)}>
          <input
            type="email"
            className={classNames(styles.emailSignupInput)}
            required
          />
          <p className={classNames(styles.emailInputPlaceholder)}>
            Email address
          </p>
        </div>
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
      </form>
    </div>
  );
}

export default BannerEmailSignUp;
