import { Container, Row, Col, Nav, Tab } from "react-bootstrap"
import projImg1 from "../assets/images/project-img1.png";
import projImg2 from "../assets/images/project-img2.png";
import projImg3 from "../assets/images/project-img3.png";
import altprojImg1 from "../assets/images/proj-img1.jpg"
import altprojImg2 from "../assets/images/altproject-img2.png"
import fivehun from "../assets/images/localhost_3000_dashboard.png"
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/images/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import "swiper/css/pagination"
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel, Parallax } from 'swiper/modules';


export const Projects = () => {
    return (
        // Mousewheel
        // Parallax

        <div className="portfolio" id="projects">
            {/* heading */}
            <span style={{ color: 'white' }}>Recent Projects</span>

            {/* slider */}
            <Swiper
                slidesPerView={"auto"}
                grabCursor={true}
                className="portfolio-slider"
                navigation={true}
                pagination={{ clickable: true }}
                centeredSlides={true}
                speed={600}
                direction={"horizontal"}
                modules={[Mousewheel, Pagination, Parallax]}
                parallax={true}
                initialSlide={1}
            >
                {/* FIX make it so you get info about the project when you hover over
                    FIX  centering of projects */}
                <SwiperSlide>
                    <h3>Carry On</h3>
                    <a href="https://github.com/LydiaBloomfield/Carry-On" target="_blank"><img src={fivehun} alt="" /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <h3> Write to Image </h3>
                    <img src={projImg3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <h3> Stack Farm Overflow </h3>
                    <a href="https://github.com/Chaseforyourlife/HackDay2023" target="_blank"><img src={altprojImg2} alt="" /> </a>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}