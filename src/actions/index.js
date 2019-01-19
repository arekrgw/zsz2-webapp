import axios from 'axios'
import { getDeviceIdentity, deviceHash } from '../utilities';

const URL = "http://localhost/zsz2/";


export const logInUser = (login, password) => {
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
            }
            else{
                dispatch({type: "HASH_ASSIGN", payload: res.data});
                
                dispatch({ type: "CLEAR_ERRORS"});
            }
        })
        .catch(err => {
            dispatch({ type: "CONNECTION_ERROR", payload: err });
        })
    }

}


export const registerUser = (user) => {
    if(user.password !== user.Spassword || (user.password ==='' || user.Spassword ==='')){
        return { type: 'REGISTER_ERROR_PASSWORD' }
    }
    else{
        if(user.login === '' || user.email === '' || user.imie === '' || user.nazwisko === '' || user.latadolaczenia === '' || user.code === ''){
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
                        dispatch({type: 'CLEAR_REGISTER_ERRORS'})
                    }
                    else dispatch({type: 'REGISTER_FAILED'})
    
                })
                .catch(err => {
                    dispatch({type: 'REGISTER_CONNECTION_ERROR'});
                })
            }
        }
    }

    
}


export const noShortCookie = (uid, longCookie, shortCookie) =>{
    const FULL_URL = URL+`runAuth.php`;

    const createForm = new FormData();

    createForm.set("uid", uid);
    createForm.set("longcookie", longCookie);
    createForm.set("shortcookie", shortCookie);
    return dispatch => {

        axios.post(FULL_URL, createForm)
        .then(res => {
            console.log(res);
            if(res.data.tokens === false || res.data.tokens === true){
                dispatch({type: 'LOG_OUT'});
                dispatch({type: 'AUTH_ERROR'});
            }
            else {
                dispatch({type: 'TOKENS_ASSIGN', payload: res.data.tokens})
            }
        })
    }
}
