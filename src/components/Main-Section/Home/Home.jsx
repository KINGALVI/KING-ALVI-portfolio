import MyPhoto from "../../../../public/Images/My-Photo-1.jpeg";
import Dots from "../../../../public/Images/Dots.png";
import Dedication from "../../../../public/Images/My-Dedication.png";
import Big_Medium_Screen_Quote from "../../../../public/Images/big-medim-screen-quote.png";
import Mini_Small_Screen_Quote from "../../../../public/Images/mini-small-screen-quote.png";
import quote_man from "../../../../public/Images/Frame-49.png";
import Pink_line from "../../../../public/Images/Line-7.png";
import Arrow_Button from "../../../../public/Images/Arrow_Button.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { PortfolioContextAPI } from "../../../Context-API/PortfolioContext";

const Home = () => {
    const { projectsAPI } = useContext(PortfolioContextAPI);

    const firstThreeProjects = projectsAPI.slice(0, 3);

    return (
        <>
            <section className="card lg:card-side bg-[#282C33] flex justify-center items-center">
                <div className="card-body grid lg:items-start md:items-center sm:items-center">
                    <h2 className="text-4xl text-center md:text-center lg:text-left">
                        Alvi is a <span className="text-[#C778DD]">Front-End Developer</span> and{" "}
                        <span className="text-[#C778DD]">Gamer</span>
                    </h2>
                    <p className="text-[#ABB2BF] pt-5 pb-2.5 text-center md:text-center lg:text-left">
                        He crafts responsive websites where technologies meet creativity
                    </p>
                    <div className="card-actions justify-center md:justify-center lg:justify-start">
                        <button className="text-[#ABB2BF]">Contact me !!</button>
                    </div>
                </div>
                <div className="grid lg:ps-0 md:ps-16">
                    <figure style={{ position: "relative" }}>
                        <img
                            src={MyPhoto}
                            alt="My Photo"
                            className="Background-Image lg:w-[457px] lg:h-[386px] md:w-[350px] md:h-[450px] sm:w-[457px] sm:h-[386px] ml-[75px] md:ml-[30px] mx-auto"
                        />
                        <img className="Dots-Image" src={Dots} alt="" />
                    </figure>
                    <img src={Dedication} alt="" />
                </div>
            </section>

            {/* Quote Section */}
            <section className="flex justify-center">
                <div>
                    <img className="reletive-quote_man-image" src={quote_man} alt="" />
                    <img
                        src={Big_Medium_Screen_Quote}
                        alt="Quote for big/medium screens"
                        className="hidden md:block"
                    />
                    <img
                        src={Mini_Small_Screen_Quote}
                        alt="Quote for small/mini screens"
                        className="block md:hidden"
                    />
                </div>
            </section>

            <br /><br />

            <section>
                <div className="flex justify-between">
                    <div className="flex items-center gap-3">
                        <h1 className="text-4xl">
                            <span className="text-[#C778DD]">#</span>Projects
                        </h1>
                        <div>
                            <img className="mt-2.5" src={Pink_line} alt="Pink Line" />
                        </div>
                    </div>
                    <Link
                        to={"/Projects"}
                        className="text-[#ABB2BF] flex items-center justify-center gap-1.5 projects-btn mt-2.5"
                    >
                        View All
                        <span>
                            <img src={Arrow_Button} alt="" />
                        </span>
                    </Link>
                </div>

                <br /><br />

                {
                    projectsAPI.length === 0 ? <h3 className="text-4xl">Loding....</h3>
                        :
                        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {firstThreeProjects.map(project => (
                                <div className="hover-3d ">
                                    <div
                                        key={project.id}
                                        className="bg-[#2C2F36] grid items-center rounded-lg shadow-md transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:scale-105 border-2 border-[#ABB2BF]"
                                    >
                                        <img
                                            src={project.image}
                                            alt={project.projectName}
                                            className="w-full h-48 object-cover rounded-md m-4"
                                        />
                                        <span className="border border-[#ABB2BF]"></span>
                                        <h2 className="text-xl font-semibold mt-3 m-4">{project.projectName}</h2>
                                        <span className="border border-[#ABB2BF]"></span>
                                        <h3 className="text-lg font-semibold text-[#C778DD] m-4">Technologies Used</h3>
                                        <div className="flex flex-wrap gap-2 mt-1 m-4">
                                            {project.technologies.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1 text-sm rounded-full bg-[#1E2127] text-[#ABB2BF] border border-[#C778DD] hover:bg-[#C778DD] hover:text-white transition-colors duration-300"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <span className="border border-[#ABB2BF]"></span>
                                        <p className="text-sm text-gray-400 mt-2 line-clamp-3 m-4">
                                            {project.detailInfo.slice(0, 100)}...<Link to={`/PojectsDetail/${project.id}`}
                                                className="text-[#C778DD] hover:underline"
                                            >Read More</Link>
                                        </p>
                                        <span className="border border-[#ABB2BF]"></span>
                                        <div className="flex gap-3 m-4 justify-center">
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
                                                to={`/PojectsDetail/${project.id}`}
                                                className="px-4 py-2 rounded-md bg-[#2C2F36] text-[#C778DD] border border-[#C778DD] transition-all duration-300 hover:bg-[#C778DD] hover:text-white hover:shadow-lg hover:-translate-y-1"
                                            >
                                                Details
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                }
            </section>
        </>
    );
};

export default Home;