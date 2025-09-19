import "./Nav.css"
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';


function Nav() {
    return (
        <div className="h-[10vh] bg-[#184E6C] w-[100vw] top-0 left-0 fixed flex items-center z-10 shadow-[0_6px_6px_rgba(0,0,0,0.3)]">
            <div className="container mx-auto flex items-center justify-between px-3 py-4">
                {/* LOGO */}
                <span className=" text-3xl font-bold text-[#DDECF6]">SoulSpace</span>

                {/* MENU */}
                <ul className="flex space-x-8 font-medium">
                    <li><HashLink smooth to="/#about" className="menu">About</HashLink></li>
                    <li><Link to="/Reel" className="menu">Resource Hub</Link></li>
                    <li><Link to="/community" className="menu">Community</Link></li>
                    <li><a href="#" className="menu">Counselling</a></li>
                    <li><HashLink smooth to="/#footer" className="menu">Contact Us</HashLink></li>
                </ul>

                {/* Log In Buttons */}
                <div className="flex gap-2">
                    <button className="sign_btn">Sign Up</button>
                    <button className="sign_btn">Log In</button>
                </div>
            </div>
        </div>
    )
}

export default Nav