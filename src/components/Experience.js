import { Row, Col, Container } from "react-bootstrap"
import colorSharp from "../assets/images/color-sharp.png"

export const Experience = () => {
    return(
        <section className="skill" id = "experience">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Experience
                            </h2>
                            <p>dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp}/>
        </section>
    )
}