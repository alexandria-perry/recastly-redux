import Redux from 'redux';

var dummyVideo = {
  id: {
    videoId: 'dummy videoId'
  },
  snippet: {
    title: 'dummy title',
    description: 'dummy description'
  }
};

var currentVideoReducer = (state = null, action) => {
  if (action.type === 'CHANGE_VIDEO') {
    return action.video;
  }
  return state;
};

export default currentVideoReducer;


