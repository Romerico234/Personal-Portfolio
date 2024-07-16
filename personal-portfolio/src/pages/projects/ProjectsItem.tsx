interface Project {
    id: number;
    name: string;
    description: string;
    link: string;
}

interface ProjectItemProps {
    project: Project;
}

export default function ProjectsItem({ project }: ProjectItemProps) {
    return (
        <div className="container">
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
            </a>
        </div>
    );
}
