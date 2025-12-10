import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { PortfolioContextAPI } from "../../../Context-API/PortfolioContext";

const ProjectsDetail = () => {
    const { id } = useParams();
    const { projectsAPI } = useContext(PortfolioContextAPI);

    const project = projectsAPI.find(p => p.id === parseInt(id));

    if (!project) {
        return <p className="text-gray-400">Project not found.</p>;
    }

    return (
        <div className="p-6 bg-[#2C2F36] rounded-lg shadow-md">
            <img
                src={project.image}
                alt={project.projectName}
                className="w-full h-64 object-cover rounded-md"
            />
            <h1 className="text-3xl font-bold mt-4">{project.projectName}</h1>
            <h3 className="text-lg font-semibold mt-3 text-[#C778DD]">Technologies Used</h3>
            <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies.map((tech, index) => (
                    <span
                        key={index}
                        className="px-3 py-1 text-sm rounded-full bg-[#1E2127] text-[#ABB2BF] border border-[#C778DD] hover:bg-[#C778DD] hover:text-white transition-colors duration-300"
                    >
                        {tech}
                    </span>
                ))}
            </div>
            <p className="text-gray-400 mt-4">{project.detailInfo}</p>

            <div className="flex gap-4 mt-6">
                <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-md bg-[#2C2F36] text-[#C778DD] border border-[#C778DD] transition-all duration-300 hover:bg-[#C778DD] hover:text-white hover:shadow-lg hover:-translate-y-1"
                >
                    GitHub
                </a>
                <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-md bg-[#2C2F36] text-[#C778DD] border border-[#C778DD] transition-all duration-300 hover:bg-[#C778DD] hover:text-white hover:shadow-lg hover:-translate-y-1"
                >
                    Live
                </a>
                <Link
                    to="/Projects"
                    className="px-4 py-2 rounded-md bg-[#2C2F36] text-[#C778DD] border border-[#C778DD] transition-all duration-300 hover:bg-[#C778DD] hover:text-white hover:shadow-lg hover:-translate-y-1"
                >
                    Back to Projects
                </Link>
            </div>
        </div>
    );
};

export default ProjectsDetail;