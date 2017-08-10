import { put, select, takeLatest } from 'redux-saga/effects';
import { CHECK_MESSAGE, REQUEST_MESSAGE } from '../modules/myInfoActions';
import { getList } from '../modules/listInfoActions';

function* watchGetList({ tab }) {
  const listInfo = yield select(state => state.listInfo);
  if (listInfo.get('listData').size === 0 || tab !== listInfo.get('tab')) {
    try {
      yield put({ type: `${REQUEST_LIST}_LOAD` });
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

export default function* myInfoTask() {
  yield takeLatest(CHECK_MESSAGE, watchGetList);
};

