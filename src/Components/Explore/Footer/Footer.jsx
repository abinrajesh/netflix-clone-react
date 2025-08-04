import React, { createRef, useRef } from "react";
import styles from "./Footer.module.css";
import classNames from "classnames";
import LanguageSelector from "/Users/tempadmin/Desktop/React Practice Workspace/netflix-clone-react/src/Components/LanguageSelector/LanguageSelector";

function Footer() {
  const hiddenCatpchaRef = createRef(null);

  const displayHiddenCaptcha = (event) => {
    event.currentTarget.style.display = "none";
    hiddenCatpchaRef.current.style.opacity = "1";
  };

  return (
    <footer className={classNames(styles.footerSection)}>
      <div className={classNames(styles.contactNumberContainer)}>
        <p>
          <span>
            Questions? Call&nbsp;
            <a href="tel:000-800-919-1743">000-800-919-1743</a>
          </span>
        </p>
      </div>
      <div className={classNames(styles.footerLinksContainer)}>
        <ul>
          <li>
            <a href="">FAQ</a>
          </li>
          <li>
            <a href="">Help Center</a>
          </li>
          <li>
            <a href="">Account</a>
          </li>
          <li>
            <a href="">Media Center</a>
          </li>
          <li>
            <a href="">Investor Relations</a>
          </li>
          <li>
            <a href="">Jobs</a>
          </li>
          <li>
            <a href="">Ways to Watch</a>
          </li>
          <li>
            <a href="">Terms of Use</a>
          </li>
          <li>
            <a href="">Privacy</a>
          </li>
          <li>
            <a href="">Cookie Preferences</a>
          </li>
          <li>
            <a href="">Corporate Information</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
          <li>
            <a href="">Speed Test</a>
          </li>
          <li>
            <a href="">Legal Notices</a>
          </li>
          <li>
            <a href="">Only on Netflix</a>
          </li>
        </ul>
      </div>
      <div className={classNames(styles.languageSelectorContainer)}>
        <LanguageSelector />
      </div>
      <div className={classNames(styles.companyName)}>
        <p>Netflix India</p>
      </div>
      <div className={classNames(styles.captchaInfoContainer)}>
        <span>
          <div className={classNames(styles.captchaInfoDescrption)}>
            <p>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.&nbsp;
              <button
                className={classNames(styles.captchaInfoBtn)}
                onClick={displayHiddenCaptcha}
              >
                Learn more.
              </button>
            </p>
          </div>
          <div
            className={classNames(styles.captchaInfoHidden)}
            ref={hiddenCatpchaRef}
          >
            <p>
              <span>
                The information collected by Google reCAPTCHA is subject to the
                Google{" "}
                <a href="https://policies.google.com/privacy">Privacy Policy</a>{" "}
                and{" "}
                <a href="https://policies.google.com/terms">Terms of Service</a>
                , and is used for providing, maintaining, and improving the
                reCAPTCHA service and for general security purposes (it is not
                used for personalised advertising by Google).
              </span>
            </p>
          </div>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
