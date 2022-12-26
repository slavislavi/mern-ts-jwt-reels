import { ActionType, createAsyncAction, createAction } from "typesafe-actions";

export enum AuthTypes {
  Login = "[Auth] Login",
  LoginSuccess = "[Auth] LoginSuccess",
  LoginFailure = "[Auth] LoginFailure",

  Register = "[Auth] Register",
  RegisterSuccess = "[Auth] RegisterSuccess",
  RegisterFailure = "[Auth] RegisterFailure",

  ConfirmRegister = "[Auth] ConfirmRegister",
  ConfirmRegisterSuccess = "[Auth] ConfirmRegisterSuccess",
  ConfirmRegisterFailure = "[Auth] ConfirmRegisterFailure",

  Logout = "[Auth] Logout",
  LogoutSuccess = "[Auth] LogoutSuccess",
  LogoutFailure = "[Auth] LogoutFailure",

  SetToken = "[Auth] SetToken",
}

export const loginAction = createAsyncAction(
  AuthTypes.Login,
  AuthTypes.LoginSuccess,
  AuthTypes.LoginFailure
)<LoginFormValues, AuthResponse, { error: { data: string } }>();

export const registerAction = createAsyncAction(
  AuthTypes.Register,
  AuthTypes.RegisterSuccess,
  AuthTypes.RegisterFailure
)<RegisterFormValues, AuthResponse, { error: string }>();

export const logoutAction = createAsyncAction(
  AuthTypes.Logout,
  AuthTypes.LoginSuccess,
  AuthTypes.LoginFailure
)<void, void, { error: { data: string } }>();

export const confirmRegisterAction = createAsyncAction(
  AuthTypes.ConfirmRegister,
  AuthTypes.ConfirmRegisterSuccess,
  AuthTypes.ConfirmRegisterFailure
)<
  { userId: string; token: string },
  AuthResponse,
  { error: { data: string } }
>();

export const setTokenAction = createAction(AuthTypes.SetToken)<{
  token: string;
  refreshToken: string;
}>();

export type AuthActionUnion = ActionType<
  | typeof loginAction
  | typeof registerAction
  | typeof confirmRegisterAction
  | typeof setTokenAction
  | typeof logoutAction
>;
