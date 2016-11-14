import React from 'react';

const VideoInfo = ({video}) => {
    if (!video){
        return (
            <div className="progress">
                <div className="indeterminate"></div>
            </div>
        )
    }
    
    const videoId = video.videoUrl;
    const url = `https://www.youtube.com/embed/${videoId}`;
    
    return (
        <div>
            <div className="embed-responsive embed-responsive-16by9">
                <iframe src={url} className="embed-responsive"></iframe>
            </div>
            <div className="details">
                <div>{video.title}</div>
                <div>{video.description}</div>
            </div>
        </div>
    )
};

export default VideoInfo;