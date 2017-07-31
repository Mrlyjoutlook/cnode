import { put, select, takeLatest } from 'redux-saga/effects';
import { GET_LIST, REQUEST_LIST_OK, REQUEST_LIST_FAIL } from '../modules/listInfoActions';
import { getList } from '../modules/listInfoActions';

function* watchGetList(action) {
  const listInfo = yield select(state => state.listInfo);
  const type = action.data;
  if (listInfo.get('listData').size === 0 || type !== listInfo.get('tab')) {
    try {
      const { success, data } = yield put.resolve(getList(type));
      if (success) {
        yield put({ type: REQUEST_LIST_OK, data, tab: type });
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
};

