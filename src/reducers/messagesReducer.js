import history from '../utils/history';

export default (state = null, action) => {

    switch(action.type){
        // CLEARING MESSAGES
        case "CLEAR_LOGIN_ERRORS":
            let CLEAR_LOGIN_ERRORS = state.errors.login && null; 
            return state = {
                ...state,
                errors: {
                    ...state.errors,
                    login: CLEAR_LOGIN_ERRORS
                }
            }
        case "CLEAR_REGISTER_ERRORS":
            let CLEAR_REGISTER_ERRORS = state.errors.register && null; 
            return state = {
                ...state,
                errors: {
                    ...state.errors,
                    register: CLEAR_REGISTER_ERRORS
                }
            }
        //MESSAGES
        //ERRORS
        //LOGIN
        case "CONNECTION_ERROR":
            let CONNECTION_ERROR = "Błąd połączenia";
            return state = {
                ...state,
                errors: {
                    login: CONNECTION_ERROR
                }
            }
        case "LOGIN_ERROR":
            console.log("see");
            let LOGIN_ERROR = "Nieprawidłowe login lub hasło";
            return state = {
                ...state,
                errors: {
                    login: LOGIN_ERROR
                }
            }
        case "AUTH_ERROR":
            let AUTH_ERROR = "Zostałeś/aś wylogowany/a";
            return state = {
                ...state,
                errors: {
                    ...state.errors,
                    login: AUTH_ERROR
                }
            }

        //REGISTER
        case "REGISTER_FAILED":
            let REGISTER_FAILED = "Nie udało się zarejstrować. Sprawdź Kod Szkoły.";
            return state = {
                ...state,
                errors: {
                    ...state.errors,
                    register: REGISTER_FAILED
                }
            }
        case "REGISTER_EMPTY":
            let REGISTER_EMPTY = "Wszystkie pola są wymagane!";
            return state = {
                ...state,
                errors: {
                    ...state.errors,
                    register: REGISTER_EMPTY
                }
            }
        case "REGISTER_ERROR_PASSWORD":
            let REGISTER_ERROR_PASSWORD = "Hasła się nie zgadzają";
            return state = {
                ...state,
                errors: {
                    ...state.errors,
                    register: REGISTER_ERROR_PASSWORD
                }
            }
        case "REGISTER_CONNECTION_ERROR":
            let REGISTER_CONNECTION_ERROR = "Błąd połączenia";
            return state = {
                ...state,
                errors: {
                    register: REGISTER_CONNECTION_ERROR
                }
            }
        //SUCCESS
        //REGISTER
        case "REGISTER_SUCCESS":
            let REGISTER_SUCCESS = "Rejestracja powiodła się... Za chwilę zostaniesz przekierowany na stronę logowania";
        
            setTimeout(()=>{
                history.push('/login');
            }, 1500);

            return state = {
                ...state,
                success: {
                    ...state.success,
                    register: REGISTER_SUCCESS
                }
            }
        default:
            return state 
    }
}