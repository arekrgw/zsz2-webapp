import Cookie from 'js-cookie';
import history from '../history';


export default (state = null, action) => {

    switch(action.type){
        case "HASH_ASSIGN":
            const { payload } = action;
            Cookie.set("hash", payload.hash);
            history.push("/");
            return state

        case "LOG_OUT":
            Cookie.remove("hash");

            return state
            
        default:
            return state 
    }
}