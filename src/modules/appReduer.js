import { fromJS, Map } from 'immutable';
import * as actions from './appActions';

const initialState = fromJS({
  direction: 'x',
});

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
};
