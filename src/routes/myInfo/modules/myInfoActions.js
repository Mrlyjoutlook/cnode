
export const CHECK_MESSAGE = 'CHECK_MESSAGE';
export const REQUEST_MESSAGE = 'REQUEST_MESSAGE';
export const REQUEST_MESSAGES = 'REQUEST_MESSAGES';

export const getNoReadMessage = () => (dispatch) => {
  return dispatch({
    type: REQUEST_MESSAGE,
    url: api.getNoReadMessage,
    params: {
      accesstoken: '',
    }
  })
}

export const getMessages = () => (dispatch) => {
  return dispatch({
    type: REQUEST_MESSAGES,
    url: api.getMessages,
    params: {
      accesstoken: '',
    }
  })
}
