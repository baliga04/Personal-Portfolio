import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import location_icon from '../../assets/location_icon.svg'

const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-title">
        <h1>Get In Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's Talk</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus fugit ratione quidem alias eveniet vel gfuyvb uvgiuvgu</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail_icon} alt="" /> <p>adithyabaliga04@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={call_icon} alt="" /> <p>+91 7760700050</p>
                </div>
                <div className="contact-detail">
                    <img src={location_icon} alt="" /> <p>Mysuru, Karnataka India 570006</p>
                </div>
            </div>
        </div>

        <form className='contact-right'>
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter Your Name' name='name'/>
            <label htmlFor="">Your E-mail</label>
            <input type="email" placeholder='Enter Your Email' name='email'/>
            <label htmlFor="">Write Your Message Here</label>
            <textarea name="message" rows="8" placeholder='Enter Your Message'></textarea>
            <button className='contact-submit' type='submit'>Submit Now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
