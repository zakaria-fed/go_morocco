import { Col, Container, Navbar, Row } from "react-bootstrap"
import "./LittleNavBar.css"

import { IoIosMail, IoLogoFacebook } from "react-icons/io"
import { AiFillInstagram } from "react-icons/ai"
import { FaLinkedinIn } from "react-icons/fa"
import { FiPhoneCall } from "react-icons/fi"

const LittleNavBar = () => {
    return (
        <Navbar className="little__navbar">
            <Container>
                <Navbar.Text>
                    <a href="mailto:go.media.slj@gmail.com">
                        <Row className="coordinate__wrapper justify-content-center">
                            {/* Email */}
                            <Col className="coordinate">
                                <Col xs={2} md={2} lg={2}>
                                    <IoIosMail color="black" />
                                </Col>
                                <Col xs={10} md={10} lg={10}>
                                    <span className="littlenav__text">
                                        Send an Email
                                    </span>
                                </Col>
                            </Col>

                            <Col className="coordinate">
                                {/* Call */}
                                <Col xs={2} md={2} lg={2}>
                                    <FiPhoneCall color="black" />
                                </Col>
                                <Col xs={10} md={10} lg={10}>
                                    <span className="littlenav__text">
                                        Make a Call
                                    </span>
                                </Col>
                            </Col>

                        </Row>
                    </a>
                </Navbar.Text>
                <Navbar.Text className="justify-content-end">
                    <Row>
                        <Col>
                            <IoLogoFacebook className="smm_icons" color="black" />
                        </Col>
                        <Col>
                            <AiFillInstagram className="smm_icons" color="black" />
                        </Col>
                        <Col>
                            <FaLinkedinIn className="smm_icons" color="black" />
                        </Col>
                    </Row>
                </Navbar.Text>
            </Container>
        </Navbar>
    )
}

export default LittleNavBar
