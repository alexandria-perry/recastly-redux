var changeVideo = (video) => ({
  type: 'CHANGE_VIDEO',
  video: video
});

export default changeVideo;


// {
//   type: 'CHANGE_VIDEO',
//   newVideo: video
// }


// reducer = function(currentState, action) {
//   if (action.type === 'CHANGE_VIDEO') {
//     // set new state's currentVideo to be action.newVideo
//   }
// }