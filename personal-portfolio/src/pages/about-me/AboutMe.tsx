import "./AboutMe.css";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import {
    Captions,
    Download,
    Fullscreen,
    Thumbnails,
    Zoom,
} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import {
    foodSlides,
    basketballSlides,
    mediaSlides,
} from "../../utils/image-slides/imagesSlides";

interface ImageSlide {
    src: string;
}

export default function AboutMe() {
    const [description] = useState(
        `Hey there! I'm Romerico and I'm currently a junior at Towson University, set to graduate in May 2026 with a major in Computer Science. I am interested in full-stack development and I'm open to exploring opportunities in the field. Learn more about me below and let's connect!`
    );

    const [index, setIndex] = useState<number>(-1);
    const [currentSlides, setCurrentSlides] =
        useState<ImageSlide[]>(foodSlides);

    const handleOpenLightbox = (slides: ImageSlide[], id: number) => {
        setCurrentSlides(slides);
        setIndex(id);
    };

    return (
        <div>
            <div className="about-me-container">
                <div className="container mt-5">
                    <h1 className="section-header">About Me</h1>
                    <section className="text-left mb-5">
                        <div className="row align-items-center">
                            <div className="col-md-4 text-center">
                                <img
                                    src="../../../public/images/about-me-page-images/me.png"
                                    alt="Me!"
                                    className="img-fluid rounded-circle mb-3 custom-border"
                                    style={{ width: "500px" }}
                                />
                                <h2>Romerico David Jr</h2>
                                <div className="contact-info">
                                    <a
                                        href="https://github.com/Romerico234"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src="../../../public/images/about-me-page-images/github-logo.png"
                                            alt="GitHub"
                                            className="contact-icon"
                                        />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/romerico-david/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src="../../../public/images/about-me-page-images/linkedin-logo.png"
                                            alt="LinkedIn"
                                            className="contact-icon"
                                        />
                                    </a>
                                    <a href="mailto:romedavid2@outlook.com">
                                        <img
                                            src="../../../public/images/about-me-page-images/email-logo.png"
                                            alt="romedavid2@outlook.com"
                                            className="contact-icon"
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-8 d-flex align-items-center">
                                <blockquote className="blockquote">
                                    <p className="mb-0 text-center">
                                        {description}
                                        <a
                                            href="../../../public/Romerico David Jr Resume.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="resume-link"
                                        >
                                            View my resume.
                                        </a>
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                    </section>

                    <section className="mb-5">
                        <h3 className="text-left mb-3">My Favorite Stuff</h3>
                        <div className="d-flex justify-content-between">
                            <div className="interest-section border-black">
                                <h4 className="text-center">Basketball</h4>
                                <div className="image-grid">
                                    {basketballSlides.map((slide, id) => (
                                        <img
                                            key={id}
                                            src={slide.src}
                                            alt={`Basketball Image ${id + 1}`}
                                            className="img-thumbnail clickable"
                                            onClick={() =>
                                                handleOpenLightbox(
                                                    basketballSlides,
                                                    id
                                                )
                                            }
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="interest-section border-black">
                                <h4 className="text-center">Eating Out</h4>
                                <div className="image-grid">
                                    {foodSlides.map((slide, id) => (
                                        <img
                                            key={id}
                                            src={slide.src}
                                            alt={`Food Image ${id + 1}`}
                                            className="img-thumbnail clickable"
                                            onClick={() =>
                                                handleOpenLightbox(
                                                    foodSlides,
                                                    id
                                                )
                                            }
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="interest-section border-black">
                                <h4 className="text-center">Favorite Media</h4>
                                <div className="image-grid">
                                    {mediaSlides.map((slide, id) => (
                                        <img
                                            key={id}
                                            src={slide.src}
                                            alt={`Media Image ${id + 1}`}
                                            className="img-thumbnail clickable"
                                            onClick={() =>
                                                handleOpenLightbox(
                                                    mediaSlides,
                                                    id
                                                )
                                            }
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <Lightbox
                plugins={[Captions, Download, Fullscreen, Zoom, Thumbnails]}
                captions={{
                    showToggle: true,
                    descriptionTextAlign: "end",
                }}
                index={index}
                open={index >= 0}
                close={() => setIndex(-1)}
                slides={currentSlides}
            />
        </div>
    );
}
