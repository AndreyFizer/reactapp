import React from 'react';

const VideoItem = ({video, onSelectVideo}) => {
    const videoUrl = video.imgUrl;
    const videoTitle = video.title;
    
    return (
        <li className="collection-item avatar"
            onClick={() => {
                onSelectVideo(video)
            }}>
            <img src={videoUrl} alt="Video" className="circle"/>
            <span className="title">{videoTitle}</span>
        </li>
    )
};

export default VideoItem;