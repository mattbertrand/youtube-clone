import React from 'react';
import '../css/ChannelRow.css';
import { Avatar } from '@material-ui/core';
import VerifiedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';

function ChannelRow({ image, channel, verified, subs, noOfVideos, description }) {
    return (
        <div className="channelRow">
            <Avatar
            className="channelRow__logo" 
            src={image}
            alt={channel}
            />
            <div className="channelRow__text">
                <h4>{channel} {verified && <VerifiedIcon/>}</h4>
                <p>{subs} subscribers - {noOfVideos} videos</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ChannelRow
