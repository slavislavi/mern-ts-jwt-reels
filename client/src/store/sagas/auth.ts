import { takeLatest, Effect, call, put, SagaReturnType, select } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import {
  confirmRegisterAction,
  loginAction,
  logoutAction,
  registerAction,
  setTokenAction,
} from '../actions/auth';
import AuthService from '../../services/AuthService';

export function* loginSagaWorker({ payload }: ActionType<typeof loginAction.request>) {
    try {
      const response: SagaReturnType<typeof AuthService.login> = yield call(
        AuthService.login,
        payload.email,
        payload.password,
      );

      // Navigator.push(RouteNames.DATASETTINGS);
      yield put(
        setTokenAction({
          token: response.data.accessToken,
          refreshToken: response.data.refreshToken,
        }),
      );
      yield put(loginAction.success(response.data));
    } catch (error: any) {
      yield put(loginAction.failure({ error: error.response }));
    }
  }

  export function* registerSagaWorker({ payload }: ActionType<typeof registerAction.request>) {
    try {
      const response: SagaReturnType<typeof AuthService.registration> = yield call(
        AuthService.registration,
        payload.email,
        payload.password,
      );

      // Navigator.push(RouteNames.CHECK_YOUR_EMAIL);
      yield put(registerAction.success(response.data));
    } catch (error: any) {
      yield put(registerAction.failure({ error: error?.response?.data || error.message }));
    }
  }

  export function* confirmRegisterSagaWorker({ payload }: ActionType<typeof confirmRegisterAction.request>) {
    try {
      const response: SagaReturnType<typeof AuthService.confirmRegistration> = yield call(
        AuthService.confirmRegistration,
        payload.userId,
        payload.token,
      );

      yield put(
        setTokenAction({
          token: response.data.accessToken,
          refreshToken: response.data.refreshToken,
        }),
      );
      Navigator.push(RouteNames.DATASETTINGS);
      yield put(confirmRegisterAction.success(response.data));
    } catch (error: any) {
      yield put(confirmRegisterAction.failure({ error: error.message }));
    }
  }

  export function* logoutSagaWorker() {
    try {
      const refreshToken: string = yield select(authRefreshTokenSelector);
      yield call(AuthService.logout, refreshToken);

      yield put(logoutAction.success());
    } catch (error: any) {
      yield put(logoutAction.failure({ error: error.message }));
    }
  }

  export function saveTokenSagaWorker({ payload }: ActionType<typeof setTokenAction>) {
    localStorage.setItem(StorageKeys.Token, JSON.stringify(payload));
  }

export function* authSagaWatcher(): Generator<Effect, void> {
  yield takeLatest(loginAction.request, loginSagaWorker);
  yield takeLatest(registerAction.request, registerSagaWorker);
  yield takeLatest(confirmRegisterAction.request, confirmRegisterSagaWorker);
  yield takeLatest(logoutAction.request, logoutSagaWorker);
  yield takeLatest(setTokenAction, saveTokenSagaWorker);
}
