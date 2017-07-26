import axios from 'axios';

export default ({ dispatch, getState }) => (next) => (action) => {
  const { types = '', url, method = 'get', headers, params = {}, paramsEnd = {} } = action;

  // 普通 action：传递
  if (!url || url == undefined){
    return next(action);
  }

  if (!types || types === undefined) {
    return next(action);
  }

  function checkStatus(response) {
    const { status, statusText } = response;
      if (status >= 200 && status < 300) {
        return response;
      } else {
        let error = new Error(statusText);
        error.response = response;
        throw error;
      }
  }

  return axios({
    url,
    method,
    responseType: 'stream'
  })
  .then(checkStatus())
  .then(
    json => {
      return types ? dispatch(Object.assign({}, { type, response: json }, { paramsEnd })) : json;
    },
  );
};
