import React from 'react';
import '../css/RecommendedVideos.css';
import VideoCard from './VideoCard';

function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <div className="recommendedVideos__videos">
                <VideoCard 
                title="Test Video 1"
                views="1.3M Views"
                timestamp="3 days ago"
                channelImage="https://scontent.fcdg4-1.fna.fbcdn.net/v/t1.6435-9/38144352_10156663207947360_8248451771043676160_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=em4H9GrpVGAAX-lzD8T&_nc_ht=scontent.fcdg4-1.fna&oh=7c41770f2ecf59eebc82a10832bea239&oe=6149EE4B"
                channel="Matt Bertrand"
                image="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
                />
                <VideoCard 
                title="Test Video 2"
                views="100,098 Views"
                timestamp="1 days ago"
                channelImage="https://scontent.fcdg4-1.fna.fbcdn.net/v/t1.6435-9/38144352_10156663207947360_8248451771043676160_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=em4H9GrpVGAAX-lzD8T&_nc_ht=scontent.fcdg4-1.fna&oh=7c41770f2ecf59eebc82a10832bea239&oe=6149EE4B"
                channel="Matt Bertrand"
                image="https://st.depositphotos.com/1428083/2946/i/600/depositphotos_29460297-stock-photo-bird-cage.jpg"/>
                <VideoCard 
                title="Test Video 3"
                views="10M Views"
                timestamp="5 days ago"
                channelImage="https://scontent.fcdg4-1.fna.fbcdn.net/v/t1.6435-9/38144352_10156663207947360_8248451771043676160_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=em4H9GrpVGAAX-lzD8T&_nc_ht=scontent.fcdg4-1.fna&oh=7c41770f2ecf59eebc82a10832bea239&oe=6149EE4B"
                channel="Matt Bertrand"
                image="http://cybersavoir.csdm.qc.ca/bibliotheques/files/2018/11/10_banques_dimages_gratuites_libres_de_droits-300x169.jpg"/>
            </div>
        </div>
    )
}

export default RecommendedVideos
