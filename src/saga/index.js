import { all, fork } from 'redux-saga/effects';
import homeTask from '../routes/home/saga';
import authTask from '../routes/login/saga';
import topicTask from '../routes/topic/saga';
import adminTask from '../routes/admin/saga';

export default function* rootSaga() {
  yield all([
    fork(authTask),
    fork(homeTask),
    fork(topicTask),
    fork(adminTask),
  ]);
}
