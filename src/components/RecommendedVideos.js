import React from 'react';
import '../css/RecommendedVideos.css';

function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <div className="recommendedVideos__videos">
                <VideoCard />
            </div>
        </div>
    )
}

export default RecommendedVideos
