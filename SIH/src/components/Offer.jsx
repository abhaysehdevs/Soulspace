import React from "react";
import "./Offer.css";
import rob from "../assets/images/off_bot.jpg"
import peer from "../assets/images/off_connect.svg"
import online from "../assets/images/off_vid.jpg"

export default function Slider({ width, height, quantity, reverse }) {
    return (
        <>
        <div className="text-center text-[3.2em] font-bold p-10">What We Offer</div>
            <div
                className="slider overflow-x-hidden"
                style={{
                    "--width": `${width}px`,
                    "--height": `${height}px`,
                    "--quantity": quantity,
                }}
                reverse={reverse ? "true" : "false"}
            >
                <div className="list">
                    <div className="item" style={{ "--position": 1 }}>
                        <img src={rob} alt="" className="h-20 m-auto"/>
                        <h2 className="">Chatbot Services</h2>
                        <p>Our AI chatbot is available 24/7 to offer instant mental health support. Get stress-relief tips, anxiety guidance, or a safe space to share your thoughts. It can also connect you with resources and professionals—right from your phone or computer.</p>
                    </div>
                    <div className="item" style={{ "--position": 2 }}>
                        <img src={peer} alt="" className="h-20 m-auto"/>
                        <h2 className="">Peer to Peer</h2>
                        <p>Healing doesn’t have to be lonely. Our moderated peer-to-peer community is a safe, supportive space to share experiences, get encouragement, and connect with others who understand your challenges—without judgment.</p>
                    </div>
                    <div className="item" style={{ "--position": 3 }}>
                        <img src={online} alt="" className="h-20 m-auto"/>
                        <h2 className="">Online Sessions</h2>
                        <p>Sometimes self-help isn’t enough. Our online sessions connect you with licensed mental health professionals via secure video calls. Flexible, private, and affordable, these sessions provide personalized support for stress, anxiety, depression, or simply having someone to listen.</p>
                    </div>
                </div>
            </div>
            <div className="p-10"></div>
        </>
    );
}
