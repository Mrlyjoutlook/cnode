import api from '../../../config/apiConfig';

export const GET_TOPIC = 'GET_TOPIC';
export const REQUEST_TOPIC = 'REQUEST_TOPIC';
export const REQUEST_TOPIC_OK = 'REQUEST_TOPIC_OK';
export const REQUEST_TOPIC_FAIL = 'REQUEST_TOPIC_FAIL';

export const getTopic = (id) => (dispatch) => {
  return dispatch({
    type: REQUEST_TOPIC,
    url: api.getTopic(id),
  });
};
