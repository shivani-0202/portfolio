import React from 'react'
import './Intro.css'
import bg from '../../assets/WhatsApp_Image_2024-03-26_at_2.04.10_PM-removebg-preview.png'
import {Link} from 'react-scroll'
import btnImg  from '../../assets/hireme.png'

const Intro = () => {
  return (
    <section id='intro'>
      <div className="introContent">
      <span className='hello'>Hello</span>
      <span className='introText'>I'm <span className='introName'>Shivani</span> <br>

      </br> Website Designer </span>
      <p className='introPara'>I am a skilled web designer with experience in creating <br></br> visually appealing and user friendly Website</p>
        <Link><button className='btn'><img src={btnImg} alt='hire me' className='btnImg'></img> Hire Me</button></Link>
        </div>

        <img src={bg} alt='' className='bg'></img>
    </section>
  )
}

export default Intro;