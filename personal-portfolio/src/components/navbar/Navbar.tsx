import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navbar.css";

export default function NavbarComponent() {
    return (
        <Navbar bg="light" expand="lg" fixed="top">
            <Container fluid>
                <Navbar.Brand href="#home">Romerico David Jr</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarSupportedContent" />
                <Navbar.Collapse
                    id="navbarSupportedContent"
                    className="justify-content-end"
                >
                    <Nav>
                        <Nav.Link href="#about-me" className="custom-nav-link">
                            About Me
                            <img
                                src="../../../images/navbar-images/person.png"
                                alt="Home Page"
                                className="navbar-img"
                            />
                        </Nav.Link>
                        <Nav.Link
                            href="#work-experiences"
                            className="custom-nav-link"
                        >
                            Work Experiences
                            <img
                                src="../../../images/navbar-images/suitcase.png"
                                alt="Work Experiences!"
                                className="navbar-img"
                            />
                        </Nav.Link>
                        <Nav.Link href="#skills" className="custom-nav-link">
                            Skills
                            <img
                                src="../../../images/navbar-images/skills.png"
                                alt="Skills!"
                                className="navbar-img"
                            />
                        </Nav.Link>
                        <Nav.Link href="#projects" className="custom-nav-link">
                            Projects
                            <img
                                src="../../../images/navbar-images/folder.png"
                                alt="Projects!"
                                className="navbar-img"
                            />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
