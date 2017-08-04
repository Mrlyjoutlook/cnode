import { put, takeLatest, select, fork, take, all } from 'redux-saga/effects';
import { GET_TOPIC, REQUEST_TOPIC_OK, REQUEST_TOPIC_FAIL, getTopic } from '../modules/topicActions';

function* getTopicDetail({id}) {
  try {
    const { success, data } = yield put.resolve(getTopic(id));
      if (success) {
        yield put({ type: REQUEST_TOPIC_OK, data });
      } else {
        yield put({ type: REQUEST_TOPIC_FAIL, data });
      }
    } catch (e) {
      yield put({ type: REQUEST_TOPIC_FAIL, message: e.message });
    }
};

export default function* topicTask() {
  yield takeLatest(GET_TOPIC, getTopicDetail);
};
