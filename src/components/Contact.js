import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/images/contact-img.svg"

export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({})

    const onFormUpdate = (category, value) =>{
        setFormDetails({
            ...formDetails, [category] : value }
        )
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        setButtonText("Sending...")
        let response = await fetch("lourbloom/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify(formDetails)
        });
        let result = await response.json();
        setButtonText("Send");
        setFormDetails(formInitialDetails);
        if(result.code == 200){
            setStatus({success: true, message: "Message sent successfully"})
        } else{
            setStatus({success: false, message: "Something went wrong!"})
        }
    }

    return (
        <section className="contact">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        {/* <img src={contactImg}></img> */}
                    </Col>
                    <Col md={6}  id="connect">
                        <h2> Get in Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder= "First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)}></input>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.lastName} placeholder= "Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}></input>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" value={formDetails.email} placeholder= "Email Address" onChange={(e) => onFormUpdate('email', e.target.value)}></input>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="tel" value={formDetails.phone} placeholder= "Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}></input>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <textarea row="6" value={formDetails.message} placeholder= "Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                        <p className={status.success === false? "danger" : "success"}></p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}