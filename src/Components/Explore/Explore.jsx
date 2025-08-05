import React from "react";
import styles from "./Explore.module.css";
import Trending from "./Trending/Trending";
import Features from "./Features/Features";
import Faq from "./Faq/Faq";
import EmailSignUp from "../EmailSignUp/EmailSignUp";
import Footer from "./Footer/Footer";
function Explore() {
  return (
    <div className={styles.exploreSection}>
      <Trending />
      <Features />
      <Faq />
      <EmailSignUp isFromExplore={true}/>
      <Footer />
    </div>
  );
}

export default Explore;
