import { Container, Nav, Navbar } from "react-bootstrap"
import { FaLanguage } from "react-icons/fa"
import "./NavBar.css"

const NavBar = () => {
    return (
        <Navbar expand="sm" variant="dark" bg="dark">
            <Container>
                <Navbar.Brand>Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar__content" />
                <Navbar.Collapse className="justify-content-end" id="navbar__content">
                    <Nav className="justify-content-end">
                        <Nav.Item>
                            <Nav.Link href="/home">Services</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>Contact</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <FaLanguage className="lang" color="white" />
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
