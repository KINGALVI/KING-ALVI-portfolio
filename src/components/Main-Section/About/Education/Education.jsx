import { useEffect, useState } from "react";


const Education = () => {

    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const checkScreen = () => setIsDesktop(window.innerWidth >= 1024);
        checkScreen();
        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    return (
        <>
            <section id="Education" className="py-16 text-white">
                <div Name="w-11/12 mx-auto">
                    <div className="text-center mb-12">
                        <div className="flex items-center gap-3 mb-3">
                            <h1 className="md:text-4xl text-3xl">
                                <span className="text-[#C778DD]">#</span>Education
                            </h1>
                            <div>
                                <div className="h-0.5 border mt-2.5 border-[#C778DD] md:w-[400px] w-40"></div>
                            </div>
                        </div>
                        <p className="md:text-4xl text-2xl text-center mb-5">My Academic Journey</p>
                    </div>
                    <div className="relative">
                        <div className="absolute left-0 lg:left-1/2 lg:transform lg:-translate-x-1/2 h-full w-1 bg-[#a4a7ad]"></div>
                        <div className="flex flex-col gap-16">
                            {/* For Future Addition */}
                            <div className="relative flex items-center justify-between w-full">

                            </div>
                            <div className="relative flex items-center justify-between w-full">
                                <div className="lg:hidden w-full pl-6 text-left aos-init aos-animate" data-aos="zoom-in">
                                    <div className={`bg-[#1e2125] p-5 rounded-tr-3xl rounded-bl-3xl shadow-md max-w-xs mr-auto relative transition-shadow duration-300 ${isDesktop ? "lg:hover:shadow-[0_0_20px_#C778DD]" : "focus:shadow-[0_0_20px_#C778DD] active:shadow-[0_0_20px_#C778DD]"}`}
                                        tabIndex={0}>
                                        <div className="w-4 h-4 bg-[#b519e0] rounded-full border-4 border-white shadow-md absolute top-5 -left-7.5 lg:-top-2 lg:-left-10"></div>
                                        <h4 className="text-xl font-bold font-rajdhani">Diploma of Computer Science &amp; Engineering</h4>
                                        <p className="text-[#9F9F9F] font-rubik">shariatpur polytechnic institute, Shariatpur - 8001</p>
                                        <span className="text-sm font-rubik">2026 - 2027</span>
                                    </div>
                                </div>
                                <div className="hidden lg:flex w-full items-center justify-between aos-init aos-animate" data-aos="zoom-in">
                                    <div className="w-1/2 pr-6 text-right">
                                        <div className={`bg-[#1e2125] p-5 rounded-tl-3xl rounded-br-3xl shadow-md max-w-lg ml-auto space-y-4 transition-shadow duration-300 ${isDesktop ? "lg:hover:shadow-[0_0_20px_#C778DD]" : "focus:shadow-[0_0_20px_#C778DD] active:shadow-[0_0_20px_#C778DD]"}`}
                                            tabIndex={0}>
                                            <h4 className="text-xl font-bold font-rajdhani">Diploma of Computer Science &amp; Engineering</h4>
                                            <p className="text-[#9F9F9F] font-rubik">shariatpur polytechnic institute, Shariatpur - 8001</p>
                                            <span className="text-sm font-rubik">2026 - 2027</span>
                                        </div>
                                    </div>
                                    <div className="w-1/2 relative flex justify-start items-start">
                                        <div className="w-4 h-4 bg-[#b519e0] rounded-full border-4 border-white shadow-md absolute -top-10 -left-2">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative flex items-center justify-between w-full">
                                <div className="lg:hidden w-full pl-6 text-left aos-init" data-aos="zoom-in">
                                    <div className={`bg-[#1e2125] p-5 rounded-tr-3xl rounded-bl-3xl shadow-md max-w-xs mr-auto relative transition-shadow duration-300 ${isDesktop ? "lg:hover:shadow-[0_0_20px_#C778DD]" : "focus:shadow-[0_0_20px_#C778DD] active:shadow-[0_0_20px_#C778DD]"}`}
                                        tabIndex={0}>
                                        <div className="w-4 h-4 bg-[#b519e0] rounded-full border-4 border-white shadow-md absolute top-5 -left-7.5 lg:-top-2 lg:-left-10"></div>
                                        <h4 className="text-xl font-bold font-rajdhani">Secondary School Certificate (SSC)</h4>
                                        <p className="text-[#9F9F9F] font-rubik">B.C.S.I.R High School & Collage, Dhaka - 1205</p>
                                        <span className="text-sm font-rubik">2019 - 2020</span>
                                    </div>
                                </div>
                                <div className="hidden lg:flex w-full items-center justify-between aos-init aos-animate" data-aos="zoom-in">
                                    <div className="w-1/2 relative flex justify-end items-start">
                                        <div className="w-4 h-4 bg-[#b519e0] rounded-full border-4 border-white shadow-md absolute -top-10 -right-2"></div>
                                    </div>
                                    <div class="w-1/2 pl-6 text-left">
                                        <div className={`bg-[#1e2125] p-5 rounded-tr-3xl rounded-bl-3xl shadow-md max-w-lg mr-auto space-y-4 transition-shadow duration-300 ${isDesktop ? "lg:hover:shadow-[0_0_20px_#C778DD]" : "focus:shadow-[0_0_20px_#C778DD] active:shadow-[0_0_20px_#C778DD]"}`}
                                            tabIndex={0} style={{ transform: "none" }}>
                                            <h4 className="text-xl font-bold font-rajdhani">Secondary School Certificate (SSC)</h4>
                                            <p className="text-[#9F9F9F] font-rubik">B.C.S.I.R High School & Collage, Dhaka - 1205</p>
                                            <span className="text-sm font-rubik">2019 - 2020</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* For Future Addition */}
                            <div className="relative flex items-center justify-between w-full">

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Education;