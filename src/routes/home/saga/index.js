import { put, select, takeLatest } from 'redux-saga/effects';
import { GET_LIST, REQUEST_LIST_LOAD, REQUEST_LIST_OK, REQUEST_LIST_FAIL } from '../modules/listInfoActions';
import { getList } from '../modules/listInfoActions';

function* watchGetList({ tab }) {
  const listInfo = yield select(state => state.listInfo);
  if (listInfo.get('listData').size === 0 || tab !== listInfo.get('tab')) {
    try {
      const { success, data } = yield put.resolve(getList(tab));
      if (success) {
        yield put({ type: REQUEST_LIST_LOAD });
        yield put({ type: REQUEST_LIST_OK, data, tab });
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

