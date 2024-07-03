import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile.svg'

const Hero = () => {
  return (
    <div className='hero'>
    <img src={profile_img} alt=''/>
    <h1><span>I'm Ihjas Abdullah,</span> frontend developer based in Sri Lanka.</h1>
    <p>I am a frontend developer from Colombo, Sri Lanka with 2 years of industrial experience in multiple companies like Acentura Inc and Metrics(pvt)Ltd.</p>
    <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
    </div>
    </div>
  )
}

export default Hero