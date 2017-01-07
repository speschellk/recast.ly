// TODO: Render the `App` component to the DOM
// ReactDOM.render(<window.App />, document.getElementById('app'));

ReactDOM.render(<App searchYouTube={() => {}} />, document.getElementById('app'));
// ReactDOM.render(<App videos={searchYouTube({'key': window.YOUTUBE_API_KEY, 'query': 'cat', 'max': 5}, () => {})} />, document.getElementById('app'));