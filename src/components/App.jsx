class App extends React.Component {
  constructor(props) {
    super(props);

    // RETURN TO STATE LATER
    this.state = {
      currentVideo: props.videos[0], // needs to be set to video in video player (video entry clicked)
      videoList: props.videos // needs to be set to videos in video list
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


// var App = (props) => (
//   <div>
//     <Nav />
//     <div className="col-md-7">
//       <VideoPlayer video={props.videos[0]}/>
//     </div>
//     <div className="col-md-5">
//       <VideoList videos={props.videos}/>
//     </div>
//   </div>
// );

// // In the ES6 spec, files are "modules" and do not share a top-level scope
// // `var` declarations will only exist globally where explicitly defined
// window.App = App;
