import React from "react";
import "./Contact.css";
import pattern_theme from "../../assets/pattern_theme1.svg";
import email_icon from "../../assets/email_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import mail from "../../assets/images/email.png"
import call from "../../assets/images/call.png"
import location from "../../assets/images/location.png"


export const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-tittle">
        <h1>Get in touch</h1>
        <img src={pattern_theme} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects,so feel free to send
            me a message about anything that you want me to work on. You can
            contact anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail} alt="" />
              <p>ihjasdev@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call} alt="" />
              <p>+94766313173</p>
            </div>
            <div className="contact-detail">
              <img src={location} alt="" />
              <p>Colombo, Sri Lanka</p>
            </div>
          </div>
        </div>
        <form action="" className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder="Enter your name" name="name"/>
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder="Enter your email" name="name"/>
            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows="8" placeholder="Enter your message"></textarea>
            <button type="submit"className="contact-submit">Submit now</button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
