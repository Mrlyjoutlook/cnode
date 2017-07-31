import { all, fork } from 'redux-saga/effects';
import homeTask from '../routes/home/saga';
import authTask from '../routes/login/saga';

export default function* rootSaga() {
  yield all([
    fork(authTask),
    fork(homeTask),
  ]);
}
