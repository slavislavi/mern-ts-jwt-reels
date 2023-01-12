import { createReducer } from "typesafe-actions";
import {
  AuthActionUnion,
  loginAction,
  logoutAction,
  registerAction,
} from "../actions/auth";
import { User } from "../../models/User";

export interface State {
  loading: boolean;
  error: string;
  registerError: string;
  currentUser: User;
  isAuth: boolean;
}

export const initialState: State = {
  loading: false,
  error: "",
  registerError: "",
  currentUser: {} as User,
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
    error: action.payload.message,
  }))
  .handleAction(loginAction.success, (state, action) => ({
    ...state,
    loading: false,
    currentUser: action.payload.user,
    isAuth: true,
  }))

  .handleAction(registerAction.request, (state) => ({
    ...state,
    loading: true,
  }))
  .handleAction(registerAction.failure, (state, action) => ({
    ...state,
    loading: false,
    registerError: action.payload.message,
  }))
  .handleAction(registerAction.success, (state, action) => ({
    ...state,
    loading: false,
    currentUser: action.payload.user,
    isAuth: true,
  }))

  .handleAction(logoutAction.request, (state) => ({
    ...state,
    loading: true,
  }))
  .handleAction(logoutAction.failure, (state, action) => ({
    ...state,
    loading: false,
    error: action.payload.message,
  }))
  .handleAction(logoutAction.success, () => initialState);
