import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Hero.css'
import profile_img from '../../assets/profile.svg'

const Hero = () => {
  return (
    <div id='home' className='hero'>
    <img src={profile_img} alt=''/>
    <h1><span>I'm Ihjas Abdullah,</span> frontend developer based in Sri Lanka.</h1>
    <p>I am a frontend developer from Colombo, Sri Lanka with 2 years of industrial experience in multiple companies like Acentura Inc and Metrics(pvt)Ltd.</p>
    <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact' >Connect with Me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
    </div>
    </div>
  )
}

export default Hero