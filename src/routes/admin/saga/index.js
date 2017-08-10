import { put, select, takeLatest } from 'redux-saga/effects';
import { GET_ADMININFO, REQUEST_ADMIN } from '../modules/adminActions';
import { getAdminInfo } from '../modules/adminActions';

function* watchGetAdminInfo({ tab }) {
  try {
    const { loginname } = yield select(state => state.loginState.userInfo);
    const { success, data } = yield put.resolve(getAdminInfo(loginname));
    if (success) {
      yield put({ type: `${REQUEST_ADMIN}_OK`, data, tab });
    } else {
      yield put({ type: `${REQUEST_ADMIN}_FAIL`, data });
    }
  } catch (e) {
    yield put({ type: `${REQUEST_ADMIN}_FAIL`, message: e.message });
  }
}

export default function* adminTask() {
  yield takeLatest(GET_ADMININFO, watchGetAdminInfo);
};
