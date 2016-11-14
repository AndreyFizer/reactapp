import React from 'react';
import VideoItem from 'components/videoItem';

const VideoList = ({videos, onSelectVideo}) => {
    const videoItems = videos.map((video) => {
        return (
            <VideoItem
                key={video._id}
                video={video}
                onSelectVideo={onSelectVideo}
            />
        )
    });
    
    return (
        <ul className="collection">
            {videoItems}
        </ul>
    )
};

export default VideoList;