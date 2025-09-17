import "./Footer.css"

function Footer() {
    return (
        <div className="bg-[#184E6C] text-[#DDECF6]  w-[99vw] relative">
            <div className="flex justify-between px-[500px] pt-4">
                <a href="" className="mfoot">About</a>
                <a href="" className="mfoot">Resource Hub</a>
                <a href="" className="mfoot">Community</a>
                <a href="" className="mfoot">Counselling</a>
            </div>
            <div className="py-14 px-10 list-none grid grid-cols-3" id="footer">
                <div className="flex flex-col justify-center border-r-2 border-[#ddecf637] items-center">
                    <div>
                        <h2 className="text-2xl font-semibold mb-[4px]">Contact Us</h2>
                        <li>
                            <i className="fa-solid fa-envelope foot-i"></i>
                            <span>abc123@gmail.com</span>
                        </li>
                        <li>
                            <i className="fa-solid fa-phone foot-i"></i>
                            <span>+91 92222 26666</span>
                        </li>
                    </div>
                </div>
                <div className="px-10 flex flex-col justify-center border-r-2 border-[#ddecf637] items-center">
                    <div>
                        <h2 className="text-2xl font-semibold mb-[4px]">Subscribe Us</h2>
                        <li>
                            <i class="fa-brands fa-facebook foot-i"></i>
                            <span>soulspace f</span>
                        </li>
                        <li>
                            <i class="fa-brands fa-instagram foot-i"></i>
                            <span>soulspace i</span>
                        </li>
                    </div>
                </div>
                <div className="px-10 flex flex-col justify-center items-center">
                    <div>
                        <h2 className="text-xl mb-[4px]">Newsletter</h2>
                    </div>
                </div>
            </div>
            <div>
                <p className="text-center pb-4 text-[#9BCBE5]">&copy; Copyrights 2008-25. All Rights Reserved. | Privacy | Terms | Infringement</p>
            </div>
        </div>
    )
}

export default Footer