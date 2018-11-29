import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

var handleVideoSearch = (q) => {
     
  return function(dispatch) {
    
    var options = {
      key: YOUTUBE_API_KEY,
      query: q,
      max: 5
    };
  
    searchYouTube(options, (items) => {
      dispatch(changeVideoList(items));
      dispatch(changeVideo(items[0]));
    });
    
  };
  
  
};

export default handleVideoSearch;
