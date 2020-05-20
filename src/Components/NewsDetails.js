import React from 'react';

const NewsDetails = (props) => {
    if(!props.story) return null;
    return(
        <div>

        <h2>{props.story.title}</h2>
        <p>{props.story.by}</p>
        <p>{props.story.score}</p>
        <p>{props.story.url}</p>



        </div>
    )
}
export default NewsDetails;