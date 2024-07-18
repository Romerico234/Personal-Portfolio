import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

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
}

export default function ExperiencesItem({ experience }: ExperienceItemProps) {
    return (
        <VerticalTimelineElement
            date={`${experience.startDate} - ${experience.endDate}`}
            iconStyle={{ background: "#000", color: "#fff" }}
            contentStyle={{
                background: "#f8f9fa",
                border: "1px solid #dee2e6",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #dee2e6" }}
            icon={<div className="timeline-icon"></div>}
        >
            <h3 className="vertical-timeline-element-title">
                {experience.jobTitle}
            </h3>
            <h4 className="vertical-timeline-element-company-and-location">
                {experience.company} - {experience.location}
            </h4>
            <p>{experience.description}</p>
        </VerticalTimelineElement>
    );
}
