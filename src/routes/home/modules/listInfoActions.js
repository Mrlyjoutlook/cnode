import api from '../../../config/apiConfig';

export const GET_LIST = 'GET_LIST';
export const REQUEST_LIST = 'REQUEST_LIST';
export const SVAE_SCROLLTOP = 'SVAE_SCROLLTOP';

export const getList = (type = 'all') => (dispatch) => {
  return dispatch({
    type: REQUEST_LIST,
    url: api.getTopics,
    params: {
      page: 1,
      tab: type,
      limit: 10,
    },
  });
};

export const saveScrollTop = (h) => {
  return { type: SVAE_SCROLLTOP, h };
};
