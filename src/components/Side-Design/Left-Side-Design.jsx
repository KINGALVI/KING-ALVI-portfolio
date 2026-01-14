import { FaGithub, FaFacebookSquare, FaLinkedin } from "react-icons/fa";

const Left_Side_Design = () => {
    return (
        <div className="w-[250px] hidden md:block relative">
            {/* Sticky container for line + icons */}
            <div className="sticky top-0 flex flex-col items-center">
                {/* Vertical line behind icons */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] border-l-2 border-[#ABB2BF] z-0" />

                {/* Social icons above the line */}
                <div className="grid justify-center gap-3 z-10 mt-40">
                    <a
                        href="https://www.facebook.com/alvi.al.mahamud/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="bg-base-200 group hover:bg-[#c52fee] p-3 rounded-full transition-colors duration-300 flex justify-center items-center">
                            <FaFacebookSquare className="lg:w-[30px] w-[25px] h-[30px] text-[#ABB2BF] group-hover:text-white" />
                        </div>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/alvi-al-mahamud-565a07398/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="bg-base-200 group hover:bg-[#c52fee] p-3 rounded-full transition-colors duration-300 flex justify-center items-center">
                            <FaLinkedin className="w-[30px] h-[30px] text-[#ABB2BF] group-hover:text-white" />
                        </div>
                    </a>
                    <a
                        href="https://github.com/KINGALVI"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="bg-base-200 group hover:bg-[#c52fee] p-3 rounded-full transition-colors duration-300 flex justify-center items-center">
                            <FaGithub className="w-[30px] h-[30px] text-[#ABB2BF] group-hover:text-white" />
                        </div>
                    </a>
                    <div className="w-1/2 relative flex justify-end items-start">
                        <div className="w-5 h-5 bg-[#b519e0] rounded-full border-4 border-white shadow-md absolute top-10 -right-2.5"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Left_Side_Design;