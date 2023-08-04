import { Navbar, Container, Nav, Col, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import logo from '../assets/images/logo.svg';
import logo2 from '../assets/images/logo2.svg';

import navIcon1 from '../assets/images/nav-icon1.svg';
import navIcon2 from '../assets/images/nav-icon2.svg';
import navIcon3 from '../assets/images/nav-icon3.svg';
import { HashLink } from "react-router-hash-link";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import {
  BrowserRouter as Router
} from "react-router-dom";
import resume from "../assets/resume.pdf"
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


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

  function onMenuClick() {
    var navbar = document.getElementById('navigation-bar-test');
    var responsive_class_name = 'responsive'
    navbar.classList.toggle(responsive_class_name)
}

  // FIX make resume page its own route instead of link to external 
  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <img className="logo" style={{ width: 50, height: 50 }} src={logo2} alt="Logo" />
      <Nav className="nav-bar-test">
        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
        <Nav.Link href="#experience" className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('experience')}>Experience</Nav.Link>
        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Technologies</Nav.Link>
        <Nav.Link href={resume} className="navbar-link" target="_blank">Resume</Nav.Link>
        {/* <Nav.Link Link to={"/timeline"} className='navbar-link'>Timeline</Nav.Link> */}

        <div className="social-icon">
        <a href="https://www.linkedin.com/in/lydia-bloomfield" target="_blank"><img src={navIcon1} alt="" /></a>
        <a href="https://github.com/LydiaBloomfield" target="_blank"><img src={navIcon2} alt="" /></a>
        <a href="#connect"><img src={navIcon3} alt="" /></a>
      </div>
      </Nav>
    </Navbar>
  )
}

