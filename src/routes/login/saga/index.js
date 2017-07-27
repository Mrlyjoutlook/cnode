import { put, select, fork, take, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { CHECK_TOKEN, LOGIN_IN, LOIGN_OUT, REQUEST_ACCESSTOKEN_OK, REQUEST_ACCESSTOKEN_FAIL, requestToken } from '../modules/loginActions';

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

function* authorize(accesstoken) {
  try {
    const { success, data } = yield put.resolve(requestToken(accesstoken));
      if (success) {
        yield put({ type: REQUEST_ACCESSTOKEN_OK, accesstoken });
        yield put(push('/home/all'));
      } else {
        yield put({ type: REQUEST_ACCESSTOKEN_FAIL, data });
      }
    } catch (e) {
      yield put({ type: REQUEST_ACCESSTOKEN_FAIL, message: e.message });
    }
}

function* checkToken() {
  const loginState = yield select(state => state.loginState);
  if (!loginState.status) {
    yield put(push('/login'));
  }
}

export default function* authTask() {
  while (true) {
    yield takeLatest(CHECK_TOKEN, checkToken);
    const { accesstoken } = yield take(LOGIN_IN);
    yield fork(authorize, accesstoken);
    yield take([LOIGN_OUT, REQUEST_ACCESSTOKEN_FAIL]);
    // yield call(Api.clearItem, 'token')
  }
};
