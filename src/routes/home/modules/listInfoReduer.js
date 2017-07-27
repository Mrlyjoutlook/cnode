import { fromJS, Map } from 'immutable';
import * as actions from './listInfoActions';

const initialState = fromJS({
  scrollTop: 0,
  type: 'tab',
  page: 1,
  limit: 10,
  listData: [],
  contentData: [],
});

export default function (state = initialState, action) {
  switch (action.type) {
    case actions.REQUEST_LIST_OK:
      return state.update('listData', data => data.push(...action.data.map(item => Map(item))));
    case actions.SVAE_SCROLLTOP:
      return state.set('scrollTop', action.h);
    default:
      return state;
  }
};
