import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTsearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'
const API_KEY = 'AIzaSyD5PZ5XSRoIGcGGuYXHU4ktf1WMFwn6lGg'


class App extends Component {
	constructor(props){
		super(props);
		this.state ={
			videos:[],
			selectedVideo: null
		};
		this.videoSearch('react js');
	}

	videoSearch(term){
		YTsearch({key: API_KEY, term: term},  (videos) => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}

	render(){
		return ( 
			<div>
				<SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList 
				onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
				videos={this.state.videos} />
			</div>
		);
	}
}

ReactDOM.render(<App />,document.querySelector(".container"));
