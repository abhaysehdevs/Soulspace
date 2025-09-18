import aboutImage from "../assets/images/about_image.jpeg"
import about2 from "../assets/images/about2.jpg"

function About(){
    return(
        <div className="relative" id="About">
            <div className="bg-[#387EA2] h-[90vh] text-[#DDECF6]">
                <h1 className="text-center p-10 font-bold">ABOUT US</h1>
                <div className="flex justify-between h-[75%] px-40">
                    <p className="w-[50%] pr-20 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsum voluptatem quod quis quam corporis eos maiores quo rerum laudantium. Tempore corrupti molestias, autem officia accusamus iste quos enim ex. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque earum deserunt a iste, odit perspiciatis deleniti porro! Impedit ex quibusdam sequi enim illum in obcaecati expedita dicta porro provident facere officia corporis quasi maxime quas ipsa sit, rem laudantium aliquam saepe aut quia quae consequuntur. Impedit fugiat cum, qui, maiores mollitia, consequatur error tempora asperiores repellat fugit placeat nihil porro autem ut deserunt expedita dolore ullam reiciendis quidem suscipit at in earum voluptate! Enim ab perferendis cumque error totam. Consequatur id veniam vel laborum numquam. In possimus, cupiditate saepe ea inventore qui, perspiciatis, quam dignissimos modi laborum tenetur at quaerat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla necessitatibus corrupti, reprehenderit voluptatibus facilis repudiandae, explicabo error, atque cupiditate hic vel iusto laborum culpa magnam. Nemo porro placeat aspernatur maiores in quasi nesciunt, aliquid quae voluptates, nam accusantium excepturi veritatis recusandae quis. Odit corporis consequuntur aperiam neque maxime consectetur ducimus.</p>
                    <img src={aboutImage} alt="About Image" className="h-full "/>
                </div>
            </div>
            <div className="bg-[#DDECF6] h-[90vh] text-[#184E6C]">
                <h1 className="text-center p-10 font-bold">ABOUT US</h1>
                <div className="flex justify-between h-[75%] px-40">
                    <img src={about2} alt="About Image" className="h-full "/>
                    <p className="w-[50%] pl-20 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsum voluptatem quod quis quam corporis eos maiores quo rerum laudantium. Tempore corrupti molestias, autem officia accusamus iste quos enim ex. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque earum deserunt a iste, odit perspiciatis deleniti porro! Impedit ex quibusdam sequi enim illum in obcaecati expedita dicta porro provident facere officia corporis quasi maxime quas ipsa sit, rem laudantium aliquam saepe aut quia quae consequuntur. Impedit fugiat cum, qui, maiores mollitia, consequatur error tempora asperiores repellat fugit placeat nihil porro autem ut deserunt expedita dolore ullam reiciendis quidem suscipit at in earum voluptate! Enim ab perferendis cumque error totam. Consequatur id veniam vel laborum numquam. In possimus, cupiditate saepe ea inventore qui, perspiciatis, quam dignissimos modi laborum tenetur at quaerat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla necessitatibus corrupti, reprehenderit voluptatibus facilis repudiandae, explicabo error, atque cupiditate hic vel iusto laborum culpa magnam. Nemo porro placeat aspernatur maiores in quasi nesciunt, aliquid quae voluptates, nam accusantium excepturi veritatis recusandae quis. Odit corporis consequuntur aperiam neque maxime consectetur ducimus.</p>
                </div>
            </div>
        </div>
    )
}

export default About