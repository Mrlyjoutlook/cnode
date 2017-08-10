import { fromJS, Map, List } from 'immutable';
import { REQUEST_MESSAGE, REQUEST_MESSAGES } from './myInfoActions';

const initialState = fromJS({
  noReadNum: 0,
  noRead: [],
  read: [],
});

export default function (state = initialState, action) {
  switch (action.type) {
    case `${REQUEST_MESSAGE}_OK`:
      return state.set('noReadNum', action.data);
      break;
    default:
      return state;
  }
};
