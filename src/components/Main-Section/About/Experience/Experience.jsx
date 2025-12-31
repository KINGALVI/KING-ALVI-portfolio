import { useEffect, useState } from "react";


const Experience = () => {

    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const checkScreen = () => setIsDesktop(window.innerWidth >= 1024);
        checkScreen();
        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    return (
        <>
            <section className="m-3">

                <div className="text-center mb-12">
                    <div className="flex items-center gap-3 mb-3">
                        <h1 className="md:text-4xl text-3xl">
                            <span className="text-[#C778DD]">#</span>Professional Experience
                        </h1>
                        <div>
                            <div className="h-0.5 border mt-2.5 border-[#C778DD] md:w-[400px] w-40"></div>
                        </div>
                    </div>
                    <p className="md:text-4xl text-2xl text-center mb-5 mt-10">Where I've Got My Trained & Experience</p>
                </div>

                <div
                    tabIndex={0}
                    role="button"
                    className={`bg-[#1e2125] w-11/12 mx-auto p-6 rounded-3xl shadow-lg text-left h-full flex flex-col justify-between transition duration-300 mb-10 ${isDesktop
                        ? "hover:shadow-[0_0_20px_#C778DD] hover:border-2 hover:border-[#c52fee]"
                        : "focus:shadow-[0_0_20px_#C778DD] focus:border-2 focus:border-[#c52fee] active:shadow-[0_0_20px_#C778DD] active:border-2 active:border-[#c52fee]"
                        }`}
                >
                    <div>
                        <h3 className="text-xl font-bold font-rajdhani text-[#C778DD]">Bdcalling Academy</h3>
                        <h4 className="text-lg font-semibold font-rubik mt-1">
                            Industrial Training – (MERN Stack)
                        </h4>
                        <p className="text-sm text-[#9F9F9F] mb-4 font-rubik">July 2025 – October, 2025</p>

                        <div class="flex mb-6">
                            <div className="grid items-center me-3 gap-3">
                                <span className="h-2 w-2 bg-[#C778DD] rounded-xl"></span>
                                <span className="h-2 w-2 bg-[#C778DD] rounded-xl"></span>
                                <span className="h-2 w-2 bg-[#C778DD] rounded-xl"></span>
                                <span className="h-2 w-2 bg-[#C778DD] rounded-xl"></span>
                                <span className="h-2 w-2 bg-[#C778DD] rounded-xl"></span>
                                <span className="h-2 w-2 bg-[#C778DD] rounded-xl"></span>
                            </div>
                            <div className="text-sm text-[#D1D1D1] font-rubik">
                                <p className="mb-2.5">Strengthened fundamentals in <span className="text-[#C778DD]">HTML</span>, <span className="text-[#C778DD]">CSS</span>, and <span className="text-[#C778DD]">JavaScript</span> for building structured, interactive web applications.</p>
                                <p className="mb-2.5">Practiced <span className="text-[#C778DD]">API data management</span> and integration to create dynamic, data‑driven projects.</p>
                                <p className="mb-2.5">Explored modern styling frameworks like <span className="text-[#C778DD]">Tailwind CSS</span> to design responsive and polished user interfaces.</p>
                                <p className="mb-2.5">Developed applications with <span className="text-[#C778DD]">React</span>, focusing on component management, reusable structures, and efficient state handling.</p>
                                <p className="mb-2.5">Applied advanced React concepts such as <span className="text-[#C778DD]">Props Drilling</span> and <span className="text-[#C778DD]">Context API</span> to manage global state and improve scalability.</p>
                                <p>Collaborated with peers and mentors on real‑world projects, debugging sessions, and code reviews to sharpen problem‑solving skills.</p>
                            </div>


                            <ul className="list-disc list-inside space-y-1 ">

                            </ul>
                        </div>
                    </div>
                </div>

                <div
                    tabIndex={0}
                    role="button"
                    className={`bg-[#1e2125] w-11/12 mx-auto p-6 rounded-3xl shadow-lg text-left h-full flex flex-col justify-between transition duration-300 ${isDesktop
                        ? "hover:shadow-[0_0_20px_#C778DD] hover:border-2 hover:border-[#c52fee]"
                        : "focus:shadow-[0_0_20px_#C778DD] focus:border-2 focus:border-[#c52fee] active:shadow-[0_0_20px_#C778DD] active:border-2 active:border-[#c52fee]"
                        }`}
                >
                    <div>
                        <h3 className="text-xl font-bold font-rajdhani text-[#C778DD]">Programming Hero</h3>
                        <h4 className="text-lg font-semibold font-rubik mt-1">
                            Programming Student – (MERN Stack)
                        </h4>
                        <p className="text-sm text-[#9F9F9F] mb-4 font-rubik">
                            January 2021 – July, 2021
                        </p>

                        <div class="flex mb-6 ">
                            <div className="grid items-center me-3 gap-3">
                                <span className="h-2 w-2 bg-[#C778DD] rounded-xl"></span>
                                <span className="h-2 w-2 bg-[#C778DD] rounded-xl"></span>
                                <span className="h-2 w-2 bg-[#C778DD] rounded-xl"></span>
                                <span className="h-2 w-2 bg-[#C778DD] rounded-xl"></span>
                                <span className="h-2 w-2 bg-[#C778DD] rounded-xl"></span>
                                <span className="h-2 w-2 bg-[#C778DD] rounded-xl"></span>
                                <span className="h-2 w-2 bg-[#C778DD] rounded-xl"></span>
                                <span className="h-2 w-2 bg-[#C778DD] rounded-xl"></span>
                            </div>

                            <div className="text-sm text-[#D1D1D1] font-rubik">
                                <p className="mb-2.5">Learned the fundamentals of <span className="text-[#C778DD]">HTML</span> and <span className="text-[#C778DD]">CSS</span> for building structured and styled web pages.</p>
                                <p className="mb-2.5">Developed interactive features using <span className="text-[#C778DD]">JavaScript</span> and practiced <span className="text-[#C778DD]">API data management</span> for dynamic applications.</p>
                                <p className="mb-2.5">Explored modern styling frameworks like <span className="text-[#C778DD]">Bootstrap</span> and <span className="text-[#C778DD]">Tailwind CSS</span> to create responsive, polished UIs.</p>
                                <p className="mb-2.5">Built projects with <span className="text-[#C778DD]">React</span>, focusing on component management, props drilling, and state handling.</p>
                                <p className="mb-2.5">Applied <span className="text-[#C778DD]">React Context API</span> to manage global state and improve scalability in applications.</p>
                                <p className="mb-2.5">Closely observed and experimented with <span className="text-[#C778DD]">Firebase Authentication</span> for secure user login systems.</p>
                                <p className="mb-2.5">Explored backend concepts with <span className="text-[#C778DD]">MongoDB</span>, gaining insight into database management for MERN stack projects.</p>
                                <p>Continuing to learn and refine skills in full-stack development, with a focus on real-world project building and modern web practices.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section >
        </>
    );
};

export default Experience;