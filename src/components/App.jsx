class App extends React.Component {
  constructor(props) {
    super(props);

    // RETURN TO STATE LATER
    this.state = {
      currentVideo: props.searchYouTube()[0],
      videoList: props.searchYouTube()
    };
  }

  onVideoTitleClick(video) {
    this.setState({
      currentVideo: video // returned by click handler on videoListEntry title (in video list)
      // videoList: props.videos // current video will be taken out of videoList, need to re-render videoList
    });
  }

  render() {

    return (
      <div>
        <Nav />
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
