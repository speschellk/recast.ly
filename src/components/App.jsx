class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: props.videos[0],
      videoList: props.videos,
      search: undefined
    };
  }

  onVideoTitleClick(video) {
    console.log('in onVideoTitleClick function');
    this.setState({
      currentVideo: video
    });
  }

  onSearch() {
    var searchCB = function(searchResults) {
      this.setState({'videoList': searchResults});
    };
    this.props.searchYouTube({'query': this.state.search, 'key': window.YOUTUBE_API_KEY, 'max': 5}, searchCB.bind(this));
  }

  onType(query) {
    console.log('query', query);
    this.setState({'search': query});
  }

  componentDidMount() {
    var searchCB = function(searchResults) {
      this.setState({'videoList': searchResults});
    };
    this.props.searchYouTube({'query': 'kitten ninjas', 'key': window.YOUTUBE_API_KEY, 'max': 5}, searchCB.bind(this));
  }

  render() {

    return (
      <div>
        <Nav onSearch={this.onSearch.bind(this)} onType={this.onType.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videoList} onClick={this.onVideoTitleClick.bind(this)}/>
        </div>
      </div>
    );
  }

}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
