import { NavLink } from "react-router-dom";
import { FaGithub, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import MyLogo from "../../../public/Images/My-Portfolio-Logo.png";

const Footer = () => {

    return ( 
        <>
            <footer className="footer footer-horizontal footer-center bg-[oklch(23.26%_0.014_253.1)] text-base-content rounded pt-12  font-rajdhani shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-11/12 mx-auto">
                    <div className="lg:col-span-4">
                        <div className="flex items-center ps-[50px] relative top-[-3px]">
                            <img className="w-20 h-20 p-0 m-0" alt="Logo" src={MyLogo} />
                            <span className="text-2xl font-bold text-white font-rajdhani leading-none">
                                Alvi.Dev.Ops
                            </span>
                        </div>
                        <p className="text-sm text-gray-300 leading-tight mt-0 relative top-[-17px] w-[350px]">
                            Hello, I'm Alvi Al Mahmud, a web developer that focuses on creating elegant, responsive, and user-friendly websites. "Excited about executing your ideas!"
                        </p>
                    </div>
                    <div className="lg:col-span-8 space-y-8">
                        <div className="flex flex-col md:flex-row gap-8 lg:gap-[100px]">
                            <div className="flex-1 space-y-1 text-gray-300">
                                <h3 className="text-[#C778DD] text-xl font-medium mb-2">Say hello</h3>
                                <p className="tracking-wider">alvialmahamud@gmail.com</p>
                                <h3 className="pt-4 text-[#C778DD] text-xl font-medium mb-2">Call Me</h3>
                                <p className="tracking-wider">+8801893080578</p>
                                <p className="tracking-wider">+8801816994748</p>
                            </div>
                            <div className="flex-1 space-y-1 text-gray-300">
                                <h3 className="text-[#C778DD] text-xl font-medium mb-3">Quick Links</h3>
                                <ul className="space-y-2 font-rajdhani">
                                    <li><NavLink to={"/"} className="text-[#ABB2BF]"><span className="text-[#C778DD]"># </span>Home</NavLink></li>
                                    <li><NavLink to={"/AllProjects"} className="text-[#ABB2BF]"><span className="text-[#C778DD]"># </span>Projects</NavLink></li>
                                    <li><NavLink to={"/About"} className="text-[#ABB2BF]"><span className="text-[#C778DD]"># </span>About-Me</NavLink></li>
                                    <li><NavLink to={"/Contacts"} className="text-[#ABB2BF]"><span className="text-[#C778DD]"># </span>Contacts</NavLink></li>
                                </ul>
                            </div>
                            <div className="flex-1 text-sm space-y-1 text-gray-300">
                                <h3 className="text-[#C778DD] text-xl font-medium mb-3">Social</h3>
                                <div className="grid grid-flow-col gap-4 justify-center">
                                    <a target="_blank" href="https://github.com/KINGALVI"><FaGithub className="w-[30px] h-[30px] text-[#ABB2BF] Logo" /></a>
                                    <a target="_blank" href="https://www.linkedin.com/in/alvi-al-mahamud-565a07398/"><FaLinkedin className="w-[30px] h-[30px] text-[#ABB2BF] Logo" /></a>
                                    <a target="_blank" href="https://www.facebook.com/alvi.al.mahamud/"><FaFacebookSquare className="w-[30px] h-[30px] text-[#ABB2BF] Logo" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center text-sm text-gray-400 py-3">
                    <aside className="mb-10">
                        <p>Copyright © {new Date().getFullYear()} - All right reserved by <b>Alvi.Dev.Ops</b></p>
                    </aside>
                </div>
            </footer>
        </>
    );
};

export default Footer;