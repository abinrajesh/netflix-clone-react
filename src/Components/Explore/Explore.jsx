import React from 'react'
import styles from './Explore.module.css';
import Trending from './Trending/Trending'
import Features from './Features/Features'
import Faq from './Faq/Faq'
import BannerEmailSignUp from '../EmailSignUp/EmailSignUp'
import Footer from './Footer/Footer'

function Explore() {
  return (
    <div className={styles.exploreSection}>
        <Trending />
         <Features />
         <Faq />
         <BannerEmailSignUp />
        <Footer /> 
    </div>
  )
}

export default Explore