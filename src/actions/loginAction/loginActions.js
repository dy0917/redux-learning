import * as actionTypes from './actionTypes';
import Axios from 'axios';

const apiUrl = 'http://localhost:3030/test';

export const login = (token) => {
  return {
    type: actionTypes.LOGIN,
    token
  };
};


export const onLogin = (usernameAndPassword) => {
  return (dispatch) => {
    return Axios.get(apiUrl, usernameAndPassword)
      .then(response => {
        dispatch(login(response.data));
      })
      .catch(error => {
        throw(error);
      });
  };
};


