var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {'key': options.key, 'q': options.query, 'part': 'snippet', 'maxResults': options.max, 'type': 'video', 'videoEmbeddable': 'true'},
    dataType: 'json',
    success: (data) => {
      console.log('you are so good');
      callback(data.items); // do something with this
    } 
  });
};

window.searchYouTube = searchYouTube;
