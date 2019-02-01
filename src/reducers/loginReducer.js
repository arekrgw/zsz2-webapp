import Cookie from 'js-cookie';



export default (state = null, action) => {

    switch(action.type){
        case "HASH_ASSIGN":
        case "SONGS_WITH_HASH":
            
            const { payload } = action;
            Cookie.set("hash", payload.hash, {expires: new Date(2037, 12, 31)});
            return state = true;
        case "LOG_OUT":
            Cookie.remove("hash");
            return state = false

        case "USER_LOGGED":
            return state = true
            
        default:
            return state 
    }
}