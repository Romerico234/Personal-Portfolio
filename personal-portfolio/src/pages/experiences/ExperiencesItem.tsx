import "./Experiences.css";

interface Experience {
    id: number;
    company: string;
    location: string;
    jobTitle: string;
    startDate: string;
    endDate: string;
    description: string;
}

interface ExperienceItemProps {
    experience: Experience;
    position: "left" | "right";
}

export default function ExperiencesItem({
    experience,
    position,
}: ExperienceItemProps) {
    return (
        <div className={`timeline-item ${position} mt-5 mb-3`}>
            <div className="timeline-marker"></div>
            <div className="timeline-content">
                <h2 className="h5 mb-1">{experience.jobTitle}</h2>
                <h3 className="h6 text-muted mb-2">
                    {experience.company} - {experience.location}
                </h3>
                <p className="text-muted mb-2">
                    {experience.startDate} to {experience.endDate}
                </p>
                <p>{experience.description}</p>
            </div>
        </div>
    );
}
