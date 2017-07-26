import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_LIST, GET_LIST_OK, GET_LIST_FAIL } from '../modules/listInfoActions';
import { getList } from '../modules/listInfoActions';

function watchGetList(action) {
  try {
    const user = yield call(Api.fetchUser, action.payload.userId);
    yield put({type: GET_LIST_OK, user: user});
  } catch (e) {
    yield put({type: GET_LIST_FAIL, message: e.message});
  }
}

export default function* homeTask() {
  try {
    while (true) {
      yield takeLatest(GET_LIST, watchGetList);
    }
  } finally {
    console.log('watchIncrementAsync terminated');
  }
};
