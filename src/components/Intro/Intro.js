import React from 'react'
import './Intro.css'
import bg from '../../assets/raadPic2.webp'

const Intro = () => {
  return (
        <section id="intro">
            <div className="introcontent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Raad </span><br/>CS Student</span>
            <p className="intropara">I am a 3rd year undergraduate student doing major in <br/>Computer Science and Engineering at Khulna University of <br/>Engineering & Technology(KUET) </p>
            </div>
            <img src={bg} alt="Profile" className='bg'/>
        </section>
  )
}
export default Intro
