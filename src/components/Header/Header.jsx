import { Link, NavLink } from "react-router-dom";
import Logo from "../../../public/Images/My-Portfolio-Logo.png";
import { FaGithub, FaFacebookSquare, FaLinkedin } from "react-icons/fa";

export default function Header() {
    return (
        <nav className="navbar bg-base-200 p-0 pe-6 rounded sticky top-0 z-50 transition duration-500 ease-in-out shadow-md hover:shadow-lg flex justify-between">

            <div>
                <div className="flex items-center group">
                    <Link
                        to={"/"}
                        className="font-bold lg:text-2xl text-[20px] flex items-center transition-transform duration-500 group-hover:scale-105 group-active:scale-105 animate-fadeSlide logo-hover"
                    >
                        {/* Logo with spin on hover */}
                        <img
                            src={Logo}
                            alt="Logo"
                            className="w-[100px] h-[100px] transform transition-transform duration-700  group-hover:scale-110 group-active:rotate-12 group-active:scale-110"
                        />
                        {/* Brand name with subtle fade-slide animation */}
                        <h1 className=" text-white font-rajdhani animate-fadeSlide">
                            Alvi.Dev.Ops
                        </h1>
                    </Link>
                </div>
            </div>

            {/* big screen & medium */}
            <ul className="menu menu-horizontal md:flex hidden md:p-0 animate-fadeSlide nav-links">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `nav-link ${isActive ? "nav-active" : ""}`
                        }
                    >
                        <span className="text-[#C778DD]">#</span>Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/AllProjects"
                        className={({ isActive }) =>
                            `nav-link ${isActive ? "nav-active" : ""}`
                        }
                    >
                        <span className="text-[#C778DD]">#</span>Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/About"
                        className={({ isActive }) =>
                            `nav-link ${isActive ? "nav-active" : ""}`
                        }
                    >
                        <span className="text-[#C778DD]">#</span>About-Me
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/Contacts"
                        className={({ isActive }) =>
                            `nav-link ${isActive ? "nav-active" : ""}`
                        }
                    >
                        <span className="text-[#C778DD]">#</span>Contacts
                    </NavLink>
                </li>
            </ul>

            {/* small screen */}
            <div className="dropdown dropdown-end md:hidden md:p-0">
                <label tabIndex={0} className="btn btn-ghost btn-square transition-transform duration-500 hover:rotate-90">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52 animate-fadeSlide animate-fadeSlide2 nav-links">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => `nav-link ${isActive ? "nav-active" : ""}`}
                        >
                            <span className="text-[#C778DD]">#</span>Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/AllProjects"
                            className={({ isActive }) => `nav-link ${isActive ? "nav-active" : ""}`}
                        >
                            <span className="text-[#C778DD]">#</span>Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/About"
                            className={({ isActive }) => `nav-link ${isActive ? "nav-active" : ""}`}
                        >
                            <span className="text-[#C778DD]">#</span>About-Me
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/Contacts"
                            className={({ isActive }) => `nav-link ${isActive ? "nav-active" : ""}`}
                        >
                            <span className="text-[#C778DD]">#</span>Contacts
                        </NavLink>
                    </li>
                    <br />
                    <div className="md:hidden flex justify-center gap-2.5">
                        <a target="_blank" href="https://github.com/KINGALVI">
                            <FaGithub className="w-[30px] h-[30px] text-[#ABB2BF] transition-transform duration-500 hover:scale-125 hover:animate-bounce" />
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/alvi-al-mahamud-565a07398/">
                            <FaLinkedin className="w-[30px] h-[30px] text-[#ABB2BF] transition-transform duration-500 hover:scale-125 hover:animate-pulse" />
                        </a>
                        <a target="_blank" href="https://www.facebook.com/alvi.al.mahamud/">
                            <FaFacebookSquare className="w-[30px] h-[30px] text-[#ABB2BF] transition-transform duration-500 hover:scale-125 hover:animate-spin" />
                        </a>
                    </div>
                    <br />
                </ul>
            </div>
        </nav>
    );
}