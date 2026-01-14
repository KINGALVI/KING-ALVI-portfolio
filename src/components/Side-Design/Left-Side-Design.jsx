import { FaGithub, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import Code from "../../../public/Images/Coding-Background.png";

const Left_Side_Design = () => {
    return (
        <section className="w-[250px] hidden md:block relative">
            {/* <p className="text-[#ABB2BF] absolute text-[35px] font-semibold">{"</>"}</p> */}
            {/* Sticky container for line + icons */}
            <div className="sticky top-0 flex flex-col items-center">
                {/* Vertical line behind icons */}

                <img src={Code} className="absolute w-[77px] left-[-13px] top-[-25px]" alt="Code Image 1" />
                <img src={Code} className="absolute w-[77px] left-[47px] top-2.5" alt="Code Image 2" />

                <img src={Code} className="absolute w-[77px] left-[-13px] top-[50px]" alt="Code Image 3" />
                <img src={Code} className="absolute w-[77px] left-[47px] top-[90px]" alt="Code Image 4" />

                <img src={Code} className="absolute w-[77px] left-[-13px] top-[130px]" alt="Code Image 5" />
                <img src={Code} className="absolute w-[77px] left-[47px] top-[170px]" alt="Code Image 6" />

                <img src={Code} className="absolute w-[77px] left-[-13px] top-[210px]" alt="Code Image 7" />
                <img src={Code} className="absolute w-[77px] left-[47px] top-[250px]" alt="Code Image 8" />

                <img src={Code} className="absolute w-[77px] left-[-13px] top-[290px]" alt="Code Image 9" />
                <img src={Code} className="absolute w-[77px] left-[47px] top-[330px]" alt="Code Image 10" />

                <img src={Code} className="absolute w-[77px] left-[-13px] top-[290px]" alt="Code Image 10" />
                <img src={Code} className="absolute w-[77px] left-[47px] top-[410px]" alt="Code Image 12" />

                <img src={Code} className="absolute w-[77px] left-[-13px] top-[370px]" alt="Code Image 10" />
                <img src={Code} className="absolute w-[77px] left-[47px] top-[490px]" alt="Code Image 14" />

                <img src={Code} className="absolute w-[77px] left-[-13px] top-[450px]" alt="Code Image 10" />
                <img src={Code} className="absolute w-[77px] left-[47px] top-[570px]" alt="Code Image 16" />

                <img src={Code} className="absolute w-[77px] left-[-13px] top-[530px]" alt="Code Image 10" />

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
        </section>
    );
};

export default Left_Side_Design;