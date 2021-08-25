import React from 'react';
import '../css/SearchPage.css';
import TuneOutLinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutLinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />

            <ChannelRow
                image="https://scontent.fcdg4-1.fna.fbcdn.net/v/t1.6435-9/38144352_10156663207947360_8248451771043676160_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=em4H9GrpVGAAX-lzD8T&_nc_ht=scontent.fcdg4-1.fna&oh=7c41770f2ecf59eebc82a10832bea239&oe=6149EE4B"
                channel="Matt Bertrand"
                verified
                subs="659K"
                noOfVideos={25}
                description="Software Engineer with React, Javascript, learning how to build amazing apps"
            />
            <hr />

            <VideoRow 
            views="1.4M"
            subs="629K"
            description="Do you want a great developper in your company?"
            timestamp="1 week ago"
            channel="Matt Bertrand"
            title="Let's build a Facebook Clone!"
            image="https://upload.wikimedia.org/wikipedia/commons/1/13/YOUTUBE_LOGO.png"
            />
            <VideoRow 
            views="600,525"
            subs="629K"
            description="Do you want a great developper in your company?"
            timestamp="10 minutes ago"
            channel="Matt Bertrand"
            title="Let's build a Tinder Clone!"
            image="https://upload.wikimedia.org/wikipedia/commons/5/5f/Tinder.png"
            />
            <VideoRow 
            views="747,135"
            subs="629K"
            description="Do you want a great developper in your company?"
            timestamp="2 days ago"
            channel="Matt Bertrand"
            title="Let's build a Youtube Clone!"
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Facebook_New_Logo_%282015%29.svg/640px-Facebook_New_Logo_%282015%29.svg.png"
            />
        </div>
    )
}

export default SearchPage
