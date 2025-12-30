import { FaHtml5, FaCss3Alt, FaJs, FaGithub, FaReact } from "react-icons/fa";
import { SiVercel, SiNetlify, SiFigma, SiNextdotjs, SiTailwindcss, SiBootstrap, SiDaisyui } from "react-icons/si";

const About = () => {

    return (
        <>
            <section className="lg:m-5 m-2">
                <div className="flex items-center gap-3">
                    <h1 className="md:text-4xl text-3xl">
                        <span className="text-[#C778DD]">#</span>About Me
                    </h1>
                    <div>
                        <div className="h-0.5 border mt-2.5 border-[#C778DD] md:w-[400px] w-40"></div>
                    </div>
                </div>

                <br />

                <h1 className="md:text-4xl text-2xl text-center mb-5">
                    Progress • Objective • Progress
                </h1>

                <div className="lg:flex justify-between items-center gap-3 mb-5">
                    <div className="mb-5">
                        <article>
                            <p className="text-[#ABB2BF] pt-5 pb-2.5 md:text-center lg:text-left">
                                I'm Alvi Al Mahmud, an enthusiastic and innovative web developer who is passionate about solving problems and creating a clean user interface. Developing technology to make life simpler, simpler to enjoy, or more meaningful is what defines me.
                            </p>
                            <p className="text-[#ABB2BF] pt-5 pb-2.5 md:text-center lg:text-left">
                                I enjoy a challenge. I like the process of coming up with simple, elegant solutions, whether it's for a complex layout, difficult API integration, or performance optimization. That is the driving force behind me.
                            </p>
                            <p className="text-[#ABB2BF] pt-5 pb-2.5 md:text-center lg:text-left">
                                Great software and web applications, in my view, are made up of empathy, acquiring the problems that users face, and providing solutions that are not only useful but also pleasant.
                            </p>
                        </article>
                        <article className="mt-5">
                            <h3 class="text-xl font-semibold font-rajdhani text-[#C778DD] mb-2">Things That Encourage Me
                            </h3>
                            <ul class="list-disc list-inside text-[#ABB2BF] font-rubik">
                                <li>Solving real-world problems with code.</li>
                                <li>Designing clean and simple interfaces.</li>
                                <li>Learning new technologies and patterns.</li>
                                <li>Constructing impactful digital experiences.</li>
                            </ul>
                        </article>
                        <article className="mt-5">
                            <h3 class="text-xl font-semibold font-rajdhani text-[#C778DD] mb-2">My Philosophy</h3><p class="text-[#ABB2BF] font-rubik">“I create modern, human-centered solutions that are impactful and simple for solving real-world issues. These solutions are readable, reusable, and ultimately helpful.”</p>
                        </article>
                    </div>
                    <div className="gird">
                        <div className="lg:flex grid gap-3 mb-2">
                            <div className="bg-base-200 rounded-xl shadow-xl border-2 border-[#ABB2BF] hover:border-[#C778DD] transition">
                                <div className="border border-[#ABB2BF] hover:border-[#C778DD] w-full rounded-t-xl">
                                    <h4 class="text-lg font-bold font-rajdhani p-4">Favorite Tech</h4>
                                </div>
                                <div className="border border-[#ABB2BF] hover:border-[#C778DD] w-full rounded-b-xl">
                                    <p className="p-4">React, Tailwind CSS, Bootstrap, daisy UI, React Bootstrap</p>
                                </div>
                            </div>
                            <div className="bg-base-200 rounded-xl shadow-xl border-2 border-[#ABB2BF] hover:border-[#C778DD] transition md:w-[400px]">
                                <div className="border border-[#ABB2BF] hover:border-[#C778DD] w-full rounded-t-xl">
                                    <h5 className="text-lg p-4 font-bold font-rajdhani">Currently Exploring</h5>
                                </div>
                                <div className="border border-[#ABB2BF] hover:border-[#C778DD] w-full rounded-b-xl">
                                    <p className="p-4">Next.js, Google Firebase, MongoDB</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-base-200 rounded-xl shadow-xl border-2 border-[#ABB2BF] hover:border-[#C778DD] transition">
                            <div className="border border-[#ABB2BF] hover:border-[#C778DD] w-full rounded-t-xl">
                                <h5 className="text-lg font-bold p-4 font-rajdhani">More About Me</h5>
                            </div>
                            <div className="border border-[#ABB2BF] hover:border-[#C778DD] w-full rounded-b-xl">
                                <p className="p-4">Whether it's through creating projects, exploring new frameworks, or involving myself in developer networks, I'm passionate about lifelong learning. I also love design and animation.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className="flex items-center gap-3 mb-3">
                    <h1 className="md:text-4xl text-3xl">
                        <span className="text-[#C778DD]">#</span>Skills
                    </h1>
                    <div>
                        <div className="h-0.5 border mt-2.5 border-[#C778DD] md:w-[400px] w-40"></div>
                    </div>
                </div>

                <h1 className="md:text-4xl text-2xl text-center mb-5">
                    Skill I have
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-0 lg:divide-y-0 lg:divide-x divide-[#a4a7ad]">

                    {/* Left Column */}
                    <div className="flex flex-col gap-4 lg:gap-12">

                        {/* Languages */}
                        <div className="p-6 flex flex-col items-center bg-base-200 lg:rounded-tl-3xl lg:rounded-bl-3xl rounded-3xl aos-init aos-animate transition-shadow duration-300 lg:hover:shadow-[0_0_20px_#C778DD] focus:shadow-[0_0_20px_#C778DD]"
                            tabIndex={0} data-aos="flip-up">
                            <h4 className="text-xl font-bold font-rajdhani text-white mb-4">Languages</h4>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full justify-items-center">
                                <div className="flex flex-col items-center justify-center bg-[#2c2f34] p-3 rounded-lg shadow text-center w-full hover:bg-[#3a3d42] transition" style={{ opacity: 0.8 }}>
                                    <FaHtml5 className="text-2xl mb-1 text-[#E34F26] hover:text-[#FF5722] transition-colors duration-300" />
                                    <span className="text-sm text-[#9F9F9F] font-medium font-rubik">HTML</span>
                                </div>
                                <div className="flex flex-col items-center justify-center bg-[#2c2f34] p-3 rounded-lg shadow text-center w-full hover:bg-[#3a3d42] transition" style={{ opacity: 0.8 }}>
                                    <FaCss3Alt className="text-2xl mb-1 text-[#1572B6] hover:text-[#2196F3] transition-colors duration-300" />
                                    <span className="text-sm text-[#9F9F9F] font-medium font-rubik">CSS</span>
                                </div>
                                <div className="flex flex-col items-center justify-center bg-[#2c2f34] p-3 rounded-lg shadow text-center w-full hover:bg-[#3a3d42] transition" style={{ opacity: 0.8 }}>
                                    <FaJs className="text-2xl mb-1 text-[#F7DF1E] hover:text-yellow-400 transition-colors duration-300" />
                                    <span className="text-sm text-[#9F9F9F] font-medium font-rubik">JavaScript</span>
                                </div>
                            </div>
                        </div>

                        {/* Tools & Platforms */}
                        <div className="p-6 flex flex-col items-center bg-base-200 lg:rounded-tl-3xl lg:rounded-bl-3xl rounded-3xl  aos-init aos-animate transition-shadow duration-300 lg:hover:shadow-[0_0_20px_#C778DD] focus:shadow-[0_0_20px_#C778DD]"
                            tabIndex={0} data-aos="flip-up">
                            <h4 className="text-xl font-bold font-rajdhani text-white mb-4">Tools &amp; Platforms</h4>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full justify-items-center">
                                <div className="flex flex-col items-center justify-center bg-[#2c2f34] p-3 rounded-lg shadow text-center w-full hover:bg-[#3a3d42] transition" style={{ opacity: 0.8 }}>
                                    <FaGithub className="text-2xl mb-1 text-white hover:text-gray-400 transition-colors duration-300" />
                                    <span className="text-sm text-[#9F9F9F] font-medium font-rubik">GitHub</span>
                                </div>
                                <div className="flex flex-col items-center justify-center bg-[#2c2f34] p-3 rounded-lg shadow text-center w-full hover:bg-[#3a3d42] transition" style={{ opacity: 0.8 }}>
                                    <SiVercel className="text-2xl mb-1 text-white hover:text-gray-400 transition-colors duration-300" />
                                    <span className="text-sm text-[#9F9F9F] font-medium font-rubik">Vercel</span>
                                </div>
                                <div className="flex flex-col items-center justify-center bg-[#2c2f34] p-3 rounded-lg shadow text-center w-full hover:bg-[#3a3d42] transition" style={{ opacity: 0.8 }}>
                                    <SiNetlify className="text-2xl mb-1 text-[#00C7B7] hover:text-teal-400 transition-colors duration-300" />
                                    <span className="text-sm text-[#9F9F9F] font-medium font-rubik">Netlify</span>
                                </div>
                                <div className="flex flex-col items-center justify-center bg-[#2c2f34] p-3 rounded-lg shadow text-center w-full hover:bg-[#3a3d42] transition" style={{ opacity: 0.8 }}>
                                    <SiFigma className="text-2xl mb-1 text-[#F24E1E] hover:text-red-400 transition-colors duration-300" />
                                    <span className="text-sm text-[#9F9F9F] font-medium font-rubik">Figma</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col justify-center gap-4 lg:gap-12">
                        <div className="p-6 flex flex-col items-center bg-base-200 lg:rounded-tr-3xl lg:rounded-br-3xl rounded-3xl aos-init aos-animate transition-shadow duration-300 lg:hover:shadow-[0_0_20px_#C778DD] focus:shadow-[0_0_20px_#C778DD]"
                            tabIndex={0} data-aos="flip-up">
                            <h4 className="text-xl font-bold font-rajdhani text-white mb-4">Frontend</h4>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full justify-items-center">
                                <div className="flex flex-col items-center justify-center bg-[#2c2f34] p-3 rounded-lg shadow text-center w-full hover:bg-[#3a3d42] transition" style={{ opacity: 0.8 }}>
                                    <FaReact className="text-2xl mb-1 text-[#61DAFB] hover:text-blue-400 transition-colors duration-300" />
                                    <span className="text-sm text-[#9F9F9F] font-medium font-rubik">React</span>
                                </div>
                                <div className="flex flex-col items-center justify-center bg-[#2c2f34] p-3 rounded-lg shadow text-center w-full hover:bg-[#3a3d42] transition" style={{ opacity: 0.8 }}>
                                    <SiNextdotjs className="text-2xl mb-1 text-white hover:text-gray-400 transition-colors duration-300" />
                                    <span className="text-sm text-[#9F9F9F] font-medium font-rubik">Next.js</span>
                                </div>
                                <div className="flex flex-col items-center justify-center bg-[#2c2f34] p-3 rounded-lg shadow text-center w-full hover:bg-[#3a3d42] transition" style={{ opacity: 0.8 }}>
                                    <SiTailwindcss className="text-2xl mb-1 text-[#38B2AC] hover:text-teal-400 transition-colors duration-300" />
                                    <span className="text-sm text-[#9F9F9F] font-medium font-rubik">Tailwind CSS</span>
                                </div>
                                <div className="flex flex-col items-center justify-center bg-[#2c2f34] p-3 rounded-lg shadow text-center w-full hover:bg-[#3a3d42] transition" style={{ opacity: 0.8 }}>
                                    <SiBootstrap className="text-2xl mb-1 text-[#7952B3] hover:text-purple-400 transition-colors duration-300" />
                                    <span className="text-sm text-[#9F9F9F] font-medium font-rubik">Bootstrap</span>
                                </div>
                                <div className="flex flex-col items-center justify-center bg-[#2c2f34] p-3 rounded-lg shadow text-center w-full hover:bg-[#3a3d42] transition" style={{ opacity: 0.8 }}>
                                    <SiDaisyui className="text-2xl mb-1 text-[#C778DD] hover:text-pink-400 transition-colors duration-300" />
                                    <span className="text-sm text-[#9F9F9F] font-medium font-rubik">DaisyUI</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="education" class="py-16 text-white">
                <div class="w-11/12 mx-auto">
                    <div class="text-center mb-12">
                        <div className="flex items-center gap-3 mb-3">
                            <h1 className="md:text-4xl text-3xl">
                                <span className="text-[#C778DD]">#</span>Education
                            </h1>
                            <div>
                                <div className="h-0.5 border mt-2.5 border-[#C778DD] md:w-[400px] w-40"></div>
                            </div>
                        </div>
                        <p class="text-4xl font-bold font-rubik mt-5">My Academic Journey</p>
                    </div>
                    <div class="relative">
                        <div class="absolute left-0 lg:left-1/2 lg:transform lg:-translate-x-1/2 h-full w-1 bg-[#a4a7ad]"></div>
                        <div class="flex flex-col gap-16">
                            {/* For Future Addition */}
                            <div class="relative flex items-center justify-between w-full">

                            </div>
                            <div class="relative flex items-center justify-between w-full">
                                <div class="lg:hidden w-full pl-6 text-left aos-init aos-animate" data-aos="zoom-in">
                                    <div class="bg-[#1e2125] p-5 rounded-tr-3xl rounded-bl-3xl shadow-md max-w-xs mr-auto relative transition-shadow duration-300 lg:hover:shadow-[0_0_20px_#C778DD] focus:shadow-[0_0_20px_#C778DD]"
                                        tabIndex={0}>
                                        <div class="w-4 h-4 bg-[#b519e0] rounded-full border-4 border-white shadow-md absolute top-5 -left-7.5 lg:-top-2 lg:-left-10"></div>
                                        <h4 class="text-xl font-bold font-rajdhani">Diploma of Computer Science &amp; Engineering</h4>
                                        <p class="text-[#9F9F9F] font-rubik">United International University, Dhaka- 1212</p>
                                        <span class="text-sm font-rubik">2026 - 2027</span>
                                    </div>
                                </div>
                                <div class="hidden lg:flex w-full items-center justify-between aos-init aos-animate" data-aos="zoom-in">
                                    <div class="w-1/2 pr-6 text-right">
                                        <div class="bg-[#1e2125] p-5 rounded-tl-3xl rounded-br-3xl shadow-md max-w-lg ml-auto space-y-4 transition-shadow duration-300 lg:hover:shadow-[0_0_20px_#C778DD] focus:shadow-[0_0_20px_#C778DD]"
                                            tabIndex={0}>
                                            <h4 class="text-xl font-bold font-rajdhani">Diploma of Computer Science &amp; Engineering</h4>
                                            <p class="text-[#9F9F9F] font-rubik">United International University, Dhaka- 1212</p>
                                            <span class="text-sm font-rubik">2026 - 2027</span>
                                        </div>
                                    </div>
                                    <div class="w-1/2 relative flex justify-start items-start">
                                        <div class="w-4 h-4 bg-[#b519e0] rounded-full border-4 border-white shadow-md absolute -top-10 -left-2">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="relative flex items-center justify-between w-full">
                                <div class="lg:hidden w-full pl-6 text-left aos-init" data-aos="zoom-in">
                                    <div class="bg-[#1e2125] p-5 rounded-tr-3xl rounded-bl-3xl shadow-md max-w-xs mr-auto relative transition-shadow duration-300 lg:hover:shadow-[0_0_20px_#C778DD] focus:shadow-[0_0_20px_#C778DD]"
                                        tabIndex={0}>
                                        <div class="w-4 h-4 bg-[#b519e0] rounded-full border-4 border-white shadow-md absolute top-5 -left-7.5 lg:-top-2 lg:-left-10"></div>
                                        <h4 class="text-xl font-bold font-rajdhani">Secondary School Certificate (SSC)</h4>
                                        <p class="text-[#9F9F9F] font-rubik">B.C.S.I.R High School</p>
                                        <span class="text-sm font-rubik">2019 - 2020</span>
                                    </div>
                                </div>
                                <div class="hidden lg:flex w-full items-center justify-between aos-init aos-animate" data-aos="zoom-in">
                                    <div class="w-1/2 relative flex justify-end items-start">
                                        <div class="w-4 h-4 bg-[#b519e0] rounded-full border-4 border-white shadow-md absolute -top-10 -right-2"></div>
                                    </div>
                                    <div class="w-1/2 pl-6 text-left">
                                        <div class="bg-[#1e2125] p-5 rounded-tr-3xl rounded-bl-3xl shadow-md max-w-lg mr-auto space-y-4 transition-shadow duration-300 lg:hover:shadow-[0_0_20px_#C778DD] focus:shadow-[0_0_20px_#C778DD]"
                                            tabIndex={0} style={{ transform: "none" }}>
                                            <h4 class="text-xl font-bold font-rajdhani">Secondary School Certificate (SSC)</h4>
                                            <p class="text-[#9F9F9F] font-rubik">B.C.S.I.R High School</p>
                                            <span class="text-sm font-rubik">2019 - 2020</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* For Future Addition */}
                            <div class="relative flex items-center justify-between w-full">

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default About;