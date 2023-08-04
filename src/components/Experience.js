import { Row, Col, Container } from "react-bootstrap"
import colorSharp from "../assets/images/color-sharp.png"

export const Experience = () => {
    return (
        <section className="experience" id="experience">
            <Container>
                <Row>
                    <Col>
                        <div className="experience-bx">
                            <h1>
                                Experience
                            </h1>
                            <section className="2xl:w-3/5 lg:w-11/12 w-full text-gray-700 2xl:text-2xl md:text-xl text-lg relative z-10 2xl:mx-auto md:mb-12 mb-10">
                                <div className="company">
                                    <h1 className="">State Farm</h1>
                                    <p className="">May 2023 - Aug 2023</p>
                                </div>
                                <div className="my-2 sm:text-xl text-lg 2xl:text-2xl">
                                    Software Engineering Intern, DevOps Enablement Team
                                </div>
                                <br></br>
                                <ul className='list-disc list-outside font-light'>
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

                            <section className="2xl:w-3/5 lg:w-11/12 w-full text-gray-700 2xl:text-2xl md:text-xl text-lg relative z-10 2xl:mx-auto md:mb-12 mb-10">
                                <div className="company">
                                    <h1 className="">State Farm</h1>
                                    <p className="">May 2022 - Aug 2022</p>
                                </div>
                                <div className="my-2 sm:text-xl text-lg 2xl:text-2xl">
                                    Software Engineering Intern, Customer Data Team
                                </div>
                                <br></br>
                                <ul className='list-disc list-outside font-light'>
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