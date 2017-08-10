import { fromJS, Map, List } from 'immutable';
import { REQUEST_ADMIN } from '../modules/adminActions';

const initialState = fromJS({});

export default function adminReduer(state = initialState, action) {
  switch (action.type) {
    case `${REQUEST_ADMIN}_OK`:
      return fromJS(action.data);
    case `${REQUEST_ADMIN}_FAIL`:
      return initialState;
    default:
      return state;
  }
}

