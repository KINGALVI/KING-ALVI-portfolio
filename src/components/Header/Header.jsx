import { Link, NavLink } from "react-router-dom";
import Logo from "../../../public/Images/My-Portfolio-Logo.png";
import { FaGithub, FaFacebookSquare, FaLinkedin } from "react-icons/fa";

export default function Header() {
    return (
        <nav className="navbar bg-base-200 p-0 pe-6 rounded sticky top-0 z-50">

            <div className="flex-1">
                <div className="flex items-center">
                    <Link to={"/"} className="font-bold text-2xl flex items-center">
                        <img src={Logo} alt="Logo" className="w-[100px] h-[100px]" />
                        Alvi.Dev.Ops
                    </Link>
                </div>
            </div>

            {/* big screen */}
            <ul className="menu menu-horizontal md:flex hidden md:p-0">
                <li><NavLink to="/"><span className="text-[#C778DD]">#</span>Home</NavLink></li>
                <li><NavLink to="/AllProjects"><span className="text-[#C778DD]">#</span>Projects</NavLink></li>
                <li><NavLink to="/About"><span className="text-[#C778DD]">#</span>About-Me</NavLink></li>
                <li><NavLink to="/Contacts"><span className="text-[#C778DD]">#</span>Contacts</NavLink></li>
            </ul>

            {/* medium & small screen */}
            <div className="dropdown dropdown-end md:hidden md:p-0">
                <label tabIndex={0} className="btn btn-ghost btn-square">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52">
                    <li><NavLink to="/"><span className="text-[#C778DD]">#</span>Home</NavLink></li>
                    <li><NavLink to="/AllProjects"><span className="text-[#C778DD]">#</span>Projects</NavLink></li>
                    <li><NavLink to="/About"><span className="text-[#C778DD]">#</span>About-Me</NavLink></li>
                    <li><NavLink to="/Contacts"><span className="text-[#C778DD]">#</span>Contacts</NavLink></li>
                    <br />
                    <div className=" md:hidden flex justify-center gap-2.5">
                        <a target="_blank" href="https://github.com/KINGALVI"><FaGithub className="w-[30px] h-[30px] text-[#ABB2BF] Logo" /></a>
                        <a target="_blank" href="https://www.linkedin.com/in/alvi-al-mahamud-565a07398/"><FaLinkedin className="w-[30px] h-[30px] text-[#ABB2BF] Logo" /></a>
                        <a target="_blank" href="https://www.facebook.com/alvi.al.mahamud/"><FaFacebookSquare className="w-[30px] h-[30px] text-[#ABB2BF] Logo" /></a>
                    </div>
                    <br />
                </ul>
            </div>
        </nav>
    );
}