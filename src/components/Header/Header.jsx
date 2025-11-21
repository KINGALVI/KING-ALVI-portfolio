import { Link, NavLink } from "react-router-dom";
import Logo from "../../../public/Images/Style=Default.svg";

const Header = () => {

    return (
        <>
            <div className="navbar shadow-sm flex justify-between bg-[#282C33]">
                <div className="flex items-center">
                    <img src={Logo} alt="" />
                    <Link className="btn btn-ghost text-xl">KING ALVI</Link>
                </div>
                <div>
                    <ul className="flex gap-[32px]">
                        <li><NavLink to={"/"} className="text-[#ABB2BF]"><span className="text-[#C778DD]">#</span>Home</NavLink></li>
                        <li><NavLink to={"/Works"} className="text-[#ABB2BF]"><span className="text-[#C778DD]">#</span>Works</NavLink></li>
                        <li><NavLink to={"/About"} className="text-[#ABB2BF]"><span className="text-[#C778DD]">#</span>About-Me</NavLink></li>
                        <li><NavLink to={"/Contacts"} className="text-[#ABB2BF]"><span className="text-[#C778DD]">#</span>Contacts</NavLink></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Header;