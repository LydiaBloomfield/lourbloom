import { Navbar, Container, Nav, Col, Row} from "react-bootstrap";
import { useState, useEffect } from "react";
import logo from '../assets/images/logo.svg';
import navIcon1 from '../assets/images/nav-icon1.svg';
import navIcon2 from '../assets/images/nav-icon2.svg';
import navIcon3 from '../assets/images/nav-icon3.svg';
import { HashLink } from "react-router-hash-link";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      }
      else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  })

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Nav className="test">
          {/* <div className="nav-parent"> */}
            <img className="logo" sm={6} src={logo} alt="Logo" />

            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Technologies</Nav.Link>
            <Nav.Link href="#projects" className="navbar-link">Experience</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            <Nav.Link Link to={"/timeline"} className='navbar-link'>Timeline</Nav.Link>

            <div className="social-icon">
              <a href="https://www.linkedin.com/in/lydia-bloomfield" target="_blank"><img src={navIcon1} alt="" /></a>
              <a href="https://github.com/LydiaBloomfield" target="_blank"><img src={navIcon2} alt="" /></a>
              <a href="#connect"><img src={navIcon3} alt="" /></a>
              <button onClick={() => console.log('connect')}>Resume</button>
            </div>
          {/* </div> */}
      </Nav>
    </Navbar>




  )
}

