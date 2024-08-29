import React from 'react'

import "./Contact .css";
export const Contact = () => {
  return (<>
    <div className='contact-container'>
        <div>
        <label for="name">Your name</label> <br/>
        <input className="name" ></input><br/>
        <label>Your last name</label><br/>
        <input className="lname" ></input><br/>
        </div>
        <div>
        <label>Your Email</label><br/>
        <input className="email" ></input><br/>
        <label>Your Message subject</label><br/>
        <input className="subject" type="text"></input><br/>
        <label>Message </label><br/>
        <input className="message" ></input><br/>
    </div>
    </div>
        <button className='message-btn'>Send</button>
</>
  )
}
export default Contact;