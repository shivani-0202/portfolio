import React, { useRef } from 'react'
import './Contact.css'
import Walmart from '../../assets/walmart.png'
import Adobe from '../../assets/adobe.png'

import Microsoft from '../../assets/microsoft.png'

import Facebook from '../../assets/facebook.png'

import FacebookIcon from '../../assets/instagram.png'
import TwitterIcon from '../../assets/twitter.png'

import YouTubeIcon from '../../assets/youtube.png'

import InstagramIcon from '../../assets/instagram.png'

import emailjs from '@emailjs/browser';



const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_tq3ek15', 'template_57i7i0d', form.current, {
            publicKey: 'dEi4YYfNvMt1fLabO',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };


  return (
    <section id='contactPage'>
            <div id='clients'>

                <h1 className='contactPageTitle'>Want to work for</h1>
                <p className='clientDesc'>I have had the opportunity to work with a diverse group of companies. some of the notable companies I have worked with includes</p>
            
            <div className='clientImgs'>
                <img  src={Walmart} alt='clients' className='clientImg' />


                <img  src={Adobe} alt='clients' className='clientImg' />


                <img  src={Microsoft} alt='clients' className='clientImg' />


                <img  src={Facebook} alt='clients' className='clientImg' />
            </div>
            </div>


            <div id='contact'>

                <h1 className='contactPageTitle'>Contact Me</h1>

                <span className='contactDesc'>Please fill out the form below to discus any work opportunities</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type='text' className='name' placeholder='Your Name' name="user_name" />


                    <input type='email' className='email' placeholder='Your Email' name="user_email" />

                    <textarea name='message' rows="5"  className='msg' placeholder='Your Message'/>

                    <button type='submit' value='send' className='submitBtn' >Submit
                    {
                        console.log("kalsdj")
                    }
                    </button>



                    <div className='links'>
                        <img src={FacebookIcon} alt='' className='link' />


                        <img src={TwitterIcon} alt='' className='link' />

                        <img src={YouTubeIcon} alt='' className='link' />

                        <img src={InstagramIcon} alt='' className='link' />
                    </div>

                </form>
            </div>

    </section>
  )
}

export default Contact