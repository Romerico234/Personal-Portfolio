import "./AboutMe.css";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";

export default function AboutMe() {
    const [description] = useState(
        `Hey there! I'm Romerico and I'm currently a junior at Towson University, set to graduate in May 2026 with a major in Computer Science. I am interested in full-stack development and I'm open to exploring opportunities in the field. Learn more about me below and let's connect!`
    );

    const [open, setOpen] = useState<boolean>(false);

    return (

        <div>
            <button>Open Lightbox</button>
        <Lightbox open={open}/>
        </div>
        
        // <div className="about-me-container">
        //     <div className="container mt-5">
        //         <h1 className="section-header">About Me</h1>
        //         <section className="text-left mb-5">
        //             <div className="row align-items-center">
        //                 <div className="col-md-4 text-center">
        //                     <img
        //                         src="../../../public/images/about-me-page-images/me.png"
        //                         alt="Me!"
        //                         className="img-fluid rounded-circle mb-3 custom-border"
        //                         style={{ width: "500px" }}
        //                     />
        //                     <h2>Romerico David Jr</h2>
        //                     <div className="contact-info">
        //                         <a
        //                             href="https://github.com/Romerico234"
        //                             target="_blank"
        //                             rel="noopener noreferrer"
        //                         >
        //                             <img
        //                                 src="../../../public/images/about-me-page-images/github-logo.png"
        //                                 alt="GitHub"
        //                                 className="contact-icon"
        //                             />
        //                         </a>
        //                         <a
        //                             href="https://www.linkedin.com/in/romerico-david/"
        //                             target="_blank"
        //                             rel="noopener noreferrer"
        //                         >
        //                             <img
        //                                 src="../../../public/images/about-me-page-images/linkedin-logo.png"
        //                                 alt="LinkedIn"
        //                                 className="contact-icon"
        //                             />
        //                         </a>
        //                         <a href="mailto:romedavid2@outlook.com">
        //                             <img
        //                                 src="../../../public/images/about-me-page-images/email-logo.png"
        //                                 alt="romedavid2@outlook.com"
        //                                 className="contact-icon"
        //                             />
        //                         </a>
        //                     </div>
        //                 </div>
        //                 <div className="col-md-8 d-flex align-items-center">
        //                     <blockquote className="blockquote">
        //                         <p className="mb-0 text-center">
        //                             {description}
        //                             <a
        //                                 href="../../../public/Romerico David Jr Resume.pdf"
        //                                 target="_blank"
        //                                 rel="noopener noreferrer"
        //                                 className=""
        //                             >
        //                                 View my resume.
        //                             </a> 
        //                         </p>
        //                     </blockquote>
        //                 </div>
        //             </div>
        //         </section>

        //         <section className="mb-5">
        //             <h3 className="text-left mb-3">
        //                 When I'm not coding, you can find me doing a variety of
        //                 things. Here are the things I enjoy the most!
        //             </h3>
        //             <div className="d-flex justify-content-between">
        //                 <div className="interest-section border-black">
        //                     <h4 className="text-center">Basketball</h4>
        //                     <div className="carousel-container">
        //                         <button className="carousel-control-prev">
        //                             {"<"}
        //                         </button>
        //                         <div className="carousel-content">
        //                             <img
        //                                 src="#"
        //                                 alt="Basketball Image"
        //                                 className="d-block w-100"
        //                             />
        //                         </div>
        //                         <button className="carousel-control-next">
        //                             {">"}
        //                         </button>
        //                         <button className="fullscreen-button">
        //                             [ ]
        //                         </button>
        //                     </div>
        //                     <p className="description">
        //                         Basketball description here.
        //                     </p>
        //                 </div>

        //                 <div className="interest-section border-black">
        //                     <h4 className="text-center">Food</h4>
        //                     <div className="carousel-container">
        //                         <button className="carousel-control-prev">
        //                             {"<"}
        //                         </button>
        //                         <div className="carousel-content">
        //                             <img
        //                                 src="#"
        //                                 alt="Food Image"
        //                                 className="d-block w-100"
        //                             />
        //                         </div>
        //                         <button className="carousel-control-next">
        //                             {">"}
        //                         </button>
        //                         <button className="fullscreen-button">
        //                             [ ]
        //                         </button>
        //                     </div>
        //                     <p className="description">
        //                         Food description here.
        //                     </p>
        //                 </div>

        //                 <div className="interest-section border-black">
        //                     <h4 className="text-center">Media</h4>
        //                     <div className="carousel-container">
        //                         <button className="carousel-control-prev">
        //                             {"<"}
        //                         </button>
        //                         <div className="carousel-content">
        //                             <img
        //                                 src="#"
        //                                 alt="Media Image"
        //                                 className="d-block w-100"
        //                             />
        //                         </div>
        //                         <button className="carousel-control-next">
        //                             {">"}
        //                         </button>
        //                         <button className="fullscreen-button">
        //                             [ ]
        //                         </button>
        //                     </div>
        //                     <p className="description">
        //                         Media description here.
        //                     </p>
        //                 </div>
        //             </div>
        //         </section>
        //     </div>
        // </div>

        
    );
}
