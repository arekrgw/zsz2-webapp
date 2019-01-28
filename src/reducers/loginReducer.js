import Cookie from 'js-cookie';



export default (state = null, action) => {

    switch(action.type){
        case "HASH_ASSIGN":
            const { payload } = action;
            Cookie.set("hash", payload.hash);
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