import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
    return{
        type: actionTypes.AUTH_START,
    }
}
export const authSuccess = (token, error) => {
    return{
        type: actionTypes.AUTH_SUCCESS,
        token: token,
    }
}
export const authFail = (error) => {
    return{
        type: actionTypes.AUTH_FAIL,
        error: error,
    }
}
export const logout = () => {
    localStorage.removeItem('user');
    return{
        type: actionTypes.AUTH_LOGOUT,
    };
}





// add required parameters for login:


export const authLogin = (username, password) => {
    return dispatch => {
        dispatch(authStart());
        axios.post('https://srmsp2c.herokuapp.com/rest-auth/login/' , {
            username: username,
            password: password
        })
        .then(res => {
            const token = res.data.key;
            // ADD expiration data forn login
            // const expirationDate = ;
            // localStorage.setItem('expirationDate' ,expirationDate);
                localStorage.setItem('token', token);
                // if (res.data.logged_in){
                    dispatch(authSuccess(token));      
                // }
                console.log(res);
                
        })
        .catch(err => {
            dispatch(authFail(err));
            console.log(err)
        })
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (token === undefined) {
            dispatch(logout());
        } else {
                dispatch(authSuccess(token));
        }
        
    }
}