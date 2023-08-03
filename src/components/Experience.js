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
                                        Designed and constructed an internal State Farm GitLab web scraper to extract repositories/issues pertaining to Research & Development
                                    </li>
                                    <li>
                                        Enhanced researching productivity of the Research & Development Team on new tools and software
                                    </li>
                                    <li>
                                        Deployed scraper process within AWS Lambda, SQS, and S3 and implemented AWS infrastructure using Terraform
                                    </li>
                                    <li>
                                        Improved efficiency of scraping 4000+ repositories by 80% by integrating the GitLab API and AWS SQS queues
                                    </li>
                                </ul>
                            </section>

                            <section className="2xl:w-3/5 lg:w-11/12 w-full text-gray-700 2xl:text-2xl md:text-xl text-lg relative z-10 2xl:mx-auto md:mb-12 mb-10">
                                <div className="company">
                                    <h1 className="">State Farm</h1>
                                    <p className="">May 2023 - Aug 2023</p>
                                </div>
                                <div className="my-2 sm:text-xl text-lg 2xl:text-2xl">
                                    Software Engineering Intern, Customer Data Team
                                </div>
                                <br></br>
                                <ul className='list-disc list-outside font-light'>
                                    <li>
                                        Designed and constructed an internal State Farm GitLab web scraper to extract repositories/issues pertaining to Research & Development
                                    </li>
                                    <li>
                                        Enhanced researching productivity of the Research & Development Team on new tools and software
                                    </li>
                                    <li>
                                        Deployed scraper process within AWS Lambda, SQS, and S3 and implemented AWS infrastructure using Terraform
                                    </li>
                                    <li>
                                        Improved efficiency of scraping 4000+ repositories by 80% by integrating the GitLab API and AWS SQS queues
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