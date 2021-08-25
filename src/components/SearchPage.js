import React from 'react';
import '../css/SearchPage.css';
import TuneOutLinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';

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
            
        </div>
    )
}

export default SearchPage
