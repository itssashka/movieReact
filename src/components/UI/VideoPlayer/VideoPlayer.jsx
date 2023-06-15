import React from "react";
import st from './VideoPlayer.module.css'

const VideoPlayer = ({ trailers }) => {
    return (
        <div className={st.wrapper}>
            {trailers && (
                <iframe 
                    className={st.player}
                    src={"https://www.youtube.com/embed/"}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            )}
        </div>
    );
};

export default VideoPlayer;
