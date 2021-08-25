import React from 'react';
import '../css/Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon />
                    <img 
                    className="header__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/1/13/YOUTUBE_LOGO.png" 
                    alt="youtube-logo"/>
            </div>
            <div className="header__input">
                <input placeholder="Search" type="text"></input>
                <SearchIcon className="header__inputButton"/>
            </div>
            <div className="header__icons">
                <VideoCallIcon />
                <AppsIcon />
                <NotificationsIcon />
                <Avatar
                    alt="Matthieu Bertrand"
                    src="https://scontent.fcdg4-1.fna.fbcdn.net/v/t1.6435-9/38144352_10156663207947360_8248451771043676160_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=em4H9GrpVGAAX-lzD8T&_nc_ht=scontent.fcdg4-1.fna&oh=7c41770f2ecf59eebc82a10832bea239&oe=6149EE4B"
                />
            </div>
        </div>
    )
}

export default Header
