import { FaGithub, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import Code from "../../../public/Images/Coding-Background.png";

const Left_Side_Design = () => {
    return (
        <section className="w-62.5 hidden md:block relative">
            {/* Sticky container for line + icons */}
            <div className="sticky top-0 flex flex-col items-center">

                <img src={Code} className="absolute lg:w-17.5 md:w-0 -left-3.25 -top-6.25" alt="Code Image 1" />
                <img src={Code} className="absolute lg:w-17.5 md:w-0 left-11.75 top-2.5" alt="Code Image 2" />

                <img src={Code} className="absolute lg:w-17.5 md:w-0 -left-3.25 top-12.5" alt="Code Image 3" />
                <img src={Code} className="absolute lg:w-17.5 md:w-0 left-11.75 top-22.5" alt="Code Image 4" />

                <img src={Code} className="absolute lg:w-17.5 md:w-0 -left-3.25 top-32.5" alt="Code Image 5" />
                <img src={Code} className="absolute lg:w-17.5 md:w-0 left-11.75 top-42.5" alt="Code Image 6" />

                <img src={Code} className="absolute lg:w-17.5 md:w-0 -left-3.25 top-52.5" alt="Code Image 7" />
                <img src={Code} className="absolute lg:w-17.5 md:w-0 left-11.75 top-62.5" alt="Code Image 8" />

                <img src={Code} className="absolute lg:w-17.5 md:w-0 -left-3.25 top-72.5" alt="Code Image 9" />
                <img src={Code} className="absolute lg:w-17.5 md:w-0 left-11.75 top-82.5" alt="Code Image 10" />

                <img src={Code} className="absolute lg:w-17.5 md:w-0 -left-3.25 top-72.5" alt="Code Image 10" />
                <img src={Code} className="absolute lg:w-17.5 md:w-0 left-11.75 top-102.5" alt="Code Image 12" />

                <img src={Code} className="absolute lg:w-17.5 md:w-0 -left-3.25 top-92.5" alt="Code Image 10" />
                <img src={Code} className="absolute lg:w-17.5 md:w-0 left-11.75 top-122.5" alt="Code Image 14" />

                <img src={Code} className="absolute lg:w-17.5 md:w-0 -left-3.25 top-112.5" alt="Code Image 10" />
                <img src={Code} className="absolute lg:w-17.5 md:w-0 left-11.75 top-142.5" alt="Code Image 16" />

                <img src={Code} className="absolute lg:w-17.5 md:w-0 -left-3.25 top-132.5" alt="Code Image 10" />

                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-93.75 border-l-2 border-[#ABB2BF] z-0" />

                {/* Social icons above the line */}
                <div className="grid justify-center gap-3 z-10 mt-27.5">
                    <a
                        href="https://www.facebook.com/alvi.al.mahamud/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="bg-[oklch(23.26%_0.014_253.1)] border-2 border-[#c52fee] group hover:bg-[#c52fee] p-3 rounded-full transition-colors duration-300 flex justify-center items-center">
                            <FaFacebookSquare className="lg:w-7.5 w-6.25 h-7.5 text-[#ABB2BF] group-hover:text-white" />
                        </div>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/alvi-al-mahamud-565a07398/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="bg-[oklch(23.26%_0.014_253.1)] border-2 border-[#c52fee] group hover:bg-[#c52fee] p-3 rounded-full transition-colors duration-300 flex justify-center items-center">
                            <FaLinkedin className="w-7.5 h-7.5 text-[#ABB2BF] group-hover:text-white" />
                        </div>
                    </a>
                    <a
                        href="https://github.com/KINGALVI"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="bg-[oklch(23.26%_0.014_253.1)] border-2 border-[#c52fee] group hover:bg-[#c52fee] p-3 rounded-full transition-colors duration-300 flex justify-center items-center">
                            <FaGithub className="w-7.5 h-7.5 text-[#ABB2BF] group-hover:text-white" />
                        </div>
                    </a>
                    <div className="w-1/2 relative flex justify-end items-start">
                        <div className="w-5 h-5 bg-[#b519e0] rounded-full border-4 border-white shadow-md absolute top-10 -right-2.5"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Left_Side_Design;