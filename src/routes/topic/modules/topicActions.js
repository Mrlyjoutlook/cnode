import api from '../../../config/apiConfig';

export const GET_TOPIC = 'GET_TOPIC';
export const REQUEST_TOPIC = 'REQUEST_TOPIC';
export const REQUEST_TOPIC_OK = 'REQUEST_TOPIC_OK';
export const REQUEST_TOPIC_FAIL = 'REQUEST_TOPIC_FAIL';

export const GIVE_AGREE = 'GIVE_AGREE';
export const REQUEST_AGREE_OK = 'REQUEST_AGREE_OK';
export const REQUEST_AGREE_FAIL = 'REQUEST_AGREE_FAIL';

export const getTopic = id => (dispatch) => {
  return dispatch({
    type: REQUEST_TOPIC,
    url: api.getTopic(id),
  });
};

export const giveAgree = id => (dispatch) => {
  return dispatch({
    type: GIVE_AGREE,
    method: 'post',
    url: api.giveAgree(id),
    data: {
      accesstoken: '3d926f56-bcee-4333-a18c-736a77638f49',
    }
  });
};
