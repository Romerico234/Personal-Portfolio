import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import experiences from "../../utils/data/work_experiences.json";
import ExperiencesItem from "./ExperiencesItem";

interface Experience {
    id: number;
    company: string;
    location: string;
    jobTitle: string;
    startDate: string;
    endDate: string;
    description: string;
}

export default function ExperiencesList() {
    return (
        <div className="container mt-5">
            <h1 className="section-header">Work Experiences</h1>
            <VerticalTimeline lineColor={"#000"}>
                {experiences.map((experience: Experience) => (
                    <ExperiencesItem
                        key={experience.id}
                        experience={experience}
                    />
                ))}
            </VerticalTimeline>
        </div>
    );
}
