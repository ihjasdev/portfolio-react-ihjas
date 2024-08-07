import React from 'react'
import './Footer.css'
import user_icon from '../../assets/user.png'
import logo from "../../assets/Logo.svg"

const Footer = () => {
    let currentYear = new Date().getFullYear()
  return (
    <div className='footer'>
    <div className="footer-top">
        <div className="footer-top-left">
            <img src={logo} alt=''/>
            <p>I'm a frontend developer from, Sri Lanka with 1.5 years of experience in companies like Acentura Inc and Hashnate.</p>
        </div>
        <div className="footer-top-right">
        <div className="footer-email-input">
            <img src={user_icon} alt=''/>
            <input type='email'  placeholder='Enter your email'/>
        </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
    </div>
    <hr />
    <div className="footer-bottom">
        <p className='footer-bottom-left'>© {currentYear} Ihjas Abdullah. All rights reserved.</p>
        <div className="footer-bottom-right">
            <p>Terms of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
    </div>
    </div>
  )
}

export default Footer