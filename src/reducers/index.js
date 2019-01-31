import { combineReducers } from 'redux';

import loginReducer from './loginReducer';
import messages from './messagesReducer';
import songs from './songsReducer'


const allReducers = combineReducers({
    loginReducer,
    messages,
    songs
});

export default allReducers;