import "./Hero.css"
import HeroImg from "../assets/Hero.png"

function Hero() {
    return (
        <div className="h-screen bg-[#DDECF6] relative top-[10vh] flex">
            <div className="flex flex-col justify-center w-[50%] h-full p-20">
                <div className="">
                    <h1 className="font-bold">Lorem, ipsum dolor.</h1>
                    <h3 className="text-3xl mt-2">Lorem ipsum dolor sit amet.</h3>
                    <p className="text-xl mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus assumenda fugiat quasi!</p>
                </div>
                <div className="flex gap-4 mt-10">
                    <button className="btn counselling">Counselling</button>
                    <button className="btn hello">Hello</button>
                </div>
            </div>
            <div className="w-[50%] h-full flex justify-center items-center">
                <img src={HeroImg} alt="Hero image" className="h-full"/>
            </div>
        </div>
    )
}

export default Hero