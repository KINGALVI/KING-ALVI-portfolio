import MyPhoto from "../../../../public/Images/My-Photo-1.jpeg";
import Dots from "../../../../public/Images/Dots.png";
import Dedication from "../../../../public/Images/My-Dedication.png";
import Big_Medium_Screen_Quote from "../../../../public/Images/big-medim-screen-quote.png";
import Mini_Small_Screen_Quote from "../../../../public/Images/mini-small-screen-quote.png";
import quote_man from "../../../../public/Images/Frame-49.png";
import Arrow_Button from "../../../../public/Images/Arrow_Button.png";
import { Link } from "react-router-dom";
import { MdLiveTv } from "react-icons/md";
import { FaGithub, FaInfo } from "react-icons/fa";
import { useContext } from "react";
import { PortfolioContextAPI } from "../../../Context-API/PortfolioContext";

const Home = () => {
    const { LargeProjectsAPI } = useContext(PortfolioContextAPI);

    const firstThreeProjects = LargeProjectsAPI.slice(0, 4);

    return (
        <section className="m-2">
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
                        <Link to={"/Contacts"} className="Link-Button text-[#ABB2BF]">Contact me !!</Link>
                    </div>
                </div>
                <div className="grid lg:ps-0 md:ps-16">
                    <figure style={{ position: "relative" }}>
                        <img
                            src={MyPhoto}
                            alt="My Photo"
                            className="Background-Image lg:w-[457px] lg:h-[386px] md:w-[350px] md:h-[450px] ml-[75px] md:ml-[30px] mx-auto"
                        />
                        <img className="Dots-Image" src={Dots} alt="" />
                    </figure>
                    <center><img src={Dedication} alt="" /></center>
                </div>
            </section>

            <br />

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
                <div className="lg:flex lg:justify-between grid items-start">
                    <div className="flex items-center gap-3">
                        <h1 className="text-4xl">
                            <span className="text-[#C778DD]">#</span>Projects
                        </h1>
                        <div>
                            <div className="h-0.5 border mt-2.5 border-[#C778DD] md:w-[510px] w-[140px]"></div>
                        </div>
                    </div>
                    <Link
                        to={"/AllProjects"}
                        className="text-[#ABB2BF] flex items-center justify-start gap-1.5 projects-btn mt-2.5"
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
                        <div className="grid xl:gap-10 xl:p-10 gap-3 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 mb-10">
                            {firstThreeProjects.map(({ id, image, alt, projectName, technologies, githubLink, liveLink, detailInfo }) => (
                                <div className="hover-3d" key={id}>
                                    <div
                                        key={id}
                                        className="hover-card bg-[#2C2F36] grid items-center justify-center rounded-lg shadow-md transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:scale-105 border-2 border-[#ABB2BF]"
                                    >
                                        <img
                                            src={image}
                                            alt={alt}
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
                                            <Link to={`/LargeProjectsDetail/${id}`}
                                                className="text-[#C778DD] hover:underline"
                                            >
                                                Read More
                                            </Link>
                                        </p>
                                        <span className="border border-[#ABB2BF]"></span>
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
                }
            </section>
        </section>
    );
};

export default Home;