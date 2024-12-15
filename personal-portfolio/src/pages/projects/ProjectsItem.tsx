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
			<a
				href={project.link}
				target="_blank"
				rel="noopener noreferrer"
				className="card h-100 text-decoration-none"
			>
				<div className="position-relative">
					<img
						src={project.image}
						className="card-img-top"
						alt={`${project.name} image`}
					/>
				</div>
				<div className="card-body">
					<h5 className="card-title">{project.name}</h5>
					<p className="card-text">{project.description}</p>
				</div>
			</a>
		</div>
	);
}
