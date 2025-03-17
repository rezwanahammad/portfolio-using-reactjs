import React, { useRef } from 'react'
import './Contact.css'
import facebooklogo from '../../assets/facebook-icon.png'
import instagramlogo from '../../assets/instagram.png'
import whatsapplogo from '../../assets/whatsappLogo.webp'
import linkedinlogo from '../../assets/linkedinLogo.png'
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_jx6ense', 'template_zoxuuqo', form.current, {
        publicKey: '_OKOT9pzv6N3ZjQzX',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Email Sent Successfully');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Email Sent Failed');
        },
      );
  };
  return (
    <section id='contact'>
      <div className="contact">
        <h1 className="contactPageTitle">Contact me</h1>
        <span className="contactPageDesc">Feel free to contact with me:</span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder='Your Name' name='your_name' />
          <input type="email" className="email" placeholder='Email' name='your_email' />
          <input type="text" className="subject" placeholder='Subject' />
          <textarea name="message" id="message" cols="30" rows="10" placeholder='Message'></textarea>
          <button type='submit' value='Send' className='submitBtn'>Submit</button>
          <div className="links">
            <a href="https://www.facebook.com/rezwan.ahammad.raad.2024/">
            <img src={facebooklogo} alt="facebooklogo" /></a>
            <a href="https://www.instagram.com/__raaaaaaaaad/">
            <img src={instagramlogo} alt="instagramlogo" /></a>
            <a href="https://web.whatsapp.com/">
            <img src={whatsapplogo} alt="whatsapplogo" /></a>
            <a href="https://www.linkedin.com/in/rezwan-ahammad-a684b024b/">
            <img src={linkedinlogo} alt="linkedinlogo" />
            </a>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
