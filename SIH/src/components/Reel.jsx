import React,{useEffect} from 'react'
import vid1 from '../components/videos/vid1.mp4';
import vid2 from './videos/vid2.mp4';
import vid3 from './videos/vid3.mp4';

function Reel() {
    const callback = (entries) => {
        entries.forEach((entry)=>{
            let ele = entry.target.childNodes[0]
            console.log(ele)
            ele.play().then(()=>{
                if(!ele.paused && !entry.isIntersecting){
                    ele.pause()
                }
            })
        })
    }
    let observer = new IntersectionObserver(callback, {threshold:0.6});
    useEffect(()=>{
        const elements = document.querySelectorAll(".videos")
        elements.forEach((element)=>{
            observer.observe(element)
        })
    },[])
    return (
        <div className="video-container w-screen h-screen overflow-y-scroll snap-y snap-mandatory">
            <div className="videos h-screen flex items-center justify-center snap-start">
                <video src={vid1} muted="muted" className='h-[95vh] w-[30vw] object-cover rounded-2xl ' loop/>
            </div>
            <div className="videos h-screen flex items-center justify-center snap-start">
                <video src={vid2} muted="muted" className='h-[95vh] w-[30vw] object-cover rounded-2xl' loop/>
            </div>
            <div className="videos h-screen flex items-center justify-center snap-start">
                <video src={vid3} muted="muted" className='h-[95vh] w-[30vw] object-cover rounded-2xl' loop/>
            </div>
        </div>
    )
}

export default Reel