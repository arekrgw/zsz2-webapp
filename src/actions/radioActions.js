import axios from 'axios'
import Cookie from 'js-cookie'
// const URL = "http://localhost/zsz2-webapp-api/";
const URL = "http://192.168.2.67/zsz2-webapp-api/";


export const getSongs = (red, date = null) => {
    let FULL_URL = URL+`/radio/getSongs.php?devicehash=${Cookie.get("deviceHash")}&hash=${Cookie.get("hash")}`;

    if(date){
        FULL_URL = FULL_URL+`&date=${date}`;
    }

    return dispatch => {
        axios.get(FULL_URL)
        .then(res => {

            if(res.data.hash){
                const hash = { hash: res.data.hash }
                delete res.data.hash
                dispatch({type: "SONGS", payload: res.data});
                dispatch({type: "HASH_ASSIGN", payload: hash})
            }
            else{
                dispatch({type: "SONGS", payload: res.data});
            }
            
        })
        .catch(err => {

        }) 
    }




}