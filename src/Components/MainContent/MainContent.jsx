import React from 'react'
import './MainContent.css';
import TrendingNow from '../TrendingNow/TrendingNow'
import Features from '../Features/Features'
import Faq from '../Faq/Faq'
import GetStarted from '../GetStarted/GetStarted'
import Footer from '../Footer/Footer'

function MainContent() {
    return (
        <div className='main-content'>
            <TrendingNow />
            <Features />
            <Faq />
            <GetStarted />
            <Footer />
        </div>
    )
}

export default MainContent