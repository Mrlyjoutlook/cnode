import { fromJS, Map, List } from 'immutable';
import { REQUEST_TOPIC_OK, REQUEST_TOPIC_FAIL } from './topicActions';

const initialState = fromJS({
  data: {}
});

export default function topicReduer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_TOPIC_OK:
      return state.set('data', fromJS(action.data));
    case REQUEST_TOPIC_FAIL:
      return state.set('data', fromJS({}));
    default:
      return state;
  }
}
