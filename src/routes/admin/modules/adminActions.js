import api from '../../../config/apiConfig';

export const GET_ADMININFO = 'GET_ADMININFO';
export const REQUEST_ADMIN = 'REQUEST_ADMIN';

export const getAdminInfo = (name) => (dispatch) => {
  return dispatch({
    type: REQUEST_ADMIN,
    url: api.getUserInfo(name),
  })
}
