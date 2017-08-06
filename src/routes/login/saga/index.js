import { put, select, fork, take } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { CHECK_TOKEN, LOGIN_IN, LOIGN_OUT, REQUEST_ACCESSTOKEN_OK, REQUEST_ACCESSTOKEN_FAIL, requestToken } from '../modules/loginActions';

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

export default function* authTask() {
  while (true) {
    // yield take(CHECK_TOKEN);
    // const loginInfo = yield select(state => state.loginState);
    // if (!loginInfo.state) {
    //   yield put(push('/login'));
    // }
    const { accesstoken } = yield take(LOGIN_IN);
    yield fork(authorize, accesstoken);
    yield take([LOIGN_OUT, REQUEST_ACCESSTOKEN_FAIL]);
    // yield call(Api.clearItem, 'token')
  }
};

