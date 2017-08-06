import { put, takeLatest, select, fork, take, all } from 'redux-saga/effects';
import {
  GET_TOPIC,
  REQUEST_TOPIC_OK,
  REQUEST_TOPIC_FAIL,
  GIVE_AGREE,
  REQUEST_AGREE_OK,
  REQUEST_AGREE_FAIL,
  getTopic,
  giveAgree,
} from '../modules/topicActions';

function* getTopicDetail({ id }) {
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

function* giveAgreeQuest({ id, index }) {
  try {
    const { success, action } = yield put.resolve(giveAgree(id));
    if (success) {
      yield put({ type: REQUEST_AGREE_OK, data: action, id, index });
    } else {
      yield put({ type: REQUEST_AGREE_FAIL, data: action, id, index });
    }
  } catch (e) {
    yield put({ type: REQUEST_AGREE_FAIL, message: e.message });
  }
};

export default function* topicTask() {
  yield takeLatest(GET_TOPIC, getTopicDetail);
  yield takeLatest(GIVE_AGREE, giveAgreeQuest);
};
