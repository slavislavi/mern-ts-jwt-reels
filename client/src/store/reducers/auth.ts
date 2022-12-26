import { createReducer } from "typesafe-actions";
import {
  AuthActionUnion,
  confirmRegisterAction,
  loginAction,
  registerAction,
  setTokenAction,
} from "../actions/auth";

export interface State {
  loading: boolean;
  token: string;
  refreshToken: string;
  error: { data: string } | null;
  registerError: string;
  userEmail: string | null;
}

export const initialState: State = {
  loading: false,
  token: "",
  refreshToken: "",
  error: null,
  registerError: "",
  userEmail: null,
};

export const reducer = createReducer<State, AuthActionUnion>(initialState)
  .handleAction(loginAction.request, (state) => ({
    ...state,
    loading: true,
  }))
  .handleAction(loginAction.success, (state) => ({
    ...state,
    loading: false,
  }))
  .handleAction(loginAction.failure, (state, action) => ({
    ...state,
    loading: false,
    error: action.payload.error,
  }))
  .handleAction(registerAction.failure, (state, action) => ({
    ...state,
    loading: false,
    registerError: action.payload.error,
  }))
  .handleAction(registerAction.success, (state) => ({
    ...state,
    loading: false,
  }))
  .handleAction(confirmRegisterAction.failure, (state, action) => ({
    ...state,
    loading: false,
    error: action.payload.error,
  }))
  .handleAction(confirmRegisterAction.success, (state) => ({
    ...state,
    loading: false,
  }))
  .handleAction(setTokenAction, (state, action) => ({
    ...state,
    token: action.payload.token,
    refreshToken: action.payload.refreshToken,
  }));
