import "./Projects.css";
import ProjectsItem from "./ProjectsItem";
import projectsData from "../../assets/data/projects.json";

interface Project {
    id: number;
    name: string;
    description: string;
    link: string;
    image: string;
}

export default function ProjectsList() {
    return (
        <div className="container mt-5">
            <h1 className="section-header">Projects</h1>
            <div className="row">
                {projectsData.map((project: Project) => (
                    <ProjectsItem key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
}
