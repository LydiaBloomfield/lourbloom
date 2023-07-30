import { Container, Row, Col, Nav, Tab } from "react-bootstrap"
import projImg1 from "../assets/images/project-img1.png";
import projImg2 from "../assets/images/project-img2.png";
import projImg3 from "../assets/images/project-img3.png";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/images/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';



import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
// import { themeContext } from "../Context";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


export const Projects = () => {

    // const theme = useContext(themeContext);
    // const darkMode = theme.state.darkMode;

    const projects = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
    ]

    return (
        // <section className="project" id="projects">
        //     <Container>
        //         <Row>
        //             <Col size={12}>
        //                 <TrackVisibility>
        //                     {({ isVisible }) =>
        //                         <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
        //                             <h2>Projects</h2>
        //                             <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        //                             <Tab.Container id="projects-tabs" defaultActiveKey="first">
        //                                 <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
        //                                     <Nav.Item>
        //                                         <Nav.Link eventKey="first">Tab 1</Nav.Link>
        //                                     </Nav.Item>
        //                                     <Nav.Item>
        //                                         <Nav.Link eventKey="second">Tab 2</Nav.Link>
        //                                     </Nav.Item>
        //                                     <Nav.Item>
        //                                         <Nav.Link eventKey="third">Tab 3</Nav.Link>
        //                                     </Nav.Item>
        //                                 </Nav>
        //                                 <Tab.Content id="slideInUp" className={""}>
        //                                     <Tab.Pane eventKey="first">

        //                                         <Row>
        //                                             {
        //                                                 projects.map((project, index) => {
        //                                                     return (

        //                                                         <ProjectCard
        //                                                             key={index}
        //                                                             {...project}
        //                                                         />
        //                                                     )
        //                                                 })
        //                                             }
        //                                         </Row>
        //                                     </Tab.Pane>
        //                                     <Tab.Pane eventKey="second">
        //                                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
        //                                     </Tab.Pane>
        //                                     <Tab.Pane eventKey="third">
        //                                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
        //                                     </Tab.Pane>
        //                                 </Tab.Content>
        //                             </Tab.Container>
        //                         </div>}
        //                 </TrackVisibility>
        //             </Col>
        //         </Row>
        //     </Container>
        //     <img className="background-image-right" src={colorSharp2}></img>
        // </section>




        <div className="portfolio" id="portfolio">
            {/* heading */}
            <span style={{ color: 'white' }}>Recent Projects</span>

            {/* slider */}
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                grabCursor={true}
                className="portfolio-slider"
                navigation={true}
                effect={"flip"}
                pagination={{ clickable: true }}
                centeredSlides={true}
                clickable={true}
            >
                <SwiperSlide>
                    <h3>Carry On</h3>
                    <a href="https://github.com/LydiaBloomfield/Carry-On" target="_blank"><img src={projImg1} alt=""/></a>
                </SwiperSlide>
                <SwiperSlide>
                    <h3> Stack Farm Overflow </h3>
                    <a href="https://github.com/Chaseforyourlife/HackDay2023" target="_blank"><img src={projImg2} alt="" /> </a>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={projImg3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={projImg2} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>

    )
}