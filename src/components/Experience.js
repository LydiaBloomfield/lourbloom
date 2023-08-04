import { Row, Col, Container } from "react-bootstrap"
import colorSharp from "../assets/images/color-sharp.png"

export const Experience = () => {
    return (
        <section className="experience" id="experience">
            <Container>
                <Row>
                    <Col>
                        <div>
                            <h1>
                                Experience
                            </h1>
                            <section>
                                <div className="experience-company">
                                    <h2>State Farm</h2>
                                    <p>May 2023 - Aug 2023</p>
                                </div>
                                <div className="experience-team">
                                    Software Engineering Intern, DevOps Enablement Team
                                </div>
                                <br></br>
                                <ul className='experience-desc'>
                                    <li>
                                        Fully developed the API for a tool with 75,000 data entries and capable of being used by the entire P&C Auto/Fire division of the company.
                                    </li>
                                    <li>
                                        Implemented front and back end components utilizing Python, ReactJS, Flask, and SQL.
                                    </li>
                                    <li>
                                        Created a consultation request capability allowing consumers of the team's product to request assistance. Requests directly generate gitLab issues for the team's review.
                                    </li>
                                    <li>
                                        Enhanced the database for a tool designed to determine if consumers' services are up and running.
                                    </li>
                                </ul>
                            </section>

                            <section>
                                <div className="experience-company">
                                    <h2>State Farm</h2>
                                    <p>May 2022 - Aug 2022</p>
                                </div>
                                <div className="experience-team">
                                    Software Engineering Intern, Customer Data Team
                                </div>
                                <br></br>
                                <ul className='experience-desc'>
                                    <li>
                                        Enhanced Customer Data Integrator and Policy Center.
                                    </li>
                                    <li>
                                        Worked with Java and Guidewire-specific Gosu for issues relating to performance improvements, test cases, and consolidation across codebases.
                                    </li>
                                </ul>
                            </section>

                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
    )
}