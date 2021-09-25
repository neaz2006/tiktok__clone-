import MusicNote from "@material-ui/icons/MusicNote";
import React from 'react';
import Ticker from "react-ticker";
import './VideoFooter.css';
function VideoFooter() {
    return (
        <div className="VideoFooter">
            <div className="videoFooter__text">
                <h3>@neazzzzzzzzzzzzzzzzz</h3>
                <p>this is disciption</p>
                <div className="videoFooter__ticker">
                    <MusicNote className="videoFooter__icon" />
                    <Ticker mode="smooth">
                       {({index})=>(
                           <>
                            <p>i am a song</p>
                           </>
                       )}
                    </Ticker>                      
                </div>
            </div>   
            <img 
            className="videoFooter__record" 
            src="https://static.thenounproject.com/png/934821-200.png"
            />         
        </div>
    )
}

export default VideoFooter
