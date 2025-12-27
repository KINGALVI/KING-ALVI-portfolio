import Line from "../../../public/Images/Line.png";
import { FaGithub, FaFacebookSquare, FaLinkedin } from "react-icons/fa";

const Left_Side_Design = () => {
    return (
        <center className="w-[250px] hidden md:block">
            <img src={Line} alt="Line" />
            <div className="grid">
                <span className="pb-2">
                    <a target="_blank" href="https://github.com/KINGALVI">
                        <FaGithub className="w-[30px] h-[30px] text-[#ABB2BF] Logo" />
                    </a>
                </span>
                <span className="pb-2">
                    <a target="_blank" href="https://www.linkedin.com/in/alvi-al-mahamud-565a07398/">
                        <FaLinkedin className="w-[30px] h-[30px] text-[#ABB2BF] Logo" />
                    </a>
                </span>
                <span>
                    <a target="_blank" href="https://www.facebook.com/alvi.al.mahamud/">
                        <FaFacebookSquare className="w-[30px] h-[30px] text-[#ABB2BF] Logo" />
                    </a>
                </span>
            </div>
        </center>
    );
};

export default Left_Side_Design;