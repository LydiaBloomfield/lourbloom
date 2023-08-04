import { Container, Row, Col } from "react-bootstrap"
import logo from "../assets/images/logo.svg"
import logo2 from "../assets/images/logo2.svg"
import navIcon1 from "../assets/images/nav-icon1.svg";
import navIcon2 from "../assets/images/nav-icon2.svg";
import navIcon3 from "../assets/images/nav-icon3.svg";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="flex">
                    <Col sm={6}>
                        {/* <img src={logo2} style={{width:100, height:100}}alt="Logo"></img> */}
                    </Col>
                    <Col sm={6} className=''>
                        <p> Copyright 2023. All Rights Reserved.</p>
                        {/* <div className="social-icon">
                            <a href="https://www.linkedin.com/in/lydia-bloomfield"><img src={navIcon1} alt="" /></a>
                            <a href="https://github.com/LydiaBloomfield"><img src={navIcon2} alt="" /></a>
                            <a href="#contact"><img src={navIcon3} alt="" /></a>
                        </div> */}
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}