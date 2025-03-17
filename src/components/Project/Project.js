import React from 'react'
import './Project.css'
import cppLogo from '../../assets/cpp_logo.png'
import androidStudioLogo from '../../assets/androidStudio_logo.png'
import reactLogo from '../../assets/reactLogo.png'

const Project = () => {
  return (
    <section id="Projects">
        <span className="ProjectsTitle">Projects</span>
        <span className="ProjectsDesc">Here are some of the projects I have worked on, showcasing my skills in C++, Android development, and React.</span>
        
        <div className="projectBars">
            <div className="projectBar">
                <img src={cppLogo} alt="cppLogo" className='projectBarImg' />
                <div className="projectBarText">
                    <h2>Building Management System</h2>
                    <p>I've made an OOP-based project named the Building Management System using C++. This Property Management System manages tenants, flats, and billing in a building.</p>
                    <a href="https://github.com/rezwanahammad/building-management">Building Management System</a>

                    <h2>Emergency Surveillance System</h2>
                    <p>Developed an Emergency Surveillance System using C++ with features like emergency service details, user authentication, and feedback collection.</p>
                    <a href="https://github.com/rezwanahammad/Emergency-Surveillence-System/blob/main/trivia.cpp">Emergency Surveillance System</a>

                </div>
            </div>

            <div className="projectBar">
                <img src={androidStudioLogo} alt="androidStudioLogo" className='projectBarImg' />
                <div className="projectBarText">
                    <h2>NewsBit</h2>
                    <p>An Android studio app.One can read all types of news from Here</p>
                    <a href="https://github.com/rezwanahammad/NewsBit">NewsBit</a>
                </div>
            </div>

            <div className="projectBar">
                <img src={reactLogo} alt="reactLogo" className='projectBarImg' />
                <div className="projectBarText">
                    <h2>Edusity</h2>
                    <p>A React-based website named Edusity clone, an educational platform.</p>
                    <a href="https://github.com/rezwanahammad/edusity_clone">Edusity</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Project
