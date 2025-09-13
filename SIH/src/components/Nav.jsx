import "./Nav.css"
import { Link } from "react-router-dom";

function Nav() {
    return (
        <div className="h-[10vh] bg-[#081C15] w-[100vw] top-0 left-0 fixed flex items-center">
            <div className="container mx-auto flex items-center justify-between px-3 py-4">
                {/* LOGO */}
                <span className=" text-3xl font-bold text-[#95D5B2]">MyLogo</span>

                {/* MENU */}
                <ul className="flex space-x-8 font-medium">
                    <li><a href="#" className="menu">About</a></li>
                    <li><Link to="/Reel" className="menu">Resource Hub</Link></li>
                    <li><a href="#" className="menu">Community</a></li>
                    <li><a href="#" className="menu">Counselling</a></li>
                    <li><a href="#" className="menu">Contact</a></li>
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