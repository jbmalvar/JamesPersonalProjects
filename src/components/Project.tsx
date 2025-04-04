import './Project.css';

interface ProjectProps {
    project: {
        title: string;
        description: string;
        image: string;
    };
}

const Project = ({ project }: ProjectProps) => {
    return (
        <div className="Project">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <img src={project.image} alt={project.title} />
        </div>
    );
}

export default Project;