import axios from 'axios'
import { getDeviceIdentity, deviceHash } from '../utils/utilities';
import Cookie from 'js-cookie';

// const URL = "http://localhost/zsz2-webapp-api/";
// const URL = "http://192.168.2.67/zsz2-webapp-api/";
const URL = "http://temp.5v.pl/api/";



export const logInUser = (login, password, bgChange, nav) => {
    const FULL_URL = URL+`login.php`;
    const createForm = new FormData();
    const device = getDeviceIdentity();

    createForm.set("login", login);
    createForm.set("password", password);
    createForm.set("fingerprint", deviceHash());
    createForm.set("osname", device.osname);
    createForm.set("browsername", device.browsername);

    
    return dispatch => {
        axios.post(FULL_URL, createForm)
        .then(res => {
       
            if(!res.data){
                dispatch({ type: "LOGIN_ERROR" });
                bgChange("failure");
            }
            else{
                dispatch({type: "HASH_ASSIGN", payload: res.data});
                dispatch({ type: "CLEAR_LOGIN_ERRORS"});
                nav();
            }
        })
        .catch(err => {
            bgChange("failure");
            dispatch({ type: "CONNECTION_ERROR", payload: err });
        })
    }

}


export const registerUser = (user, bgChange) => {
    if(user.password !== user.Spassword || (user.password ==='' || user.Spassword ==='')){
        bgChange("failure");
        return { type: 'REGISTER_ERROR_PASSWORD' }
    }
    else{
        if(user.login === '' || user.email === '' || user.imie === '' || user.nazwisko === '' || user.latadolaczenia === '' || user.code === ''){
            bgChange("failure");
            return {type: 'REGISTER_EMPTY'}
        }
        else{
            const FULL_URL = URL+`registerUser.php`;

            const createForm = new FormData();

            createForm.set("login", user.login);
            createForm.set("email", user.email);
            createForm.set("password", user.password);
            createForm.set("imie", user.imie);
            createForm.set("nazwisko", user.nazwisko);
            createForm.set("latadolaczenia", user.klasa);
            createForm.set("code", user.code);

            return dispatch =>{
                axios.post(FULL_URL, createForm)
                .then(res => {
                    if(res.data){
                        dispatch({type: 'REGISTER_SUCCESS'});
                        dispatch({type: 'CLEAR_REGISTER_ERRORS'});
                        bgChange("success");
                    }
                    else {
                        dispatch({type: 'REGISTER_FAILED'});
                        bgChange("failure");
                    }
    
                })
                .catch(err => {
                    bgChange("failure");
                    dispatch({type: 'REGISTER_CONNECTION_ERROR', payload: err});
                })
            }
        }
    }

    
}


export const runAuth = (redirect) => {
    const FULL_URL = URL+`runAuth.php`;
    const createForm = new FormData();

    if(Cookie.get("hash")){
        createForm.set("hash", Cookie.get("hash"));
        createForm.set("fingerprint", Cookie.get("deviceHash"));
        return dispatch => {
            axios.post(FULL_URL, createForm)
            .then(res => {
                if(res.data){
                    if(res.data.hash){
                        dispatch({type: "HASH_ASSIGN", payload: res.data})
                    }   
                    else dispatch({type: "USER_LOGGED"})
                }
                else {
                    dispatch({type: "LOG_OUT"})
                    redirect(); 
                }
                
                
                
            })
            .catch(err => {
                dispatch({type: "LOG_OUT"});
                redirect();
            })
        }
    }
    else {
        redirect();
        return {type: "LOG_OUT"}
    }

    

}