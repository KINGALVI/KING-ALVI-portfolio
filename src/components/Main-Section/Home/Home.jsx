import MyPhoto_1 from "../../../../public/Images/My-Photo-1.png";
import Dots from "../../../../public/Images/Dots.png";
import FristDedication from "../../../../public/Images/My-Dedication-1.png";
import Big_Medium_Screen_Quote from "../../../../public/Images/big-medim-screen-quote.png";
import Mini_Small_Screen_Quote from "../../../../public/Images/mini-small-screen-quote.png";
import quote_man from "../../../../public/Images/Frame-49.png";
import Arrow_Button from "../../../../public/Images/Arrow_Button.png";
import { Link } from "react-router-dom";
import { MdLiveTv } from "react-icons/md";
import { FaGithub, FaInfo } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { PortfolioContextAPI } from "../../../Context-API/PortfolioContext";
import About from "../About/About";
import Contacts from "../Contacts/Contacts";

const Home = () => {

    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const checkScreen = () => setIsDesktop(window.innerWidth >= 1024);
        checkScreen();
        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    const { LargeProjectsAPI } = useContext(PortfolioContextAPI);

    const firstThreeProjects = LargeProjectsAPI.slice(0, 4);

    return (
        <section className="m-2">
            <section className="card lg:card-side bg-[#282C33] flex justify-center items-center">
                <div className="card-body grid lg:items-start md:items-center sm:items-center">
                    <h1 className="text-4xl text-center lg:text-left">
                        Alvi is a <span className="text-[#C778DD]">Front-End Developer</span> and{" "}
                        <span className="text-[#C778DD]">Gamer</span>
                    </h1>
                    <h3 className="text-[#ABB2BF] text-2xl pt-5 pb-2.5 text-center lg:text-left">
                        He crafts responsive websites where technologies meet creativity !!
                    </h3>
                    <p className="text-[#ABB2BF] pt-5 pb-2.5 text-center lg:text-left lg:w-[450px]">As a juninor in the MERN stack and a web developer, I prioritize creating user-friendly interfaces and scalable full-stack web applications. Focused on frontend excellence, translating concepts into clean, functional, and user-centric digital experiences.</p>
                    <br />
                    <div className="md:flex lg:justify-start justify-center gird gap-5">
                        <div className="card-actions justify-center lg:justify-start mb-5">
                            <Link to={"/Contacts"} className="Link-Button text-[#ABB2BF]">Contact me !!</Link>
                        </div>
                        <div className="card-actions justify-center lg:justify-start">
                            <button className="Link-Button text-[#ABB2BF]">Download Resume</button>
                        </div>
                    </div>
                </div>
                <div className="grid lg:ps-0 md:ps-16">
                    <figure style={{ position: "relative" }}>
                        <img
                            src={MyPhoto_1}
                            alt="My Photo"
                            className="Background-Image-1 lg:w-[400px] lg:h-[400px] w-[350px] h-[450px] ml-[75px] md:ml-[30px] block"
                        />
                        <img className="Dots-Image-1" src={Dots} alt="" />
                    </figure>
                    <div className=""><img className="lg:md-0 md:me-10" src={FristDedication} alt="Dedication quote"/></div>
                </div>
            </section>

            <br />

            <section className="flex justify-center">
                <div>
                    <img className="reletive-quote_man-image" src={quote_man} alt="The quote Man" />
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

            <br /><br />

            <section className="mb-10">
                <div className="lg:flex lg:justify-between grid items-start">
                    <div className="flex items-center gap-3">
                        <h1 className="text-4xl">
                            <span className="text-[#C778DD] ms-4">#</span>Projects
                        </h1>
                        <div>
                            <div className="h-0.5 border mt-2.5 border-[#C778DD] md:w-[510px] w-[180px]"></div>
                        </div>
                    </div>
                    <Link
                        to={"/AllProjects"}
                        className="text-[#ABB2BF] flex items-center justify-start gap-1.5 projects-btn mt-2.5 lg:ms-0 ms-4"
                    >
                        View All
                        <span>
                            <img src={Arrow_Button} alt="" />
                        </span>
                    </Link>
                </div>

                <br /><br />

                {
                    LargeProjectsAPI.length === 0 ? <h3 className="text-4xl">Loding....</h3>
                        :
                        <div className="grid xl:gap-10 xl:p-10 gap-3 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 lg:mb-0 mb-10">
                            {firstThreeProjects.map(({ id, image, alt, projectName, technologies, githubLink, liveLink, detailInfo }) => (
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
                                        <div className={`border  w-full rounded ${isDesktop ? "border-[#ABB2BF] group-hover:border-[#c52fee]" : "border-[#ABB2BF] group-focus:border-[#c52fee]"}`}></div>
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
                                        <p className="text-sm text-gray-400 line-clamp-3 m-4">
                                            {detailInfo.slice(0, 100)}...
                                            <Link to={`/LargeProjectsDetail/${id}`}
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
                                                className="text-[15px] rounded-md btn bg-[#2C2F36] text-[#C778DD] border border-[#C778DD] hover:border-[#c52fee] transition-all duration-300 hover:bg-[#c52fee] hover:text-white hover:shadow-lg hover:-translate-y-1"
                                            >
                                                <FaGithub className="text-[21px]" />  GitHub
                                            </a>
                                            <a
                                                href={liveLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[15px] rounded-md btn bg-[#2C2F36] text-[#C778DD] border border-[#C778DD] hover:border-[#c52fee] transition-all duration-300 hover:bg-[#c52fee] hover:text-white hover:shadow-lg hover:-translate-y-1"
                                            >
                                                <MdLiveTv className="text-[21px]" /> Live Link
                                            </a>
                                            <Link
                                                to={`/LargeProjectsDetail/${id}`}
                                                className="text-[15px] gap-0 rounded-md btn bg-[#2C2F36] text-[#C778DD] border border-[#C778DD] hover:border-[#c52fee] transition-all duration-300 hover:bg-[#c52fee] hover:text-white hover:shadow-lg hover:-translate-y-1"
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
                                                className="grid items-center px-4 py-2 rounded-md bg-[#2C2F36] text-[#C778DD] border border-[#C778DD] transition-all duration-300 hover:bg-[#c52fee] focus:border-[#c52fee] focus:text-white hover:shadow-lg hover:-translate-y-1"
                                            >
                                                <span><center><FaGithub className="text-[17px] mb-0" /></center>  GitHub</span>
                                            </a>
                                            <a
                                                href={liveLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-4 py-2 rounded-md bg-[#2C2F36] text-[#C778DD] border border-[#C778DD] transition-all duration-300 focus:bg-[#c52fee] focus:border-[#c52fee] focus:text-white hover:shadow-lg hover:-translate-y-1"
                                            >
                                                <center><MdLiveTv className="text-[17px] mb-0" /></center> <span className="flex gap-1"><span>Live</span> <span> Link</span></span>
                                            </a>
                                            <Link
                                                to={`/LargeProjectsDetail/${id}`}
                                                className="px-4 py-2 rounded-md bg-[#2C2F36] text-[#C778DD] border border-[#C778DD] transition-all duration-300 focus:bg-[#c52fee] focus:border-[#c52fee] focus:text-white hover:shadow-lg hover:-translate-y-1"
                                            >
                                                <center><FaInfo className="text-[17px] mb-0" /></center> <span className="flex gap-1"><span>Detail</span> <span> Info</span></span>
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>
                }

                <center>
                    <Link to={"/AllProjects"} className="Link-Button text-[#ABB2BF]">View All Projects</Link>
                </center>

            </section>

            <section className="mb-10">
                <About />
            </section>

            <section className="mb-10 mt-10">
                <Contacts />
            </section>

        </section>
    );
};

export default Home;