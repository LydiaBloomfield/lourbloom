import { Container, Row, Col, Nav } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/images/header-img.svg"
import { useEffect, useState } from "react"
import TrackVisibility from "react-on-screen"
import { isVisible } from "@testing-library/user-event/dist/utils"
import resume from "../assets/resume.pdf"

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"]
    const [text, setText] = useState('');
    const [index, setIndex] = useState(1);
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) }
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
        setText(updatedText);
        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setDelta(500)
        }
    }


    return (
        <section className="banner" id="home">
            <Container>
                <Row className='align-items-center'>

                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {/* fix animations */}
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate_animated animate_bounce" : ""}>
                                    <span className="tagline">Welcome to my Portfolio</span>
                                    <h1>{"Hi I'm Lydia "}<br/>
                                    {/* <span className="wrap">{text}</span> */}
                                    </h1>
                                    <p> This is the work-in-progress accumulation of my past work as well as a testing ground for any passion projects. Here you can find my experience, familiar technologies, and recent projects. Please feel free to look around or glance at my <a href={resume} className="resume-link" target="_blank"> resume. </a></p>
                                    <Nav.Link className="" href="#connect"><button onClick={() => console.log('connect')}> Let's connect <Nav.Link href="#connect"><ArrowRightCircle size={25} /></Nav.Link></button></Nav.Link>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}