class App extends React.Component {
  constructor(props) {
    super(props);

    // RETURN TO STATE LATER
    this.state = {
      currentVideo: props.videos[0],
      videoList: props.videos
    };
  }

  onVideoTitleClick(video) {
    console.log('in onVideoTitleClick function');
    this.setState({
      currentVideo: video // returned by click handler on videoListEntry title (in video list)
    });
  }

  onSearch(queryString) {
    console.log('in onSearch function');
    var searchCB = function(searchResults) {
      console.log('searchCB achieved');
      this.setState({'videoList': searchResults});
    };
    console.log('farther down in onSearch function');
    searchYouTube({'query': queryString, 'key': window.YOUTUBE_API_KEY, 'max': 5}, searchCB.bind(this));
  }

  render() {

    return (
      <div>
        <Nav onSearch={this.onSearch.bind(this)}/>
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
