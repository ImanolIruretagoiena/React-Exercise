import React from 'react';
import {Link} from 'react-router-dom';

function Card(props) {
    
    return(
        <article className="Grid-item">
            <Link to={`/videos/${props.id}`}>
                <img src={`/images/${props.media}.jpg`} alt="Thumbnail" id="Video-thumb"/>
            </Link>
            <img src={`/images/channels/${props.channelThumb}.jpg`} alt="Channel Logo" id="Channel-logo"/>
            <p class="Video-info">
                <div>
                    <h1>{props.title}</h1>
                    <p>{props.channelName}</p>
                    <p>{props.views} views</p>
                </div>
            </p>
        </article>
    )
}

export default Card;