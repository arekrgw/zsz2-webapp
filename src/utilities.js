import Cookie from 'js-cookie';
import { store } from './index';
import { noShortCookie } from './actions'

export const isSignedInByCookies = () => {
    let flag = false;
    // if(Cookie.get("short") && Cookie.get("long")){
    //     flag = true;
    // }
    // else if(!Cookie.get("short") && Cookie.get("long")){
    //     store.dispatch(noShortCookie(Cookie.get('uid'), Cookie.get('long'), Cookie.get('short')));
    // }
    // else if(!Cookie.get("short") && !Cookie.get("long")){
    //     flag = false;
    // }

    if(Cookie.get("hash")){
        flag = true;
    }
    else {
        flag = false;
    }
    return flag;
}

export const initialState = {
    messages: {
        errors: null,
        success: null
    }
}
