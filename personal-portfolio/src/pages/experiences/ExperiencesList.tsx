import "./Experiences.css";
import ExperienceItem from "./ExperiencesItem";
import experiences from "../../assets/data/work_experiences.json";

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
            <h1>Experiences</h1>
            <div className="row">
                <div className="col-md-12">
                    <div className="timeline">
                        {experiences.map(
                            (experience: Experience, index: number) => (
                                <ExperienceItem
                                    key={experience.id}
                                    experience={experience}
                                    position={
                                        index % 2 === 0 ? "left" : "right"
                                    }
                                />
                            )
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
