import { NavLink } from "react-router-dom";
import { FaGithub, FaFacebookSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {

    return (
        <>
            <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded">
                <nav className="grid grid-flow-col gap-4 mt-10">
                    <NavLink to={"/"} className="text-[#ABB2BF]"><span className="text-[#C778DD]">#</span>Home</NavLink>
                    <NavLink to={"/Projects"} className="text-[#ABB2BF]"><span className="text-[#C778DD]">#</span>Projects</NavLink>
                    <NavLink to={"/About"} className="text-[#ABB2BF]"><span className="text-[#C778DD]">#</span>About-Me</NavLink>
                    <NavLink to={"/Contacts"} className="text-[#ABB2BF]"><span className="text-[#C778DD]">#</span>Contacts</NavLink>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <a target="_blank" href="https://github.com/KINGALVI"><FaGithub className="w-[30px] h-[30px] text-[#ABB2BF] Logo" /></a>
                        <a target="_blank" href="https://www.linkedin.com/in/alvi-al-mahamud-565a07398/"><FaLinkedin className="w-[30px] h-[30px] text-[#ABB2BF] Logo" /></a>
                        <a target="_blank" href="https://www.facebook.com/alvi.al.mahamud/"><FaFacebookSquare className="w-[30px] h-[30px] text-[#ABB2BF] Logo" /></a>
                    </div>
                </nav>
                <aside className="mb-10">
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by <b>Alvi.Dev.Ops</b></p>
                </aside>
            </footer>
        </>
    );
};

export default Footer;