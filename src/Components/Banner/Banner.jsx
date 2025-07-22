import React from 'react'
import './Banner.css';
import '../Buttons/Buttons.css';
import Curve from '../Curve/Curve';

function Banner() {
    return (
        <div className='banner'>
            <div className="content">
                <div className="description">
                    <h1>Unlimited movies, TV shows and more</h1>
                    <p>Starts at ₹149. Cancel at any time.</p>
                </div>
                <div className="get-started-container">
                    <form action="">
                        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                        <div className="submit-email">
                            <div className="email-input">
                                <input type="email" />
                                <span className='email-placeholder'>Email address</span>
                            </div>
                            <div className="get-stared-btn">
                                <button className='red-btn-hwr'>
                                    <span>Get started
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 24 24" width="24" height="24" data-icon="ChevronRightStandard" aria-hidden="true">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z" fill="currentColor"></path>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Curve />
        </div>
    )
}

export default Banner