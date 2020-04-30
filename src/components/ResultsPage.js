import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function ResultsPage({match}) {
    
    useEffect(() => {
        fetchItem();
    });

    const [item, setItem] = useState({});
    const fetchItem = (() => {
        const data = require('../information.json');
        const item = data[match.params.id - 1];
        console.log(item);
        setItem(item);
    });

    return(
        <div className="ResultPage">
            <div className="VideoContainer">
                <video controls>
                    <source src={`/videos/${item.media}.mp4`} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="VideoInfoContainer">
                <h1 id="ResultVideoTitle">{item.title}</h1>
                <p id="ResultVideoViews">{item.views} views • {item.uploadDate}</p>
                <hr/>
                <img src={`/images/channels/${item.channelThumb}.jpg`} alt="Channel Logo" id="Channel-logo-result-page"/>
                <p id="Video-info-result-page">
                    <div>
                        <p id="Channel-name-result-page">{item.channelName}</p>
                        <p>{item.suscribers} suscribers</p>
                        <p>{item.description}</p>
                    </div>
                </p>
                <hr/>
                <Link to="/">
                    <button id="BackToHomeButton">Back to home</button>
                </Link>
            </div>
        </div>
    );
}

export default ResultsPage;