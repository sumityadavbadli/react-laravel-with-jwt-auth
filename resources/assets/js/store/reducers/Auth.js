import * as ActionTypes from '../action-types'

const Auth = (state= {},{type,payload = null}) => {
    switch(type){
        case ActionTypes.AUTH_LOGIN:
            return authLogin(state,payload);
            default:
                return state;
    }
};

const authLogin = (state,payload) => (
  Object.assign({},state,{
      payload
  })
);

export default Auth;