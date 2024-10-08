interface Project {
    id: number;
    name: string;
    description: string;
    link: string; 
    image: string;
}

interface ProjectItemProps {
    project: Project;
}

export default function ProjectsItem({ project }: ProjectItemProps) {
    return (
        <div className="col-md-4 mb-4">
            <div className="card h-100">
                <div className="position-relative">
                    <img
                        src={project.image}
                        className="card-img-top"
                        alt={`${project.name} image`}
                    />
                    <a
                        href={project.link}
                        className="github-icon"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="../../../images/projects-images/github-icon.png" alt="GitHub link" />
                    </a>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{project.name}</h5>
                    <p className="card-text">{project.description}</p>
                </div>
            </div>
        </div>
    );
}
