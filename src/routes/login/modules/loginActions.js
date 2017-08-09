import api from '../../../config/apiConfig';

export const CHECK_TOKEN = 'CHECK_TOKEN';
export const LOGIN_IN = 'LOGIN_IN';
export const LOIGN_OUT = 'LOIGN_OUT';
export const REQUEST_ACCESSTOKEN = 'REQUEST_ACCESSTOKEN';

export const requestToken = (accesstoken) => {
  return (dispatch) => {
    return dispatch({
      type: REQUEST_ACCESSTOKEN,
      url: api.accessToken,
      method: 'post',
      data: { accesstoken },
    });
  };
};
