import {fork} from 'redux-saga/effects';
import { authSagaWatcher } from './auth';
import { getUsersSagaWatcher } from './getUsersSaga';

export function* rootSaga(): Generator {
  yield fork(authSagaWatcher);
  yield fork(getUsersSagaWatcher);
}