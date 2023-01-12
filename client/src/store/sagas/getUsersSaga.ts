import { User } from "../../models/User";
import UserService from "../../services/UserService";
import { getUsersAction } from "../actions/getUsers";
import { call, put, takeLatest } from "redux-saga/effects";

export function* getUsersSagaWorker() {
  try {
    const response: User[] = yield call(UserService.fetchUsers);
    console.log('[GetUSERS RESPONSE]: ', response);
    yield put(getUsersAction.success(response));
  } catch (error: any) {
    yield put(getUsersAction.failure(error));
  }
}

export function* getUsersSagaWatcher() {
  yield takeLatest(getUsersAction.request, getUsersSagaWorker);
}
