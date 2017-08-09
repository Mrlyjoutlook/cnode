import { put, select, takeLatest } from 'redux-saga/effects';
import { GET_LIST, REQUEST_LIST } from '../modules/listInfoActions';
import { getList } from '../modules/listInfoActions';

function* watchGetList({ tab }) {
  yield put({ type: `${REQUEST_LIST}_LOAD` });
  const listInfo = yield select(state => state.listInfo);
  if (listInfo.get('listData').size === 0 || tab !== listInfo.get('tab')) {
    try {
      const { success, data } = yield put.resolve(getList(tab));
      if (success) {
        yield put({ type: `${REQUEST_LIST}_OK`, data, tab });
      } else {
        yield put({ type: `${REQUEST_LIST}_FAIL`, data });
      }
    } catch (e) {
      yield put({ type: `${REQUEST_LIST}_FAIL`, message: e.message });
    }
  }
}

export default function* homeTask() {
  yield takeLatest(GET_LIST, watchGetList);
};

