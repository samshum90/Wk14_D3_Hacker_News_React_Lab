import React from 'react'
import NewsItem from './newsItem'

const NewsSelector = (props => {
    const options = props.stories.map(story => {
        return <NewsItem
        story={story} 
        key={story.id}
        />
        
      })

      function handleChange(event) {
        props.onStoriesSelected(event.target.value);
      }

      return (
        <>
            <input type="text" onChange={handleChange} />
            {options}
        </>
        )


})

export default NewsSelector;