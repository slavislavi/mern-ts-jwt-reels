import { takeLatest, call, put, SagaReturnType } from "redux-saga/effects";
import { ActionType } from "typesafe-actions";
import { loginAction, logoutAction, registerAction } from "../actions/auth";
import AuthService from "../../services/AuthService";

export function* loginSagaWorker({payload}: ActionType<typeof loginAction.request>) {
  try {
    const response: SagaReturnType<typeof AuthService.login> = yield call(
      AuthService.login,
      payload.email,
      payload.password
    );
    console.log('[LOGIN response]', response);
    // Navigator.push(RouteNames.DATASETTINGS);
    yield call(localStorage.setItem, "token", response.data.accessToken);
    yield put(loginAction.success(response.data));
  } catch (error: any) {
    yield put(loginAction.failure(error.response.data));
  }
}

export function* registerSagaWorker({payload}: ActionType<typeof registerAction.request>) {
  try {
    const response: SagaReturnType<typeof AuthService.registration> =
      yield call(AuthService.registration, payload.email, payload.password);
    console.log('[SIGNUP response]', response);
    // Navigator.push(RouteNames.CHECK_YOUR_EMAIL);
    yield call(localStorage.setItem, "token", response.data.accessToken);
    yield put(registerAction.success(response.data));
  } catch (error: any) {
    console.log('[LOGIN ERROR] ', error.response.data);
    yield put(registerAction.failure(error.response.data));
  }
}

export function* logoutSagaWorker() {
  try {
    yield call(AuthService.logout);
    yield call(localStorage.removeItem, "token");
    yield put(logoutAction.success());
  } catch (error: any) {
    yield put(logoutAction.failure(error));
  }
}

export function* authSagaWatcher() {
  yield takeLatest(loginAction.request, loginSagaWorker);
  yield takeLatest(registerAction.request, registerSagaWorker);
  yield takeLatest(logoutAction.request, logoutSagaWorker);
}
