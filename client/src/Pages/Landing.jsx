import React, { useState } from 'react';
import '../styles/landing.css';
import About1 from '../assets/image3.jpg';
import About2 from '../assets/image4.jpg';
import Login from '../components/Login';
import Register from '../components/Register';

const Landing = () => {

    const [isLoginBox, setIsLoginBox] = useState(true);


  return (
    <div className='landingPage'>
        
        <div className="landing-header">
            <span className="landing-header-logo"><img src="" alt="" /></span>
            <ul>
                <li className='header-li'><a href="#home">Home</a></li>
                <li className='header-li'><a href="#about">About</a> </li>
                <li className='header-li'><a href="#home">Join now</a></li>
            </ul>
        </div>


        <div className="landing-body">

            <div className="landing-hero" id='home'>
                <div className="landing-hero-content">
                    <h1>SVIT Bank</h1>
                    <p>Empower your financial journey with our intuitive bank application. Seamlessly manage your accounts, transfer funds securely, and stay informed with real-time transaction updates—all within a sleek, user-friendly interface designed to simplify your banking experience </p>

                    <div className="authentication-form">

                        { isLoginBox ?

                            <Login setIsLoginBox={setIsLoginBox} />
                            :
                            <Register setIsLoginBox={setIsLoginBox} />
                        }

                    </div>

                </div>


                <div className="landing-hero-image">
                    
                        <div id='landing-image-sidebar-left'></div>
                        <div className="back"></div>
                        <div id='landing-image-sidebar-right'></div>
                   
                </div>
            </div>

            <div className="landing-about" id='about'>

                <div className="about-1">
                    <img src={About1} className='about-1-img' alt="" />
                    <div className="about-1-content">

                        <h3>Our Commitment to Security</h3>
                        <p>Ensuring the security of your financial transactions is our top priority. We employ state-of-the-art encryption protocols and multi-factor authentication to safeguard your sensitive information. Our continuous monitoring and proactive security measures provide you with peace of mind, knowing that your online banking activities are protected against unauthorized access and fraud.</p>
                        <a href='#home'>Join now!!</a>

                    </div>
                </div>
                <div className="about-2">
                    <div className="about-2-content">
                        <h3>Customer-Centric Innovation</h3>
                        <p>At SVIT, we are dedicated to enhancing your banking experience through innovative digital solutions. Our online platform is designed with your convenience in mind, offering intuitive features such as mobile banking, real-time account monitoring, and easy fund transfers. We strive to continually innovate and adapt to meet your evolving financial needs, ensuring seamless access to banking services anytime, anywhere.</p>
                        <a href='#home'>Join now!!</a>
                    </div>
                    <img src={About2} className='about-2-img' alt="" />
                </div>

            </div>

            <div className="footer">
                <p>All rights reserved - &#169; SVIT</p>
            </div>


        </div>

    </div>
  )
}

export default Landing