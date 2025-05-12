import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
        <div className="footer">
            <div className="footer-overlay" id="contact-us">
                <div className="contact-us">
                    <h3 className='theme-color'>CONTACT US</h3>
                    <div className="contact-container">
                        <div className="mobile-footer">
                            <a href="sms:214-556-8482"><img className="my-icons" src={require("../../images/text-icon.png")} alt='SMS message icon'/></a>
                            <a href="tel:214-556-8482"><img className="my-icons" src={require("../../images/phone-icon.png")} alt='Phone icon'/></a>
                            {/* <a href="mailto:mobiledentandscratchrepair@yahoo.com"><img className="my-icons" src={require("../../images/email-icon.webp")} alt='Email icon'/></a> */}
                        </div>
                        <div className="desktop-footer">
                        <p>CALL OR TEXT:  <b><a href="sms:214-556-8482">214-556-8482</a></b></p>
                        </div>
                    </div>
                </div>
                <div className="contact-us">
                    <h3 className='theme-color'>HOURS</h3>
                    <p>Monday - Saturday: 8AM - 8PM.</p>
                </div>
                <div className="contact-us">
                <h3 className='theme-color'>ADDRESS</h3>
                    <p> <b>Dallas:</b> 11504 Garland Rd #180, Dallas, TX, 75218.</p>
                    <br />
                    <p> <b>Garland:</b> 108 E Avenue D, Garland, TX 75040.</p>
                </div>
            </div>
        </div>
        <div className="copyright">
            TRUE KINGS AUTO BODY LLC 2025.
        </div>
    </footer>
  )
}

export default Footer