const MEMORY_HISTORY = 'MEMORY_HISTORY';

const initialState = {
  pathname: '',
  search: '',
  hash: '',
  state: undefined,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case MEMORY_HISTORY:
      return Object.assign({}, state, action.data);
    default:
      return state;
  }
};
