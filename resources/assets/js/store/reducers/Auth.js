import * as ActionTypes from '../action-types'
import Http from '../../Http'

const user = {
    id: null,
    name: null,
    email: null,
    createdAt: null,
    updatedAt: null
};

const initialState = {
    isAuthenticated : false,
    isAdmin: false,
    user
};

const Auth = (state= initialState,{type,payload = null}) => {
    switch(type){
        case ActionTypes.AUTH_LOGIN:
            return authLogin(state,payload);
        case ActionTypes.AUTH_CHECK:
            return checkAuth(state);
        case ActionTypes.AUTH_LOGOUT:
            return logout(state);
        default:
            return state;
    }
};

const authLogin = (state,payload) => {
    const jwtToken = payload.token;
    const user = payload.user[0];
    if(!!payload.user[0].admin){
        localStorage.setItem('is_admin',true);
    } else {
        localStorage.setItem('is_admin',false);
    }
    localStorage.setItem('jwt_token',jwtToken);
    Http.defaults.headers.common['Authorization'] = `Bearer ${jwtToken}`;
    state = Object.assign({}, state, {
        isAuthenticated: true,
        isAdmin: localStorage.getItem('is_admin') === 'true',
        user
    });
    return state;

};

const checkAuth = (state) =>{
    state =Object.assign({},state,{
        isAuthenticated : !!localStorage.getItem('jwt_token'),
        isAdmin : localStorage.getItem('is_admin'),
    });
    if(state.isAuthenticated){
        Http.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('jwt_token')}`;
    }
    return state;
};

const logout = (state) => {
    localStorage.removeItem('jwt_token');
    localStorage.setItem('is_admin',false);
    state = Object.assign({},state,{
        isAuthenticated: false,
        isAdmin : false,
        user
    });
    return state;
};

export default Auth;
