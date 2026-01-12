import { useContext, useEffect, useState } from "react";
import { PortfolioContextAPI } from "../../../../Context-API/PortfolioContext";
import { MdLiveTv } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const SmallProjects = () => {

    const { SmallProjectsAPI } = useContext(PortfolioContextAPI);

    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const checkScreen = () => setIsDesktop(window.innerWidth >= 1024);
        checkScreen();
        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    return (
        <>
            <section className="mt-7 p-4 mb-7">
                <h1 className="text-4xl mb-7 text-[#ABB2BF]">
                    <span className="text-[#C778DD]">#</span>Small-Projects
                </h1>
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {SmallProjectsAPI.map(({ id, projectName, technologies, githubLink, liveLink, detailInfo }) => (
                            <div
                                key={id}
                                className={`hover-card group bg-[#2C2F36] grid items-center justify-center rounded-lg shadow-md transition-transform duration-300 ease-out hover:-translate-y-2 hover:scale-105 border-2 ${isDesktop ? "lg:border-[#ABB2BF] lg:hover:border-[#c52fee] lg:hover:shadow-[0_0_20px_#C778DD]" : "border-[#ABB2BF] focus:border-[#c52fee] focus:shadow-[0_0_20px_#C778DD]"}`}
                                tabIndex={0}
                            > 
                                <h2 className="text-xl font-semibold mt-3 m-4">{projectName}</h2>
                                <div className={`border  w-full rounded-t-xl ${isDesktop ? "border-[#ABB2BF] group-hover:border-[#c52fee]" : "border-[#ABB2BF] group-focus:border-[#c52fee]"}`}></div>
                                <h3 className="text-lg font-semibold text-[#C778DD] mt-3 m-4">Technologies Used</h3>
                                <div className="flex flex-wrap gap-2 mt-1 m-4">
                                    {technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 text-sm rounded-full bg-[#1E2127] text-[#ABB2BF] border border-[#C778DD] hover:border-[#c52fee] hover:bg-[#c52fee] hover:text-white transition-colors duration-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className={`border  w-full rounded-t-xl ${isDesktop ? "border-[#ABB2BF] group-hover:border-[#c52fee]" : "border-[#ABB2BF] group-focus:border-[#c52fee]"}`}></div>
                                <p className="text-sm text-gray-400  m-4">
                                    {detailInfo}
                                </p>
                                <div className={`border  w-full rounded-t-xl ${isDesktop ? "border-[#ABB2BF] group-hover:border-[#c52fee]" : "border-[#ABB2BF] group-focus:border-[#c52fee]"}`}></div>
                                <div className="flex gap-3 justify-center p-4">
                                    <a
                                        href={githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[15px] rounded-md btn bg-[#2C2F36] text-[#C778DD] border border-[#C778DD] hover:border-[#c52fee] focus:border-[#c52fee] transition-all duration-300 hover:bg-[#c52fee] focus:bg-[#c52fee] hover:text-white focus:text-white hover:shadow-lg focus:shadow-lg hover:-translate-y-1 focus:translate-y-1"
                                    >
                                        <FaGithub className="text-[21px]" />  GitHub
                                    </a>
                                    <a
                                        href={liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[15px] rounded-md btn bg-[#2C2F36] text-[#C778DD] border border-[#C778DD] hover:border-[#c52fee] focus:border-[#c52fee] transition-all duration-300 hover:bg-[#c52fee] focus:bg-[#c52fee] hover:text-white focus:text-white hover:shadow-lg focus:shadow-lg hover:-translate-y-1 focus:translate-y-1"
                                    >
                                        <MdLiveTv className="text-[21px]" /> Live Link
                                    </a>
                                </div>
                            </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default SmallProjects;