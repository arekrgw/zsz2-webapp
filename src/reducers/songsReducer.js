export default (state = null, action) => {

    switch(action.type){
        case "SONGS":

            return state = [...action.payload];
                
        default:
            return state 
    }
}