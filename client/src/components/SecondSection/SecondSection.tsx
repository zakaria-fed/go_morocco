import { Col, Container, Row } from "react-bootstrap"
import "./SecondSection.css"

const SecondSection = () => {
    return (
        <Container fluid className="second__section">
            <Row className="second__section__wrapper container">
                <Col xs={10} sm={10} md={6} className="second__section__txt">
                    <h2>Agency Expertise</h2>
                    <p>The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps.
                        <br />
                        - Social Media Management
                        - Website Development
                        ...
                    </p>
                </Col>
                <Col xs={10} sm={10} md={6} className="second__section__img__wrapper">
                    <div className="second__section__img"></div>
                </Col>
            </Row>
        </Container>
    )
}

export default SecondSection
