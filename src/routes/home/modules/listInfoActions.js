import api from '../../../config/apiConfig';

export const GET_LIST = 'GET_LIST';
export const REQUEST_LIST = 'REQUEST_LIST';
export const REQUEST_LIST_OK = 'REQUEST_LIST_OK';
export const REQUEST_LIST_FAIL = 'REQUEST_LIST_FAIL';
export const SVAE_SCROLLTOP = 'SVAE_SCROLLTOP';

export const getList = () => (dispatch) => {
  return dispatch({
    type: REQUEST_LIST,
    url: api.getTopics,
    method: 'get',
    params: {
      page: 1,
      tab: 'all',
      limit: 10,
    },
  });
};

export const saveScrollTop = (h) => {
  return { type: SVAE_SCROLLTOP, h };
};
