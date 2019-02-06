import axios from 'axios'
import Cookie from 'js-cookie'
// const URL = "http://localhost/zsz2-webapp-api/";
const URL = "http://192.168.2.67/zsz2-webapp-api";


export const getSongs = (red, date = null) => {
    let FULL_URL = URL+`/radio/getSongs.php?devicehash=${Cookie.get("deviceHash")}&hash=${Cookie.get("hash")}`;

    if(date){
        
        let formatedDate = `${date.getFullYear()}-${date.getMonth()+1 < 9 ? "0"+(date.getMonth()+1) : date.getMonth()+1}-${date.getDate()}`;
        FULL_URL = FULL_URL+`&date=${formatedDate}`;
    }

    return dispatch => {
        axios.get(FULL_URL)
        .then(res => {
            
            if(res.data.hash){
                dispatch({type: "SONGS_WITH_HASH", payload: res.data})
           
            }
            else if(!res.data){
                dispatch({type: "LOG_OUT"})
                red()
            }
            else{
                dispatch({type: "SONGS", payload: res.data});
           
            }
            
        })
        .catch(err => {

        }) 
    }




}