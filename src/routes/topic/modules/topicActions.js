import api from '../../../config/apiConfig';

export const GET_TOPIC = 'GET_TOPIC';
export const REQUEST_TOPIC = 'REQUEST_TOPIC';

export const GIVE_AGREE = 'GIVE_AGREE';
export const REQUEST_AGREE = 'REQUEST_AGREE';

export const COLLECT_TOPIC = 'COLLECT_TOPIC';
export const DELCOLLECT_TOPIC = 'DELCOLLECT_TOPIC';
export const REQUEST_COLLECT = 'REQUEST_COLLECT';

export const getTopic = id => (dispatch) => {
  return dispatch({
    type: REQUEST_TOPIC,
    url: api.getTopic(id),
  });
};

export const giveAgree = id => (dispatch) => {
  return dispatch({
    type: REQUEST_AGREE,
    method: 'post',
    url: api.giveAgree(id),
    data: {
      accesstoken: '3d926f56-bcee-4333-a18c-736a77638f49',
    }
  });
};

export const requestCollect = (type, id) => (dispatch) => {
  return dispatch({
    type: REQUEST_COLLECT,
    method: 'post',
    url: type === 1 ? api.collect :api.deCollect,
    data: {
      accesstoken: '3d926f56-bcee-4333-a18c-736a77638f49',
      topic_id: id
    }
  })
}
