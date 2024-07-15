import './Navbar.css'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Romerico David
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
                            <a className="nav-link active" href="home">
                            <img
                                    src="/src/assets/images/home-closed.png"
                                    alt="Home Page"
                                    className="navbar-img"
                                />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="about-me">
                                <img
                                    src="/src/assets/images/person-closed.png"
                                    alt="About Me!"
                                    className="navbar-img"
                                />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="experiences">
                                <img
                                    src="/src/assets/images/experience-closed.png"
                                    alt="Work Experiences!"
                                    className="navbar-img"
                                />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="projects-and-skills">
                                <img
                                    src="/src/assets/images/folder-closed.png"
                                    alt="Projects and Skills!"
                                    className="navbar-img"
                                />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="contact-info">
                                <img
                                    src="/src/assets/images/contact-closed.png"
                                    alt="My Contacts!"
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
