import { useContext } from "react";
import { PortfolioContextAPI } from "../../../../Context-API/PortfolioContext";
import { Link } from "react-router-dom";


const LargeProjects = () => {

    const { LargeProjectsAPI } = useContext(PortfolioContextAPI);

    return (
        <>
            <section className="mt-7 mb-14 p-4">
                <h1 className="text-4xl mb-7 text-[#ABB2BF]">
                    <span className="text-[#C778DD]">#</span>Large-Projects
                </h1>
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {LargeProjectsAPI.map(({ id, image, projectName, technologies, githubLink, liveLink, detailInfo }) => (
                        <div className="hover-3d" key={id}>
                            <div
                                key={id}
                                className="hover-card bg-[#2C2F36] grid items-center justify-center rounded-lg shadow-md transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:scale-105 border-2 border-[#ABB2BF]"
                            >
                                <img
                                    src={image}
                                    alt={projectName}
                                    className="w-full h-full"
                                />
                                <span className="border border-[#ABB2BF]"></span>
                                <h2 className="text-xl font-semibold mt-3 m-4">{projectName}</h2>
                                <span className="border border-[#ABB2BF]"></span>
                                <h3 className="text-lg font-semibold text-[#C778DD] mt-3 m-4">Technologies Used</h3>
                                <div className="flex flex-wrap gap-2 mt-1 m-4">
                                    {technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 text-sm rounded-full bg-[#1E2127] text-[#ABB2BF] border border-[#C778DD] hover:bg-[#C778DD] hover:text-white transition-colors duration-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <span className="border border-[#ABB2BF]"></span>
                                <p className="text-sm text-gray-400 line-clamp-3 m-4">
                                    {detailInfo.slice(0, 100)}...
                                    <Link
                                        to={`/LargeProjectsDetail/${id}`}
                                        className="text-[#C778DD] hover:underline"
                                    >
                                        Read More
                                    </Link>
                                </p>
                                <span className="border border-[#ABB2BF]"></span>
                                <div className="flex xl:gap-3 gap-2 xl:m-4 m-4 justify-center">
                                    <a
                                        href={githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 rounded-md bg-[#2C2F36] text-[#C778DD] border border-[#C778DD] transition-all duration-300 hover:bg-[#C778DD] hover:text-white hover:shadow-lg hover:-translate-y-1"
                                    >
                                        GitHub
                                    </a>

                                    <a
                                        href={liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 rounded-md bg-[#2C2F36] text-[#C778DD] border border-[#C778DD] transition-all duration-300 hover:bg-[#C778DD] hover:text-white hover:shadow-lg hover:-translate-y-1"
                                    >
                                        Live Link
                                    </a>

                                    <Link
                                        to={`/LargeProjectsDetail/${id}`}
                                        className="px-4 py-2 rounded-md bg-[#2C2F36] text-[#C778DD] border border-[#C778DD] transition-all duration-300 hover:bg-[#C778DD] hover:text-white hover:shadow-lg hover:-translate-y-1"
                                    >
                                        Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default LargeProjects;
