import "./Hero.css"
import HeroImg from "../assets/Images/heroImage.png.png"

function Hero() {
    return (
        <div className="hero-sec h-screen bg-[#DDECF6] relative top-[10vh] flex">
            <div className="flex flex-col justify-center w-[50%] h-full p-20">
                <div className="">
                    <h1 className="font-bold">Healing starts here</h1>
                    {/* <h3 className="text-3xl mt-2">Lorem ipsum dolor sit amet.</h3> */}
                    <p className="mt-4">Soul Space is a safe, student-focused platform for mental health.
                        We connect you with instant AI support, caring professionals, and peer communities—all in one place.
                        No stigma, no judgment—just real help, whenever you need it.</p>
                </div>
                <div className="flex gap-4 mt-10">
                    <button className="btn counselling">Counselling</button>
                    <button className="btn hello">Give Test</button>
                </div>
            </div>
            <div className="w-[50%] h-full flex justify-center items-center">
                <img src={HeroImg} alt="Hero image" className=" hero-image" />
            </div>
        </div>
    )
}

export default Hero