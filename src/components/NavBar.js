import {Navbar, Nav, Container} from "react-bootstrap";
import { useState, useEffect } from "react";

import navIcon3 from '../assets/img/download (6).png';
import navIcon4 from '../assets/img/15.png';
import navIcon5 from '../assets/img/16.png';
import resume from '../assets/img/resume-joud-habib.pdf'

export const NavBar = () => {
const [activeLink, setActiveLink]=useState('home')
const [scrolled, setScrolled]=useState('false')

useEffect(() => {
  const onScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  window.addEventListener("scroll", onScroll);

  return () => window.removeEventListener("scroll", onScroll);
}, [])
const onUpdateActiveLink = (value) => {
  setActiveLink(value);
}
  return (

    <Navbar expand="md" className={scrolled?"scrolled":""}>
      <Container>
     
      <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle> 
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              <Nav.Link href="#connect" className={activeLink === 'connect' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('connect')}>Contact</Nav.Link>
              <Nav.Link href="https://drive.google.com/file/d/1wV33xWPBAkp28UPOchRU4EOT02Q1tKas/view?usp=drive_link"  className={activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('resume')}>Resume</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
              
                <a href="https://www.linkedin.com/in/joud-habib-784244224?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src={navIcon3} alt="" /></a>
                <a href="https://gitlab.com/Joudhabib"><img src={navIcon5} alt="" /></a>
                <a   href="mailto:joudhabib2000@gmail.com"><img src={navIcon4} alt="" /></a>
              
              </div>
         
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
  
}