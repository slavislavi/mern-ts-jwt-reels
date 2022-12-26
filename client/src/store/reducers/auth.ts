import { createReducer } from "typesafe-actions";
import {
  AuthActionUnion,
  confirmRegisterAction,
  loginAction,
  logoutAction,
  registerAction,
} from "../actions/auth";
import { User } from "../../models/User";

export interface State {
  loading: boolean;
  error: string | null;
  registerError: string;
  user: User;
  isAuth: boolean;
}

export const initialState: State = {
  loading: false,
  error: null,
  registerError: "",
  user: {} as User,
  isAuth: false,
};

export const reducer = createReducer<State, AuthActionUnion>(initialState)
  .handleAction(loginAction.request, (state) => ({
    ...state,
    loading: true,
  }))
  .handleAction(loginAction.failure, (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
  }))
  .handleAction(loginAction.success, (state, action) => ({
    ...state,
    loading: false,
    user: action.payload.user,
    isAuth: true,
  }))

  .handleAction(registerAction.failure, (state, action) => ({
    ...state,
    loading: false,
    registerError: action.payload,
  }))
  .handleAction(registerAction.success, (state, action) => ({
    ...state,
    loading: false,
    user: action.payload.user,
    isAuth: true,
  }))

  .handleAction(confirmRegisterAction.failure, (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
    isAuth: false,
  }))
  .handleAction(confirmRegisterAction.success, (state, action) => ({
    ...state,
    loading: false,
    user: action.payload.user
  }))

  .handleAction(logoutAction.request, (state) => ({
    ...state,
    loading: true,
  }))
  .handleAction(logoutAction.failure, (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
  }))
  .handleAction(logoutAction.success, () => initialState);
