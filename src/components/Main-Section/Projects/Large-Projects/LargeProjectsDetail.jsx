import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { PortfolioContextAPI } from "../../../../Context-API/PortfolioContext";
import { MdLiveTv } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";

const LargeProjectsDetail = () => {
    const { id } = useParams();
    const { LargeProjectsAPI } = useContext(PortfolioContextAPI);

    const LargeProjects = LargeProjectsAPI.find(p => p.id === parseInt(id));

    if (!LargeProjects) {
        return <p className="text-gray-400">Project not found.</p>;
    }

    const { image, alt, projectName, technologies, detailInfo, githubLink, liveLink } = LargeProjects;

    return (
        <div className="p-6 bg-[#2C2F36] rounded-lg shadow-md">
            <center>
                <img
                    src={image}
                    alt={alt}
                    className="md:w-[75%] md:h-[75%] h-full w-full object-cover rounded-md"
                />
            </center>
            <h1 className="text-3xl font-bold mt-4">{projectName}</h1>
            <h3 className="text-lg font-semibold mt-3 text-[#C778DD]">Technologies Used</h3>
            <div className="flex flex-wrap gap-2 mt-2">
                {technologies.map((tech, index) => (
                    <span
                        key={index}
                        className="px-3 py-1 text-sm rounded-full bg-[#1E2127] text-[#ABB2BF] border border-[#C778DD] hover:bg-[#C778DD] hover:text-white transition-colors duration-300"
                    >
                        {tech}
                    </span>
                ))}
            </div>
            <p className="text-gray-400 mt-4">{detailInfo}</p>

            <div className="md:flex grid gap-4 mt-6">
                <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[15px] rounded-md btn bg-[#2C2F36] text-[#C778DD] border border-[#C778DD] transition-all duration-300 hover:bg-[#C778DD] hover:text-white hover:shadow-lg hover:-translate-y-1"
                >
                    <FaGithub className="text-[21px]" />  GitHub
                </a>
                <a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[15px] rounded-md btn bg-[#2C2F36] text-[#C778DD] border border-[#C778DD] transition-all duration-300 hover:bg-[#C778DD] hover:text-white hover:shadow-lg hover:-translate-y-1"
                >
                    <MdLiveTv className="text-[21px]" /> Live Link
                </a>
                <Link
                    to="/AllProjects"
                    className="text-[15px] rounded-md btn bg-[#2C2F36] text-[#C778DD] border border-[#C778DD] transition-all duration-300 hover:bg-[#C778DD] hover:text-white hover:shadow-lg hover:-translate-y-1"
                >
                  <GoProjectSymlink className="text-[21px]" />  Back to Projects
                </Link>
            </div>
        </div>
    );
};

export default LargeProjectsDetail;