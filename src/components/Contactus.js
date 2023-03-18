import React from "react";
import EmailJs from "emailjs-com";
import blue from "../assets/Images/blue.png";
import red from "../assets/Images/red.png";
import green from "../assets/Images/green.png"
import yellow from "../assets/Images/yellow.png"
import "../styles/Contact.css";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    const serviceID = "service_djqjatl";
    const templateID = "template_ouyqldx";
    const userID = "Tpl6t9veMcP4TEEFk";

    EmailJs.sendForm(serviceID, templateID, e.target, userID)
      .then((res) => {
        alert("Successfully Submitted.");
      })
      .catch((err) => alert("Oops! Try again, later."));
  }

  return (
    <div className="contact container">
    <img className="contactimg" src={blue} />
    <img className="contactimg" src={green} />
    <img className="contactimg" src={red} />
    <img className="contactimg" src={yellow} />
    <div>
      <h1 className="heading-contact">Contact Us</h1>
      
      <form onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="name" className="form-control" required />
        <label>Email ID</label>
        <input type="email" name="email" className="form-control" required />
        <label>Message</label>
        <textarea name="message" rows="3" className="form-control" required />
        <input
          type="submit"
          value="Send"
          className="form-control btn btn-primary"
        />
      </form>
      </div>
    </div>
  );
};


export default Contact;