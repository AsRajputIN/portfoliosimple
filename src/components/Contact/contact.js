import React, { useRef } from 'react'
import './contact.css'
import Walmart from '../../assets/walmart.png'
import Adobe from '../../assets/adobe.png'
import Microsoft from '../../assets/microsoft.png'
import Facebook from '../../assets/facebook.png'
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YoutubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_itiaxwt', 'template_shyvd5k', form.current, 'So1NNNKA66Es4GL7W')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <section id="contactPage">
        <div id="clients">
            <h1 className="contactPageTitle">My clients</h1>
            <p className="clientDesc">U have had the opportunity to work with a diverse group of companies.
            Some of the notable companies I have worked with includes</p>
            <div className="clientsImgs">
                <img src={Walmart} alt="" className="clientImg" />
                <img src={Adobe} alt="" className="clientImg" />
                <img src={Microsoft} alt="" className="clientImg" />
                <img src={Facebook} alt="" className="clientImg" />
            </div>
        </div>
        <div id="contact">
            <h1 className='contactPageTitle'>Conatact Me</h1>
            <span className="contactDesc">Please fill out the form below to discuss any work opportunity</span>
            <form  className='contactForm' ref={form}  onSubmit={sendEmail} >
                <input placeholder="Your name" name="user_name" className='name'/>
                <input type="email" name="user_email" placeholder="Your Email" className="email" />
                <textarea className="msg" placeholder="Your Message" rows="5" name='message' />
                <button type="button" value="Send" className='submitBtn' onClick={sendEmail} >Submit</button>
                <div className="links">
                    <img src={FacebookIcon} alt="Facebook" className="link" />
                    <img src={TwitterIcon} alt="Twitter" className="link" />
                    <img src={YoutubeIcon} alt="Youtube" className="link" />
                    <img src={InstagramIcon} alt="Instagram" className="link" />
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact