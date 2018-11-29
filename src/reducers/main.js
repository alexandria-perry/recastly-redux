import { combineReducers } from 'redux';
import currentVideoReducer from './currentVideo.js';
import videoListReducer from './videoList.js';

var rootReducer = combineReducers({videoList: videoListReducer, currentVideo: currentVideoReducer});

export default rootReducer;
