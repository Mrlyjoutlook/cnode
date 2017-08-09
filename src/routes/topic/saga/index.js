import { put, takeLatest, select, fork, take, all } from 'redux-saga/effects';
import {
  GET_TOPIC,
  REQUEST_TOPIC,
  GIVE_AGREE,
  REQUEST_AGREE,
  COLLECT_TOPIC,
  DELCOLLECT_TOPIC,
  REQUEST_COLLECT,
  getTopic,
  giveAgree,
  requestCollect,
} from '../modules/topicActions';

function* getTopicDetail({ id }) {
  try {
    const { success, data } = yield put.resolve(getTopic(id));
    if (success) {
      yield put({ type: `${REQUEST_TOPIC}_OK`, data });
    } else {
      yield put({ type: `${REQUEST_TOPIC}_FAIL`, data });
    }
  } catch (e) {
      yield put({ type: `${REQUEST_TOPIC}_FAIL`, message: e.message });
  }
};

function* giveAgreeQuest({ id, index }) {
  try {
    const { success, action } = yield put.resolve(giveAgree(id));
    if (success) {
      yield put({ type: `${REQUEST_AGREE}_OK`, data: action, id, index });
    } else {
      yield put({ type: `${REQUEST_AGREE}_FAIL`, data: action, id, index });
    }
  } catch (e) {
    yield put({ type: `${REQUEST_AGREE}_FAIL`, message: e.message });
  }
};

function* collectTopic({ type }) {
  try {
    const { success, action } = yield put.resolve(requestCollect(type === COLLECT_TOPIC ? 1 : 0));
    if (success) {
      yield put({ type: `${REQUEST_COLLECT}_OK`, data: action, id, index });
    } else {
      yield put({ type: `${REQUEST_COLLECT}_FAIL`, data: action, id, index });
    }
  } catch (e) {
    yield put({ type: `${REQUEST_COLLECT}_FAIL`, message: e.message });
  }
}

export default function* topicTask() {
  yield takeLatest(GET_TOPIC, getTopicDetail);
  yield takeLatest(GIVE_AGREE, giveAgreeQuest);
  yield takeLatest(COLLECT_TOPIC, collectTopic);
};
