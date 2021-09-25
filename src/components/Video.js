import React, { useRef, useState } from 'react';
import './Video.css';
import VideoFooter from './VideoFooter';

function Video() {
    const videoRef = useRef(null);
    const [playing, setPlaying]=useState(false);
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
       src="https://v16m.tiktokcdn.com/48165613349f01dd179f1669b5f9f60a/614f2e67/video/tos/alisg/tos-alisg-pve-0037c001/00ebc8deea464db78e6fdd0224dc93dd/?a=1233&br=2818&bt=1409&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=9wD~qe694kag3&l=202109250810290101902182114345E772&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ampkeGU6ZnF0ODMzODczNEApPDczZ2gzNztkNzw8NWk2aGc2NWdlcjRvaTNgLS1kMS1zcy8tNDUtMi00YS02MS4uNGI6Yw%3D%3D&vl=&vr=">
       </video>
       <VideoFooter/>
       

        </div>
    )
}

export default Video
