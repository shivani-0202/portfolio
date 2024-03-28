import React from 'react'
import './Skills.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>
        I'm a passionate and dedicated professional currently working as an Email Designer. With a strong foundation in HTML and CSS, I've been creating visually appealing and engaging email campaigns to enhance brand communication and drive customer engagement. While I've enjoyed my time in email design, I'm now looking to transition into Frontend Development to expand my skill set and work on more dynamic web projects.

        </span>

        <div className='skillBars'>
            <div className='skillBar'>
                <img src={UIDesign} alt='UIDesign' className='skillBarImg'></img>

                <div className='skillBarText'>
                    <h2>UI/UX Design</h2>
                    <p>This is a demo text, you can write your own content here</p>
                </div>
            </div>



            <div className='skillBar'>
                <img src={WebDesign} alt='WebDesign' className='skillBarImg'></img>

                <div className='skillBarText'>
                    <h2>Website design</h2>
                    <p>This is a demo text, you can write your own content here</p>
                </div>
            </div>



            <div className='skillBar'>
                <img src={AppDesign} alt='AppDesign' className='skillBarImg'></img>

                <div className='skillBarText'>
                    <h2>App design</h2>
                    <p>This is a demo text, you can write your own content here</p>
                </div>
            </div>
        </div>




    </section>
  )
}

export default Skills