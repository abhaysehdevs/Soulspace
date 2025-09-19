import "./Footer.css"
import { Link } from "react-router-dom";


function Footer() {
    return (
        <div className="bg-[#184E6C] text-[#DDECF6]  w-[99vw] relative px-32">

            <div className="list-none grid grid-cols-4 pt-14 fmenu" id="footer">
                <div>
                    <h2 className="font-extrabold text-3xl">SoulSpace</h2>
                    <p className="text-[9px] pt-4 w-56">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, quod.</p>
                </div>
                <div>
                    <h2 className="font-medium">Navigation</h2>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Resource Hub</a></li>
                    <li><a href="#">Community</a></li>
                    <li><a href="#">Counselling</a></li>
                </div>
                <div>
                    <h2 className="font-medium">Quick Link</h2>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Resource Hub</a></li>
                    <li><a href="#">Community</a></li>
                    <li><a href="#">Counselling</a></li>
                </div>
                <div>
                    <h2 className="font-medium">Services</h2>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Resource Hub</a></li>
                    <li><a href="#">Community</a></li>
                    <li><a href="#">Counselling</a></li>
                </div>
            </div>
            <div className="grid grid-cols-4 list-none py-10 contact relative">
                <li>
                    <i class="fa-solid fa-location-dot"></i>
                    <span>London UK</span>
                </li>
                <li>
                    <i class="fa-solid fa-phone"></i>
                    <span>+91 98888 25555</span>
                </li>
                <li>
                    <i class="fa-solid fa-envelope"></i>
                    <span>soulspace@gmailcom</span>
                </li>
                <li className="text-lg">
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-square-twitter"></i>
                    <i class="fa-brands fa-square-youtube"></i>
                </li>
            </div>
            <div className="border-[1px] border-[#daeefb6a] rounded"></div>
            <div className="text-center text-[#ddecf69a] text-[14px] py-5">&copy; 2025 SoulSpace. All rights reserved.</div>

        </div>
    )
}

export default Footer