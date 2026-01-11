import Skills from "./Skills/Skills";
import Education from "./Education/Education";
import { useEffect, useState } from "react";
import Experience from "./Experience/Experience";

const About = () => {

    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const checkScreen = () => setIsDesktop(window.innerWidth >= 1024);
        checkScreen();
        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    return (
        <>
            <section className="lg:m-5 m-2 mt-7">
                <div className="flex items-center gap-3">
                    <h1 className="md:text-4xl text-3xl">
                        <span className="text-[#C778DD]">#</span>About Me
                    </h1>
                    <div>
                        <div className="h-0.5 border mt-2.5 border-[#C778DD] md:w-[400px] w-40"></div>
                    </div>
                </div>

                <br />

                <h1 className="md:text-4xl text-2xl text-center lg:mb-15 mb-5">
                    Progress • Objective • Progress
                </h1>

                <div className="lg:flex justify-between gap-3">
                    <div>
                        <article>
                            <p className="text-[#ABB2BF] pt-5 pb-2.5 text-center lg:text-left">
                                I'm Alvi Al Mahmud, an enthusiastic and innovative web developer who is passionate about solving problems and creating a clean user interface. Developing technology to make life simpler, simpler to enjoy, or more meaningful is what defines me.
                            </p>
                            <p className="text-[#ABB2BF] pt-5 pb-2.5 text-center lg:text-left">
                                I enjoy a challenge. I like the process of coming up with simple, elegant solutions, whether it's for a complex layout, difficult API integration, or performance optimization. That is the driving force behind me.
                            </p>
                            <p className="text-[#ABB2BF] pt-5 pb-2.5 text-center lg:text-left">
                                Great software and web applications, in my view, are made up of empathy, acquiring the problems that users face, and providing solutions that are not only useful but also pleasant.
                            </p>
                        </article>
                        <article className="mt-5 mb-5">
                            <h3 className="text-xl font-semibold font-rajdhani text-[#C778DD] mb-1">Things That Encourage Me
                            </h3>
                            <ul className="list-disc list-inside text-[#ABB2BF] font-rubik">
                                <li>Solving real-world problems with code.</li>
                                <li>Designing clean and simple interfaces.</li>
                                <li>Learning new technologies and patterns.</li>
                                <li>Constructing impactful digital experiences.</li>
                            </ul>
                        </article>
                        <article className="mb-5 lg:mb-0">
                            <h3 className="text-xl font-semibold font-rajdhani text-[#C778DD] mb-1">My Philosophy</h3><p className="text-[#ABB2BF] font-rubik">“I create modern, human-centered solutions that are impactful and simple for solving real-world issues. These solutions are readable, reusable, and ultimately helpful.”</p>
                        </article>
                    </div>
                    <div className="grid">
                        <div className="lg:flex grid gap-3 mb-2">
                            <div className={`group bg-base-200 rounded-xl shadow-xl border-2 border-[#ABB2BF] hover:border-[#c52fee] transition ${isDesktop ? "hover:shadow-[0_0_20px_#C778DD]" : "focus:shadow-[0_0_20px_#C778DD] border-[#ABB2BF] focus:border-[#c52fee]"}`} tabIndex={0}>
                                <h4 className="text-lg font-bold font-rajdhani p-4">
                                    Favorite Tech
                                </h4>
                                <div className={`border  w-full rounded-t-xl${isDesktop ? "border-[#ABB2BF] group-hover:border-[#c52fee]" : "border-[#ABB2BF] group-focus:border-[#c52fee]"}`}></div>
                                <p className="p-4">
                                    React, Tailwind CSS, Bootstrap, DaisyUI, React Bootstrap
                                </p>
                            </div>
                            <div className={`group bg-base-200 rounded-xl shadow-xl border-2 border-[#ABB2BF] hover:border-[#c52fee] transition md:w-[400px] ${isDesktop ? "hover:shadow-[0_0_20px_#C778DD]" : "focus:shadow-[0_0_20px_#C778DD] border-[#ABB2BF] focus:border-[#c52fee]"}`} tabIndex={0}>
                                <h5 className="text-lg p-4 font-bold font-rajdhani">Currently Exploring</h5>
                                <div className={`border  w-full rounded-t-xl ${isDesktop ? "border-[#ABB2BF] group-hover:border-[#c52fee]" : "border-[#ABB2BF] group-focus:border-[#c52fee]"}`}></div>
                                <p className="p-4">Next.js, Google Firebase, MongoDB</p>
                            </div>
                        </div>
                        <div className={`group bg-base-200 rounded-xl shadow-xl border-2 border-[#ABB2BF] hover:border-[#c52fee] transition ${isDesktop ? "hover:shadow-[0_0_20px_#C778DD]" : "focus:shadow-[0_0_20px_#C778DD] border-[#ABB2BF] focus:border-[#c52fee]"}`} tabIndex={0}>
                            <h5 className="text-lg font-bold p-4 font-rajdhani">More About Me</h5>
                            <div className={`border  w-full rounded-t-xl ${isDesktop ? "border-[#ABB2BF] group-hover:border-[#c52fee]" : "border-[#ABB2BF] group-focus:border-[#c52fee]"}`}></div>
                            <p className="p-4">Whether it's through creating projects, exploring new frameworks, or involving myself in developer networks, I'm passionate about lifelong learning. I also love design and animation.</p>
                        </div>
                    </div>
                </div>
            </section>

            <br /><br />

            <Skills />

            <Education />

            <Experience />

        </>
    );
};

export default About;