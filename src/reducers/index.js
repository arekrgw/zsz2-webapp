import { combineReducers } from 'redux';

import loginReducer from './loginReducer';
import messages from './messagesReducer';



const allReducers = combineReducers({
    loginReducer,
    messages
});

export default allReducers;