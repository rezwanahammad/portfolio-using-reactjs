import React from 'react'
import './Skills.css'
import webDesign from '../../assets/website-design.png'
import appDesign from '../../assets/app-design.png'
import photography from '../../assets/PhotographyLogo.png'


const Skills = () => {
  return (
    <section id="skills">
        <span className="skillTitle">What can i do?</span>
        <span className="skillDesc">I am a student who loves to do web designing, app designing,watching movie,series along with studies.<br/> I also enjoy photography and editing with Adobe Photoshop.</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={webDesign} alt="webDesign" className='skillBarImg' />
                <div className="skillBarText">
                    <h2>WebDesign</h2>
                    <p>I recently learned HTML, CSS, and React, and I'm excited to use them in my projects. This portfolio showcases my journey in web development and creativity.</p>
                </div>
            </div>

            <div className="skillBar">
                <img src={appDesign} alt="appDesign" className='skillBarImg' />
                <div className="skillBarText">
                    <h2>AppDesign</h2>
                    <p>I built app using Android Studio as part of my Android development journey, exploring mobile app creation. </p>
                </div>
            </div>

            <div className="skillBar">
                <img src={photography} alt="photography" className='skillBarImg' />
                <div className="skillBarText">
                    <h2>Photography</h2>
                    <p>I love to do photography</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills
