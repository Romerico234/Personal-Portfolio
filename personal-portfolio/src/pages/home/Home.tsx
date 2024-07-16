import "./Home.css";
import me from "../../assets/images/home-page-images/me.png";
import github_logo from "../../assets/images/home-page-images/github_logo.png";
import linkedin_logo from "../../assets/images/home-page-images/linkedin_logo.png";
import email_logo from "../../assets/images/home-page-images/email_logo.png";
import { useState } from "react";

export default function Home() {
    const [description] = useState(
        "Hey there! I'm currently an undergraduate student at Towson University, set to graduate in May 2026 with a major in computer science. I aspire to become a Software Engineer and I'm open to exploring opportunities in the field. Learn more about me below and let's connect!"
    );

    return (
        <div className="container mt-5">
            <section className="hero-section text-left mb-5">
                <div className="row align-items-center">
                    <div className="col-md-4 text-center">
                        <img
                            src={me}
                            alt="Me!"
                            className="img-fluid rounded-circle mb-3 custom-border"
                            style={{ width: "500px" }}
                        />
                        <h2>Romerico David</h2>
                        <div className="contact-info">
                            <a
                                href="https://github.com/Romerico234"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={github_logo}
                                    alt="GitHub"
                                    className="contact-icon"
                                />
                            </a>
                            <a
                                href="https://www.linkedin.com/mynetwork/network-manager/newsletters/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={linkedin_logo}
                                    alt="LinkedIn"
                                    className="contact-icon"
                                />
                            </a>
                            <a href="mailto:romedavid2@outlook.com">
                                <img
                                    src={email_logo}
                                    alt="Email"
                                    className="contact-icon"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-8 d-flex align-items-center">
                        <blockquote className="blockquote">
                            <p className="mb-0 text-center">{description}</p>
                        </blockquote>
                    </div>
                </div>
            </section>

            <section className="mb-5">
                <h3 className="text-left mb-3">
                    When I'm not coding, you can find me doing a variety of
                    things. Here are the things I enjoy the most!
                </h3>
                <div className="d-flex justify-content-between">
                    <div className="interest-section border-black">
                        <h4 className="text-center">Basketball</h4>
                        <div className="carousel-container">
                            <button className="carousel-control-prev">
                                {"<"}
                            </button>
                            <div className="carousel-content">
                                <img
                                    src="#"
                                    alt="Basketball Image"
                                    className="d-block w-100"
                                />
                            </div>
                            <button className="carousel-control-next">
                                {">"}
                            </button>
                            <button className="fullscreen-button">[ ]</button>
                        </div>
                        <p className="description">
                            Add your basketball description here.
                        </p>
                    </div>

                    <div className="interest-section border-black">
                        <h4 className="text-center">Food</h4>
                        <div className="carousel-container">
                            <button className="carousel-control-prev">
                                {"<"}
                            </button>
                            <div className="carousel-content">
                                <img
                                    src="#"
                                    alt="Food Image"
                                    className="d-block w-100"
                                />
                            </div>
                            <button className="carousel-control-next">
                                {">"}
                            </button>
                            <button className="fullscreen-button">[ ]</button>
                        </div>
                        <p className="description">
                            Add your food description here.
                        </p>
                    </div>

                    <div className="interest-section border-black">
                        <h4 className="text-center">Media</h4>
                        <div className="carousel-container">
                            <button className="carousel-control-prev">
                                {"<"}
                            </button>
                            <div className="carousel-content">
                                <img
                                    src="#"
                                    alt="Media Image"
                                    className="d-block w-100"
                                />
                            </div>
                            <button className="carousel-control-next">
                                {">"}
                            </button>
                            <button className="fullscreen-button">[ ]</button>
                        </div>
                        <p className="description">
                            Add your media description here.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
