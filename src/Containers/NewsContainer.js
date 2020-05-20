import React, { Component } from 'react';
import NewsSelector from '../Components/NewsSelector.js'
import NewsDetails from '../Components/NewsDetails.js'

class NewsContainer extends Component {
    constructor(props){
        super(props);
        this.state={
            storiesId:[],
            stories:[],
            selectedStory: ''

        }
        this.handleStoriesSelected = this.handleStoriesSelected.bind(this);
    }

    getStories = () => {
        const mainStoriesURL = "https://hacker-news.firebaseio.com/v0/topstories.json"
        fetch(mainStoriesURL)
        .then(res => res.json())
        .then(json => {
          const top100Stories = json.slice(0,10);
          const storyURLs = top100Stories.map(story => {
            return fetch(`https://hacker-news.firebaseio.com/v0/item/${story}.json`)
            .then(res => res.json())
          })
          Promise.all(storyURLs)
          .then(story => this.setState({
            stories: story
          }))
        })
      }

    componentDidMount(){
            this.getStories();
            }

    handleStoriesSelected(story) {
        this.setState({ selectedStory: story })
    
    }



           

    
    render(){
        const currentStory = 
        this.state.stories.includes(this.states.selectedStory)
            // story => story.title === this.state.selectedStories.title)
            console.log(currentStory)

        return(
            <div className="newsContainer">
                <NewsSelector 
                stories={this.state.stories} 
                onStoriesSelected={this.handleStoriesSelected}
            />

            <NewsDetails story={currentStory} />
    
            </div>
        )
    };
}


export default NewsContainer;