import { fromJS, Map, List } from 'immutable';
import * as actions from './listInfoActions';

const initialState = fromJS({
  loading: false,
  scrollTop: 0,
  tab: 'all',
  page: 1,
  limit: 10,
  listData: [],
  contentData: [],
});

export default function (state = initialState, action) {
  switch (action.type) {
    case actions.REQUEST_LIST_LOAD:
      return state.set('loading', true);
    case actions.REQUEST_LIST_OK:
      if (state.get('listData').size === 0) {
        return state.update('listData', data => data.push(...action.data.map(item => Map(item)))).set('tab', action.tab).set('loading', false);;
      }
      if (action.tab !== state.get('tab')) {
        return state.set('listData', fromJS([...action.data])).set('tab', action.tab).set('loading', false);
      }
      break;
    case actions.SVAE_SCROLLTOP:
      return state.set('scrollTop', action.h);
    default:
      return state;
  }
};
