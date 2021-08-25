import React, { useState } from 'react';
import '../css/Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Header() {
    const [inputSearch, setInputSearch] = useState('');

    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon />
                <Link to="/">
                    <img 
                    className="header__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/1/13/YOUTUBE_LOGO.png" 
                    alt="youtube-logo"/>
                </Link>
            </div>
            <div className="header__input">
                <input 
                onChange={e => setInputSearch(e.target.value)}
                value={inputSearch} 
                placeholder="Search" 
                type="text"
                />
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="header__inputButton"/>
                </Link>
            </div>
            <div className="header__icons">
                <VideoCallIcon classname="header__icon"/>
                <AppsIcon classname="header__icon"/>
                <NotificationsIcon classname="header__icon"/>
                <Avatar
                    alt="Matthieu Bertrand"
                    src="https://scontent.fcdg4-1.fna.fbcdn.net/v/t1.6435-9/38144352_10156663207947360_8248451771043676160_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=em4H9GrpVGAAX-lzD8T&_nc_ht=scontent.fcdg4-1.fna&oh=7c41770f2ecf59eebc82a10832bea239&oe=6149EE4B"
                />
            </div>
        </div>
    )
}

export default Header
