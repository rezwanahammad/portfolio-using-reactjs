import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import mainLogo2 from '../../assets/mainLogo2.png'
import { Link } from 'react-scroll'
import contactimg from '../../assets/contact.png'
import raadLogo from '../../assets/raadLogo.png'

const Navbar = () => {
  const[showMenu,setShowMenu]=useState(false);

  return (
    <nav className="navbar">
        <img src={mainLogo2} alt="logo" className='logo' />
        <div className="desktopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-75} duration={500} className="desktopMenuItemList">Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuItemList">About</Link>
            <Link activeClass='active' to='Academics' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuItemList">Academics</Link>
            <Link activeClass='active' to='Projects' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuItemList">Projects</Link>
            <Link activeClass='active' to='Photography' spy={true} smooth={true} offset={-75} duration={500} className="desktopMenuItemList">Photography</Link>
        
        </div>
        <button className="desktopMenuBtn" onClick={()=>{
          document.getElementById('contact').scrollIntoView({behavior:'smooth'});
        }}>
            <img src={contactimg}  alt="contactimg" className='desktopMenuImg' />Contact Me
        </button>

       <img src={raadLogo} alt="menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)} />
        <div className="navMenu" style={{display:showMenu?'flex':'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-75} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
            <Link activeClass='active' to='Academics' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Academics</Link>
            <Link activeClass='active' to='Projects' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Projects</Link>
            <Link activeClass='active' to='Photography' spy={true} smooth={true} offset={-75} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Photography</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-75} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>
        
        </div>

    </nav>
  )
}

export default Navbar
