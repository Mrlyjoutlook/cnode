export const GET_LIST = 'GET_LIST';
export const GET_LIST_OK = 'GET_LIST_OK';
export const GET_LIST_FAIL = 'GET_LIST_FAIL';

export const REQUEST_LIST = 'REQUEST_LIST';

export const getList() {
  return {
    types: REQUEST_LIST,
    url: ''
  }
}
