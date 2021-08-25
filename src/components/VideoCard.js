import React from 'react';
import '../css/VideoCard.css';
import { Avatar } from '@material-ui/core';

function VideoCard({ image, title, channel, views, timestamp, channelImage  }) {
    return (
        <div className="videoCard">
            <img className="videoCard_thumbnail" src={image} alt="image"/>
            <div className="videoCard__info">
                <Avatar className="videoCard__avatar" alt={channel} src={channelImage} />
                <div className="videoCard__text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views} - {timestamp}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard
