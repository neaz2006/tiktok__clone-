import React, { useRef, useState } from 'react';
import './Video.css';
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video() {    
    const [playing, setPlaying]=useState(false);
    const videoRef = useRef(null);
    const handleVideoPlay=()=>{
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        }else{
            videoRef.current.play();
            setPlaying(true);
        }

    }
    return (
        <div className="video">
            <video 
                className="video__player"
                loop
                ref={videoRef}
                onClick={handleVideoPlay}
                src="https://v77.tiktokcdn.com/9c35d34f88b6bd7091099d81ca43d5ed/614fdff5/video/tos/alisg/tos-alisg-pve-0037c001/855cc62583b5483293ed8f57692c3947/?a=1233&br=2634&bt=1317&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=9wD~qe694kag3&l=202109252050160102450190695CE5EBA1&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2c2aGk6Zml3NzMzODczNEApZWZoaGg8NDw1NzRnZjY3OGdoL2wtcjRvZW9gLS1kMS1zc19gYGEyNjYvMTBgLmJgMDA6Yw%3D%3D&vl=&vr=">
            </video>       
            <VideoSidebar like={111} shares={333} messages={222}/>
            <VideoFooter channel={11} disciption={234} song={1234} />

        </div>
    )
}

export default Video
