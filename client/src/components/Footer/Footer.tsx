import { Container, Button, Row, Col } from "react-bootstrap"
import "./Footer.css"

const Footer = () => {
    return (
        <Container fluid className="footer">
            {/* Top Section */}
            <Container className="footer__top">
                <div className="footer__top__titles">
                    <h2>Follow US</h2>
                    <h6>in Social Channels</h6>
                </div>

                <Row className="footer__top__apps justify-content-center">
                    <div className="footer__app fb"></div>
                    <div className="footer__app insta"></div>
                    <div className="footer__app linkedIn"></div>
                </Row>
            </Container>

            {/* Bottom Section */}
            <div className="footer__bottom">
                <h2></h2>
                {/* <Button variant="light">Contact Us</Button> */}
            </div>
        </Container>
    )
}

export default Footer
