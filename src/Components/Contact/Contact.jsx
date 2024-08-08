import React, {useRef} from "react";
import "./Contact.css";
import pattern_theme from "../../assets/pattern_theme1.svg";
// import email_icon from "../../assets/email_icon.svg";
// import location_icon from "../../assets/location_icon.svg";
// import call_icon from "../../assets/call_icon.svg";
import mail from "../../assets/images/email.png"
import call from "../../assets/images/call.png"
import location from "../../assets/images/location.png"


export const Contact = () => {
  const formRef = useRef(null); 

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "8565c752-8671-423c-8cc2-8ca4e634cfa6");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message)
      formRef.current.reset();
    }
  };


  return (
    <div id="contact" className="contact">
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
        <form ref={formRef} onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder="Enter your name" name="name"/>
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder="Enter your email" name="email"/>
            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows="8" placeholder="Enter your message"></textarea>
            <button type="submit"className="contact-submit">Submit now</button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
