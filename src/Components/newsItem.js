import React from 'react';

const newsItem = ((props) => {

//     function handleClick(event) {
//         event.preventDefault();
//         console.log("click")
//       props.story.onStoriesSelected(event.target.child);
//   }

    return(
        <>
            <h4 >{props.story.title}</h4>
            
        </>
    )

})

export default newsItem;