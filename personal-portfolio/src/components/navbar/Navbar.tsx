import "./Navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#home">
                    Romerico David Jr
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a
                                className="nav-link custom-nav-link"
                                href="#about-me"
                            >
                                About Me
                                <img
                                    src="../../../images/navbar-images/person.png"
                                    alt="Home Page"
                                    className="navbar-img"
                                />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link custom-nav-link"
                                href="#work-experiences"
                            >
                                Work Experiences
                                <img
                                    src="../../../images/navbar-images/suitcase.png"
                                    alt="Work Experiences!"
                                    className="navbar-img"
                                />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link custom-nav-link"
                                href="#skills"
                            >
                                Skills
                                <img
                                    src="../../../images/navbar-images/skills.png"
                                    alt="Skills!"
                                    className="navbar-img"
                                />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link custom-nav-link"
                                href="#projects"
                            >
                                Projects
                                <img
                                    src="../../../images/navbar-images/folder.png"
                                    alt="Projects!"
                                    className="navbar-img"
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
