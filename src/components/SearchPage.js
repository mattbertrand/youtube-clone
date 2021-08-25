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
                image="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
                channel="Matt Bertrand"
                verified
                subs="659K"
                noOfVideos={25}
                description="Software Engineer with React, Javascript, learning how to build amazing apps"
            />
        </div>
    )
}

export default SearchPage
