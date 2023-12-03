import React from 'react';
import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faSquareXTwitter,faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-info'>
                <img src="https://framerusercontent.com/images/tgELERqZ0nObn14bTi418qTbg.png?scale-down-to=512"></img>
                <div className='link-list'>
                    <ul>
                        <li><a>Features</a></li>
                        <li><a>FAQs</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonials</a></li>
                    </ul>
                </div>
            </div>
            <div className='footer-icons'>
            <p>© 2022 ManageWise, Inc.</p>
            <div className='social-media'>
            <FontAwesomeIcon className='ss-icon' icon={faInstagram} style={{color: "#000000",}} />
            <FontAwesomeIcon className='ss-icon' icon={faSquareXTwitter} style={{color: "#000000",}} />
            <FontAwesomeIcon className='ss-icon' icon={faLinkedin} style={{color: "#000000",}} />
            </div>
            </div>
            
        </div>
    )
}

export default Footer