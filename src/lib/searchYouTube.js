var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      'key': options.key, 
      'q': options.query, 
      'part': 'snippet', 
      'maxResults': options.max, 
      'type': 'video', 
      'videoEmbeddable': 'true'
    },
    dataType: 'json',
    success: (data) => {
      console.log('data.items ', data.items);
      callback(data.items);
    } 
  });
};

window.searchYouTube = searchYouTube;
