import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/images/color-sharp.png"
import java from "../assets/images/technologies/java.png"
import cpp from "../assets/images/technologies/c++.svg"
import python from "../assets/images/technologies/python.png"
import javascript from "../assets/images/technologies/javascript.png"
import css from "../assets/images/technologies/css.png"
import html from "../assets/images/technologies/html.png"
import git from "../assets/images/technologies/git.png"
import react from "../assets/images/technologies/react.png"
import sql from "../assets/images/technologies/sql.png"
import mongodb from "../assets/images/technologies/mongodb.png"
import node from "../assets/images/technologies/node.png"
import gosu from "../assets/images/technologies/gosu.png"
import R from "../assets/images/technologies/R.png"

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 7
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    //FIX implement scrolling on carousel
    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Technologies
                            </h2>
                            <p></p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={java} alt="image" />
                                    <h5> Java </h5>
                                </div>
                                <div className="item">
                                    <img src={python} alt="image" />
                                    <h5> Python </h5>
                                </div>
                                <div className="item">
                                    <img src={cpp} alt="image" />
                                    <h5> C++ </h5>
                                </div>
                                <div className="item">
                                    <img src={javascript} alt="image" />
                                    <h5> Javascript</h5>
                                </div>
                                <div className="item">
                                    <img src={react} alt="image" />
                                    <h5> React</h5>
                                </div>
                                <div className="item">
                                    <img src={html} alt="image" />
                                    <h5> html</h5>
                                </div>
                                <div className="item">
                                    <img src={css} alt="image" />
                                    <h5> CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={sql} alt="image" />
                                    <h5> SQL</h5>
                                </div>
                                {/* FIX this one */}
                                <div className="item">
                                    <img src={R} alt="image" />
                                    <h5> R </h5>
                                </div>
                                <div className="item">
                                    <img src={git} alt="image" />
                                    <h5> git</h5>
                                </div>
                                <div className="item">
                                    <img src={mongodb} alt="image" />
                                    <h5> mongoDB</h5>
                                </div>
                                <div className="item">
                                    <img src={node} alt="image" />
                                    <h5> node.JS</h5>
                                </div>
                                <div className="item">
                                    <img src={gosu} alt="image" />
                                    <h5> Gosu </h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
    )
}