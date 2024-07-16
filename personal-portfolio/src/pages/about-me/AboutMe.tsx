import { useState } from "react";

export default function AboutMe() {
    const [mission] = useState(
        "I am passionate about expanding and utilizing my programming skills to readily apply them to real-world experiences. My journey is driven by a commitment to continuous learning and innovation in the field of computer science."
    );
    const [education] = useState([
        {
            degree: "Bachelor of Science in Computer Science",
            institution: "Towson University",
            year: "2026",
        },
    ]);
    const [interests] = useState([
        "Basketball (Playing & Watching)",
        "Eating",
        "Reading",
        "Shows",
        "Video Games",
    ]);

    return (
        <div className="container mt-5">
            <section className="mb-5 text-center">
                <blockquote className="blockquote">
                    <p className="mb-0">{mission}</p>
                </blockquote>
            </section>

            <section className="mb-5">
                <h3>Education</h3>
                <ul>
                    {education.map((edu, index) => (
                        <li key={index}>
                            <strong>{edu.degree}</strong> from {edu.institution}{" "}
                            ({edu.year})
                        </li>
                    ))}
                </ul>
            </section>

            <section className="mb-5">
                <h3>Interests & Hobbies</h3>
                <p>
                    When I'm not coding, you can find me in a variety
                    of hobbies that I enjoy. Here are my favorite activities:
                </p>
                <ul>
                    {interests.map((interest, index) => (
                        <li key={index}>{interest}</li>
                    ))}
                </ul>
            </section>

            <section className="mb-5">
                <h3>Gallery</h3>
                <p>Snapshots of my life and hobbies:</p>
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <img
                            src="#"
                            alt="test"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
