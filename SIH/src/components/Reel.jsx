import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Mousewheel } from "swiper/modules";
import "./Reel.css"

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import vid1 from '../assets/videos/vid1.mp4';
import vid2 from '../assets/videos/vid2.mp4';
import vid3 from '../assets/videos/vid3.mp4';
import vid4 from '../assets/videos/vid4.mp4';
import vid5 from '../assets/videos/vid5.mp4';
import vid6 from '../assets/videos/vid6.mp4';
import vid7 from '../assets/videos/vid7.mp4';

function Reel() {
    // Helper function: pause all videos, play only active
    const handleSlideChange = (swiper) => {
        document.querySelectorAll("video").forEach((v) => v.pause());
        const activeSlide = swiper.slides[swiper.activeIndex];
        const video = activeSlide.querySelector("video");
        if (video) video.play();
    };

    // Ensure first video plays on mount
    useEffect(() => {
        const firstVideo = document.querySelector(".mySwiper .swiper-slide-active video");
        if (firstVideo) firstVideo.play();
    }, []);

    return (
        <div className="cont w-[100vw] h-[100vh] flex justify-center items-center bg-[#f8fafc] overflow-hidden">
            <Swiper
                modules={[EffectCoverflow, Pagination, Mousewheel]}
                initialSlide={3}
                centeredSlides={true}
                loop={true}
                speed={900}
                grabCursor={true}
                allowTouchMove={false}
                effect="coverflow"
                coverflowEffect={{
                    rotate: -10,
                    stretch: -45,
                    depth: 90,
                    modifier: 1,
                    slideShadows: true,
                }}
                mousewheel={{
                    thresholdDelta: 50,
                    sensitivity: 1,
                }}
                breakpoints={{
                    0: { slidesPerView: 1, spaceBetween: 20 },
                    600: { slidesPerView: 3 },
                    1200: { slidesPerView: 5 },
                }}
                className="mySwiper"
                onSlideChange={handleSlideChange}
            >
                <SwiperSlide className='reel-slide'><video src={vid1} loop muted playsInline className='reel-video'/></SwiperSlide>
                <SwiperSlide className='reel-slide'><video src={vid2} loop muted playsInline className='reel-video'/></SwiperSlide>
                <SwiperSlide className='reel-slide'><video src={vid3} loop muted playsInline className='reel-video'/></SwiperSlide>
                <SwiperSlide className='reel-slide'><video src={vid4} loop muted playsInline className='reel-video'/></SwiperSlide>
                <SwiperSlide className='reel-slide'><video src={vid5} loop muted playsInline className='reel-video'/></SwiperSlide>
                <SwiperSlide className='reel-slide'><video src={vid6} loop muted playsInline className='reel-video'/></SwiperSlide>
                <SwiperSlide className='reel-slide'><video src={vid7} loop muted playsInline className='reel-video'/></SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Reel;
