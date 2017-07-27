import { fromJS, Map } from 'immutable';
import * as actions from './appActions';

const initialState = fromJS({
  oldLocation: {
    pathname: '',
    search: '',
    hash: '',
    state: undefined,
  },
});

export default function (state = initialState, action) {
  switch (action.type) {
    case actions.SAVE_OLDLOCATION:
      return state.set('oldLocation', Map(action.location));
    default:
      return state;
  }
};
