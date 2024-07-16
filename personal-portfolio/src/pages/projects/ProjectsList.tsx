import ProjectsItem from './ProjectsItem';
import projectsData from '../../assets/data/projects.json';

interface Project {
    id: number;
    name: string;
    description: string;
    link: string;
}

export default function ProjectsList() {
    return (
        <div>
            <h1>Projects List</h1>
            {projectsData.map((project: Project) => (
                <ProjectsItem key={project.id} project={project} />
            ))}
        </div>
    );
}
