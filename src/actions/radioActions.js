import axios from 'axios'
import Cookie from 'js-cookie'
// const URL = "http://localhost/zsz2-webapp-api/";
// const URL = "http://192.168.2.67/zsz2-webapp-api";
const URL = "http://temp.5v.pl/api/";


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
    }




}

export const postSong = (url, title, annonymous, closeModal, fetchSongs) => {
    let FULL_URL = URL+`/radio/postSong.php`;
    let createForm = new FormData();

    createForm.set("hash", Cookie.get("hash"));
    createForm.set("devicehash", Cookie.get("deviceHash"));
    createForm.set("url", url);
    createForm.set("title", title);
    createForm.set("annonymous", annonymous ? 1 : 0);
    
    return dispatch => {
        axios.post(FULL_URL, createForm)
        .then(res => {
            if(res.data){
                closeModal();
                fetchSongs();
                dispatch({type: "CLEAR_POST_SONG_ERRORS"})
            }
            else {
                fetchSongs()
                dispatch({type: "POST_SONG_ERROR"})
            }
        })
        .catch(err => {
            dispatch({type: "POST_SONG_CON_ERROR"})
        })
    }
}