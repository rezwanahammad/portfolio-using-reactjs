import React from 'react'
import './Academics.css'
import kuetLogo from '../../assets/KuetLogo.png'
import amcLogo from '../../assets/AMC_logo.png'
import mzsLogo from '../../assets/mzs_logo.png'

const Academics = () => {
  return (
    <section id='Academics'>
        <span className='AcademicsTitle'>Academics</span>
        <span className='AcademicsDesc'>
            <div className="undergrade">
                <img src={kuetLogo} alt="kuetLogo" className='kuetLogo' />
                <div className="undergradeText">
                    <h2>Undergraduate</h2>
                    <p>I am currently pursuing a Bachelor's degree in Computer Science and Engineering at KUET. I am in my 3rd year of study and have completed a variety of courses in programming, data structures, algorithms, and software engineering.</p>
                </div>
            </div>

            <div className="HSC">
                <img src={amcLogo} alt="amcLogo" className='amcLogo' />
                <div className="hscText">
                    <h2>HSC</h2>
                    <p>I have completed my college level education from Ananda Mohan College,Mymensingh with a grade of 5.00 also with a board scholarship</p>
                </div>
            </div>

            <div className="SSC">
                <img src={mzsLogo} alt="mzsLogo" className='mzsLogo' />
                <div className="sscText">
                    <h2>SSC</h2>
                    <p>I have completed my school level education from Mymensingh Zilla School with a grade of 5.00 also with a board scholarship</p>
                </div>
            </div>
        </span>
    </section>
  )
}

export default Academics
