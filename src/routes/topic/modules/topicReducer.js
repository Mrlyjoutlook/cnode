import { fromJS, Map, List } from 'immutable';
import { normalize, schema } from 'normalizr';
import { REQUEST_TOPIC_OK, REQUEST_TOPIC_FAIL, REQUEST_AGREE_OK } from './topicActions';

const initialState = fromJS({
  data: {},
  commentId: [],
  comment: {},
});

export default function topicReduer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_TOPIC_OK:
      {
        const comment = new schema.Entity('comment', undefined, { idAttribute: 'id' });
        const mySchema = { replies: [comment] };
        const { result, entities } = normalize(action.data, mySchema);
        return state.set('data', fromJS(result))
          .set('comment', fromJS(entities.comment))
          .set('commentId', List(result.replies));
      }
    case REQUEST_TOPIC_FAIL:
      return initialState;
    case REQUEST_AGREE_OK:
      if (action.data === 'up') return state.updateIn(['comment', action.id, 'ups'], val => val.push(action.id));
      if (action.data === 'down') return state.updateIn(['comment', action.id, 'ups'], val => val.filter(item => item !== action.id));
      break;
    default:
      return state;
  }
}
