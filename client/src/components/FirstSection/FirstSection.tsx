import { Col, Container, Row, Button } from "react-bootstrap"
import "./FirstSection.css"

const FirstSection = () => {
    return (
        <Container className="first__section">
            <h1>We're a digital Marketing Agency based on Sala Al Jadida</h1>
            <h3>We help small business ...<br />... <br />..</h3>

            {/* Approach */}
            <Row className="approach">
                <Col xs={8} sm={8} md={7} className="approach__img__wrapper">
                    <div className="approach__img"></div>
                </Col>
                <Col xs={8} sm={8} md={5} className="approach__txt">
                    <h4>Our appraoch</h4>
                    <p>
                        The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps.
                        <br />
                        <br />

                        Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex!
                        <br />
                        <br />

                        Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox.
                    </p>
                    <Button variant="outline-secondary">More About us</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default FirstSection
