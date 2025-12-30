import { useContext, useEffect, useState } from "react";
import { PortfolioContextAPI } from "../../../../Context-API/PortfolioContext";
import { Link } from "react-router-dom";
import { MdLiveTv } from "react-icons/md";
import { FaGithub, FaInfo } from "react-icons/fa";


const LargeProjects = () => {

    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const checkScreen = () => setIsDesktop(window.innerWidth >= 1024);
        checkScreen();
        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    const { LargeProjectsAPI } = useContext(PortfolioContextAPI);

    return (
        <>
            <section className="mt-7 mb-14 m-2">
                <h1 className="text-4xl mb-7 text-[#ABB2BF]">
                    <span className="text-[#C778DD]">#</span>Large-Projects
                </h1>
                <div className="grid xl:gap-10 xl:p-10 gap-3 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
                    {LargeProjectsAPI.map(({ id, image, alt, projectName, technologies, githubLink, liveLink, detailInfo }) => (
                        <div className="hover-3d" key={id}>
                            <div
                                key={id}
                                className={`hover-card group bg-[#2C2F36] grid items-center justify-center rounded-lg shadow-md transition-transform duration-300 ease-out hover:-translate-y-2 hover:scale-105 border-2 ${isDesktop ? "lg:border-[#ABB2BF] lg:hover:border-[#c52fee] lg:hover:shadow-[0_0_20px_#C778DD]" : "border-[#ABB2BF] focus:border-[#c52fee] focus:shadow-[0_0_20px_#C778DD]"}`}
                                tabIndex={0}
                            >
                                <img
                                    src={image}
                                    alt={alt}
                                    className="w-full h-full"
                                />
                                <div className={`border  w-full rounded-t-xl ${isDesktop ? "border-[#ABB2BF] group-hover:border-[#c52fee]" : "border-[#ABB2BF] group-focus:border-[#c52fee]"}`}></div>
                                <h2 className="text-xl font-semibold mt-3 m-4">{projectName}</h2>
                                <div className={`border  w-full rounded-t-xl ${isDesktop ? "border-[#ABB2BF] group-hover:border-[#c52fee]" : "border-[#ABB2BF] group-focus:border-[#c52fee]"}`}></div>
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
                                <div className={`border  w-full rounded-t-xl ${isDesktop ? "border-[#ABB2BF] group-hover:border-[#c52fee]" : "border-[#ABB2BF] group-focus:border-[#c52fee]"}`}></div>
                                <p className="text-sm text-gray-400 line-clamp-3 m-4">
                                    {detailInfo.slice(0, 100)}...
                                    <Link
                                        to={`/LargeProjectsDetail/${id}`}
                                        className="text-[#C778DD] hover:underline"
                                    >
                                        Read More
                                    </Link>
                                </p>
                                <div className={`border  w-full rounded-t-xl ${isDesktop ? "border-[#ABB2BF] group-hover:border-[#c52fee]" : "border-[#ABB2BF] group-focus:border-[#c52fee]"}`}></div>
                                {/* big screen */}
                                <div className="xl:flex hidden gap-10 m-4 justify-center">
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
                                        to={`/LargeProjectsDetail/${id}`}
                                        className="text-[15px] gap-0 rounded-md btn bg-[#2C2F36] text-[#C778DD] border border-[#C778DD] transition-all duration-300 hover:bg-[#C778DD] hover:text-white hover:shadow-lg hover:-translate-y-1"
                                    >
                                        <FaInfo className="text-[17px]" />  Detail Info
                                    </Link>
                                </div>

                                {/* small & medium screen */}
                                <div className="xl:hidden flex gap-3 m-4 justify-center text-center">
                                    <a
                                        href={githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="grid items-center px-4 py-2 rounded-md bg-[#2C2F36] text-[#C778DD] border border-[#C778DD] transition-all duration-300 hover:bg-[#C778DD] hover:text-white hover:shadow-lg hover:-translate-y-1"
                                    >
                                        <span><center><FaGithub className="text-[17px] mb-0" /></center>  GitHub</span>
                                    </a>
                                    <a
                                        href={liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 rounded-md bg-[#2C2F36] text-[#C778DD] border border-[#C778DD] transition-all duration-300 hover:bg-[#C778DD] hover:text-white hover:shadow-lg hover:-translate-y-1"
                                    >
                                        <center><MdLiveTv className="text-[17px] mb-0" /></center> <span className="flex gap-1"><span>Live</span> <span> Link</span></span>
                                    </a>
                                    <Link
                                        to={`/LargeProjectsDetail/${id}`}
                                        className="px-4 py-2 rounded-md bg-[#2C2F36] text-[#C778DD] border border-[#C778DD] transition-all duration-300 hover:bg-[#C778DD] hover:text-white hover:shadow-lg hover:-translate-y-1"
                                    >
                                        <center><FaInfo className="text-[17px] mb-0" /></center> <span className="flex gap-1"><span>Detail</span> <span> Info</span></span>
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
