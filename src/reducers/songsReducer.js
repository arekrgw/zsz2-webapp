export default (state = null, action) => {

    switch(action.type){
        case "SONGS":
        case "SONGS_WITH_HASH":
           
            if(action.payload.hash){
                delete action.payload.hash;
            }
   
            return state = [...action.payload];
                
        default:
            return state 
    }
}