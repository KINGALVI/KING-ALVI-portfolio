import { useEffect, useState } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaGithub, FaReact } from "react-icons/fa";
import { SiVercel, SiNetlify, SiFigma, SiNextdotjs, SiTailwindcss, SiBootstrap, SiDaisyui } from "react-icons/si";


const Skills = () => {

    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const checkScreen = () => setIsDesktop(window.innerWidth >= 1024);
        checkScreen();
        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, []);


    return ( 
        <>
            <section id="Skills" className="m-2">
                <div className="flex items-center gap-3 mb-3">
                    <h1 className="md:text-4xl text-3xl">
                        <span className="text-[#C778DD]">#</span>Skills
                    </h1>
                    <div>
                        <div className="h-0.5 border mt-2.5 border-[#C778DD] md:w-[400px] w-40"></div>
                    </div>
                </div>

                <h2 className="md:text-4xl text-2xl text-center mb-10 mt-5">
                    Skill I have
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-0 lg:divide-y-0 lg:divide-x-4 divide-[#a4a7ad]">


                    {/* Left Column */}
                    <div className="flex flex-col gap-4 lg:gap-12">

                        {/* Languages */}
                        <div
                            tabIndex={0}
                            className={`group p-6 flex border-2 border-base-200 flex-col items-center bg-base-200 transition-shadow duration-300 select-none outline-none focus:outline-none ${isDesktop ? "hover:border-[#c52fee] hover:border-2 hover:shadow-[0_0_20px_#C778DD] rounded-tl-3xl rounded-bl-3xl" : " focus:border-[#c52fee] focus:border-2 focus:shadow-[0_0_20px_#C778DD] active:shadow-[0_0_20px_#C778DD] rounded-3xl"}`}
                        >
                            <h4 className="text-xl font-bold font-rajdhani text-white mb-4 group-hover:text-[#C778DD]">
                                Languages
                            </h4>


                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full justify-items-center">

                                {/* HTML */}
                                <div
                                    className={`group flex flex-col items-center justify-center p-3 rounded-lg shadow text-center w-full transition duration-300 ${isDesktop ? "bg-[#282C33] group-hover:bg-[#3a3d42]" : "bg-[#282C33] group-focus:bg-[#3a3d42]"}`}
                                    style={{ opacity: 0.8 }}
                                >
                                    <FaHtml5 className={`text-2xl mb-1 transition-colors duration-300 ${isDesktop ? "text-[#e94417] group-hover:text-[#fa734a]" : "text-[#e94417] group-focus:text-[#fa734a]"}`} />
                                    <span className={`text-sm font-medium font-rubik transition-colors duration-300  ${isDesktop ? "text-[#9F9F9F] group-hover:text-white" : "text-[#9F9F9F] group-focus:text-white"}`}>
                                        HTML
                                    </span>
                                </div>

                                {/* CSS */}
                                <div
                                    className={`group flex flex-col items-center justify-center p-3 rounded-lg shadow text-center w-full transition duration-300 ${isDesktop ? "bg-[#282C33] group-hover:bg-[#3a3d42]" : "bg-[#282C33] group-focus:bg-[#3a3d42]"}`}
                                    style={{ opacity: 0.8 }}
                                >
                                    <FaCss3Alt className={`text-2xl mb-1 transition-colors duration-300 ${isDesktop ? "text-[#1572B6] group-hover:text-[#2196F3]" : "text-[#1572B6] group-focus:text-[#2196F3]"}`} />
                                    <span className={`text-sm font-medium font-rubik transition-colors duration-300  ${isDesktop ? "text-[#9F9F9F] group-hover:text-white" : "text-[#9F9F9F] group-focus:text-white"}`}>
                                        CSS
                                    </span>
                                </div>

                                {/* JavaScript */}
                                <div
                                    className={`group flex flex-col items-center justify-center p-3 rounded-lg shadow text-center w-full transition duration-300 ${isDesktop ? "bg-[#282C33] group-hover:bg-[#3a3d42]" : "bg-[#282C33] group-focus:bg-[#3a3d42]"}`}
                                    style={{ opacity: 0.8 }}
                                >
                                    <FaJs className={`text-2xl mb-1 transition-colors duration-300 ${isDesktop ? "text-[#a79303] group-hover:text-[#F7DF1E]" : "text-[#a79303] group-focus:text-[#F7DF1E]"}`} />
                                    <span className={`text-sm font-medium font-rubik transition-colors duration-300  ${isDesktop ? "text-[#9F9F9F] group-hover:text-white" : "text-[#9F9F9F] group-focus:text-white"}`}>
                                        JavaScript
                                    </span>
                                </div>

                            </div>
                        </div>

                        {/* Tools & Platforms */}
                        <div
                            tabIndex={0}
                            className={`group p-6 border-2 border-base-200 flex flex-col items-center bg-base-200 transition-shadow duration-300 select-none outline-none focus:outline-none ${isDesktop ? "hover:border-[#c52fee] hover:border-2 hover:shadow-[0_0_20px_#C778DD] rounded-tl-3xl rounded-bl-3xl" : "focus:border-[#c52fee] focus:border-2 focus:shadow-[0_0_20px_#C778DD] active:shadow-[0_0_20px_#C778DD] rounded-3xl"}`}
                        >

                            <h4 className="text-xl font-bold font-rajdhani text-white mb-4 group-hover:text-[#C778DD]">Tools &amp; Platforms</h4>

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full justify-items-center">

                                {/* GitHub */}
                                <div
                                    className={`group flex flex-col items-center justify-center p-3 rounded-lg shadow text-center w-full transition duration-300 ${isDesktop ? "bg-[#282C33] group-hover:bg-[#3a3d42]" : "bg-[#282C33] group-focus:bg-[#3a3d42]"}`}
                                    style={{ opacity: 0.8 }}
                                >
                                    <FaGithub className={`text-2xl mb-1 transition-colors duration-300 ${isDesktop ? "text-gray-400 group-hover:text-white" : "text-gray-400 group-focus:text-white"}`} />
                                    <span className={`text-sm font-medium font-rubik transition-colors duration-300  ${isDesktop ? "text-[#9F9F9F] group-hover:text-white" : "text-[#9F9F9F] group-focus:text-white"}`}>
                                        GitHub
                                    </span>
                                </div>

                                {/* Vercel */}
                                <div
                                    className={`group flex flex-col items-center justify-center p-3 rounded-lg shadow text-center w-full transition duration-300 ${isDesktop ? "bg-[#282C33] group-hover:bg-[#3a3d42]" : "bg-[#282C33] group-focus:bg-[#3a3d42]"}`}
                                    style={{ opacity: 0.8 }}
                                >
                                    <SiVercel className={`text-2xl mb-1 transition-colors duration-300 ${isDesktop ? "text-gray-400 group-hover:text-white" : "text-gray-400 group-focus:text-white"}`} />
                                    <span className={`text-sm font-medium font-rubik transition-colors duration-300  ${isDesktop ? "text-[#9F9F9F] group-hover:text-white" : "text-[#9F9F9F] group-focus:text-white"}`}>
                                        Vercel
                                    </span>
                                </div>

                                {/* Netlify */}
                                <div
                                    className={`group flex flex-col items-center justify-center p-3 rounded-lg shadow text-center w-full transition duration-300 ${isDesktop ? "bg-[#282C33] group-hover:bg-[#3a3d42]" : "bg-[#282C33] group-focus:bg-[#3a3d42]"}`}
                                    style={{ opacity: 0.8 }}
                                >
                                    <SiNetlify className={`text-2xl mb-1 transition-colors duration-300 ${isDesktop ? "text-[#048a7f] group-hover:text-[#00C7B7]" : "text-[#048a7f] group-focus:text-[#00C7B7]"}`} />
                                    <span className={`text-sm font-medium font-rubik transition-colors duration-300  ${isDesktop ? "text-[#9F9F9F] group-hover:text-white" : "text-[#9F9F9F] group-focus:text-white"}`}>
                                        Netlify
                                    </span>
                                </div>

                                {/* Figma */}
                                <div
                                    className={`group flex flex-col items-center justify-center p-3 rounded-lg shadow text-center w-full transition duration-300 ${isDesktop ? "bg-[#282C33] group-hover:bg-[#3a3d42]" : "bg-[#282C33] group-focus:bg-[#3a3d42]"}`}
                                    style={{ opacity: 0.8 }}
                                >
                                    <SiFigma className={`text-2xl mb-1 transition-colors duration-300 ${isDesktop ? "text-red-400 group-hover:text-[#F24E1E]" : "text-red-400 group-focus:text-[#F24E1E]"}`} />
                                    <span className={`text-sm font-medium font-rubik transition-colors duration-300  ${isDesktop ? "text-[#9F9F9F] group-hover:text-white" : "text-[#9F9F9F] group-focus:text-white"}`}>
                                        Figma
                                    </span>
                                </div>

                            </div>

                        </div>

                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col justify-center gap-4 lg:gap-12">
                        <div
                            tabIndex={0}
                            className={`group p-6 border-2 border-base-200 flex flex-col items-center bg-base-200 transition-shadow duration-300 select-none outline-none focus:outline-none ${isDesktop ? "hover:border-[#c52fee] hover:border-2 hover:shadow-[0_0_20px_#C778DD] rounded-tr-3xl rounded-br-3xl" : "focus:border-[#c52fee] focus:border-2 focus:shadow-[0_0_20px_#C778DD] active:shadow-[0_0_20px_#C778DD] rounded-3xl"}`}
                        >
                            <h4 className={`text-xl font-bold font-rajdhani ${isDesktop ? "text-white mb-4 group-hover:text-[#C778DD]" : "text-white mb-4 group-focus:text-[#C778DD]"}`}>
                                Frontend
                            </h4>
                            <div className="group grid grid-cols-2 sm:grid-cols-3 gap-4 w-full justify-items-center">

                                {/* React */}
                                <div
                                    className={`group flex flex-col items-center justify-center p-3 rounded-lg shadow text-center w-full transition duration-300 ${isDesktop ? "bg-[#282C33] group-hover:bg-[#3a3d42]" : "bg-[#282C33] group-focus:bg-[#3a3d42]"}`}
                                    style={{ opacity: 0.8 }}
                                >
                                    <FaReact className={`text-2xl mb-1 transition-colors duration-300 ${isDesktop ? "text-blue-400 group-hover:text-[#61DAFB]" : "text-blue-400 group-focus:text-[#61DAFB]"}`} />
                                    <span className={`text-sm font-medium font-rubik transition-colors duration-300  ${isDesktop ? "text-[#9F9F9F] group-hover:text-white" : "text-[#9F9F9F] group-focus:text-white"}`}>
                                        React
                                    </span>
                                </div>

                                {/* Next.js */}
                                <div
                                    className={`group flex flex-col items-center justify-center p-3 rounded-lg shadow text-center w-full transition duration-300 ${isDesktop ? "bg-[#282C33] group-hover:bg-[#3a3d42]" : "bg-[#282C33] group-focus:bg-[#3a3d42]"}`}
                                    style={{ opacity: 0.8 }}
                                >
                                    <SiNextdotjs className={`text-2xl mb-1 transition-colors duration-300 ${isDesktop ? "text-gray-400 group-hover:text-white" : "  text-gray-400 group-focus:text-white"}`} />
                                    <span className={`text-sm font-medium font-rubik transition-colors duration-300  ${isDesktop ? "text-[#9F9F9F] group-hover:text-white" : "text-[#9F9F9F] group-focus:text-white"}`}>
                                        Next.js
                                    </span>
                                </div>

                                {/* Tailwind CSS */}
                                <div
                                    className={`group flex flex-col items-center justify-center p-3 rounded-lg shadow text-center w-full transition duration-300 ${isDesktop ? "bg-[#282C33] group-hover:bg-[#3a3d42]" : "bg-[#282C33] group-focus:bg-[#3a3d42]"}`}
                                    style={{ opacity: 0.8 }}
                                >
                                    <SiTailwindcss className={`text-2xl mb-1 transition-colors duration-300 ${isDesktop ? "text-[#38B2AC] group-hover:text-teal-400" : "text-[#38B2AC] transition-colors duration-300 group-focus:text-teal-400"}`} />
                                    <span className={`text-sm font-medium font-rubik transition-colors duration-300  ${isDesktop ? "text-[#9F9F9F] group-hover:text-white" : "text-[#9F9F9F] group-focus:text-white"}`}>
                                        Tailwind CSS
                                    </span>
                                </div>

                                {/* Bootstrap */}
                                <div
                                    className={`group flex flex-col items-center justify-center p-3 rounded-lg shadow text-center w-full transition duration-300 ${isDesktop ? "bg-[#282C33] group-hover:bg-[#3a3d42]" : "bg-[#282C33] group-focus:bg-[#3a3d42]"}`}
                                    style={{ opacity: 0.8 }}
                                >
                                    <SiBootstrap className={`text-2xl mb-1 transition-colors duration-300 ${isDesktop ? "text-[#7952B3] group-hover:text-purple-400" : "text-[#7952B3] group-focus:text-purple-400"}`} />
                                    <span className={`text-sm font-medium font-rubik transition-colors duration-300  ${isDesktop ? "text-[#9F9F9F] group-hover:text-white" : "text-[#9F9F9F] group-focus:text-white"}`}>
                                        Bootstrap
                                    </span>
                                </div>

                                {/* DaisyUI */}
                                <div
                                    className={`group flex flex-col items-center justify-center p-3 rounded-lg shadow text-center w-full transition duration-300 ${isDesktop ? "bg-[#282C33] group-hover:bg-[#3a3d42]" : "bg-[#282C33] group-focus:bg-[#3a3d42]"}`}
                                    style={{ opacity: 0.8 }}
                                >
                                    <SiDaisyui className={`text-2xl mb-1 transition-colors duration-300 ${isDesktop ? "text-[#C778DD] group-hover:text-pink-400" : "text-[#7952B3] group-focus:text-purple-400"}`} />
                                    <span className={`text-sm font-medium font-rubik transition-colors duration-300  ${isDesktop ? "text-[#9F9F9F] group-hover:text-white" : "text-[#9F9F9F] group-focus:text-white"}`}>
                                        DaisyUI
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Skills;