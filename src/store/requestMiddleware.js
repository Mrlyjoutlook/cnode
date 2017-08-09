import axios from 'axios';

export default ({ dispatch, getState }) => (next) => (action) => {
  const { type = '', url, method = 'get', headers, data = {}, params = {} } = action;

  // 普通 action：传递
  if (!url || url === undefined) {
    return next(action);
  }

  if (!type || type === undefined) {
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
    baseURL: 'https://cnodejs.org/api/v1',
    method,
    params,
    data,
  })
  .then(checkStatus)
  .then(
    json => {
      return json.data;
      // return Object.assign({}, { type }, json);
    },
  );
};
