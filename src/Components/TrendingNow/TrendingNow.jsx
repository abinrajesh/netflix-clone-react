import React from 'react'
import './TrendingNow.css';

function TrendingNow() {
    return (
        <div className='trending-now-container'>
            <div className="trending-now-title-container">
                <h2>Trending Now</h2>
            </div>
            <div className="trending-now-cards-container">
                <div className="trending-now-cards">
                    <div className="left-scroll-btn scroll-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 24 24" width="24" height="24" data-icon="ChevronLeftStandard" aria-hidden="true">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.41409 12L15.707 19.2928L14.2928 20.7071L6.29277 12.7071C6.10523 12.5195 5.99988 12.2652 5.99988 12C5.99988 11.7347 6.10523 11.4804 6.29277 11.2928L14.2928 3.29285L15.707 4.70706L8.41409 12Z" fill="currentColor"></path>
                        </svg>
                    </div>
                    <div className="trending-now-cards-list-container">
                        <ul className='trending-now-list'>
                            <li className='trending-now-card'>
                                <button>
                                    <div className="trending-now-poster"></div>
                                    <span className="trending-number-stroke">1</span>
                                    <span className='trending-number'>1
                                    </span>
                                </button>
                            </li>
                            <li className='trending-now-card'>
                                <button>
                                    <div className="trending-now-poster"></div>
                                    <span className='trending-number'>2
                                    </span>
                                </button>
                            </li>
                            <li className='trending-now-card'>
                                <button>
                                    <div className="trending-now-poster"></div>
                                    <span className='trending-number'>3
                                    </span>
                                </button>
                            </li>
                            <li className='trending-now-card'>
                                <button>
                                    <div className="trending-now-poster"></div>
                                    <span className='trending-number'>4
                                    </span>
                                </button>
                            </li>
                            <li className='trending-now-card'>
                                <button>
                                    <div className="trending-now-poster"></div>
                                    <span className='trending-number'>5
                                    </span>
                                </button>
                            </li>
                            <li className='trending-now-card'>
                                <button>
                                    <div className="trending-now-poster"></div>
                                    <span className='trending-number'>6
                                    </span>
                                </button>
                            </li>
                            <li className='trending-now-card'>
                                <button>
                                    <div className="trending-now-poster"></div>
                                    <span className='trending-number'>7
                                    </span>
                                </button>
                            </li>
                            <li className='trending-now-card'>
                                <button>
                                    <div className="trending-now-poster"></div>
                                    <span className='trending-number'>8
                                    </span>
                                </button>
                            </li>
                            <li className='trending-now-card'>
                                <button>
                                    <div className="trending-now-poster"></div>
                                    <span className='trending-number'>9
                                    </span>
                                </button>
                            </li>
                            <li className='trending-now-card'>
                                <button>
                                    <div className="trending-now-poster"></div>
                                    <span className='trending-number'>10
                                    </span>
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="right-scroll-btn scroll-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 24 24" width="24" height="24" data-icon="ChevronRightStandard" aria-hidden="true">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z" fill="currentColor"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrendingNow