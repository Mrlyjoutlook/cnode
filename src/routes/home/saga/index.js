import { put, select, takeLatest } from 'redux-saga/effects';
import { GET_LIST, REQUEST_LIST_OK, REQUEST_LIST_FAIL } from '../modules/listInfoActions';
import { getList } from '../modules/listInfoActions';

function* watchGetList(action) {
  const listInfo = yield select(state => state.listInfo);
  if (listInfo.get('listData').size === 0) {
    try {
      const { success, data } = yield put.resolve(getList());
      if (success) {
        yield put({ type: REQUEST_LIST_OK, data });
      } else {
        yield put({ type: REQUEST_LIST_FAIL, data });
      }
    } catch (e) {
      yield put({ type: REQUEST_LIST_FAIL, message: e.message });
    }
  }
}

export default function* homeTask() {
  yield takeLatest(GET_LIST, watchGetList);
  // try {
  //   while (true) {
  //     yield take(GET_LIST, watchGetList);
  //   }
  // } finally {
  //   console.log('watchIncrementAsync terminated');
  // }
};
