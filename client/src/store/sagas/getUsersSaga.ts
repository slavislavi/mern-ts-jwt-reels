import { getUsersAction } from "../actions/getUsers";
import { call, put, takeLatest } from "redux-saga/effects";

const getUsers = () => {console.log('fake service')}; // DELETE

export function* getUsersSagaWorker() {
  try {
    const response: string[] = yield call(getUsers);
    yield put(getUsersAction.success(response));
  } catch (error) {
    yield put(getUsersAction.failure(error as string));
  }
}

export function* getUsersSagaWatcher() {
  yield takeLatest(getUsersAction.request, getUsersSagaWorker);
}
