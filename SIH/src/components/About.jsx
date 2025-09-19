import aboutImage from "../assets/images/about_image.jpg"
function About() {
    return (
        <div className="relative" id="about">
            <div className="bg-[#387EA2] h-[90vh] text-[#DDECF6]">
                <h1 className="text-center p-10 font-bold">ABOUT US</h1>
                <div className="flex justify-between h-[75%] px-40">
                    <div className="w-[50%] pr-20"><p>At SoulSpace, we believe no one should suffer in silence. We provide a safe, supportive space where healing begins with connection. <br /><br />Our offerings include community support, mental health activities, a resource hub, and one-on-one counselling sessions with trained professionals. <br /><br /> For round-the-clock care, our AI chatbot is available 24/7 to listen and guide you whenever you need it. <br /> SoulSpace is where silent struggles turn into shared healing, and isolation transforms into belonging. <br /><br />Together, we’re building a future where support is always within reach.</p></div>
                    <img src={aboutImage} alt="About Image" className="h-full " />
                </div>
            </div>
        </div>
    )
}

export default About