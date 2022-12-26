import { ActionType, createAsyncAction } from "typesafe-actions";
import { AuthResponse } from "../../models/response/AuthResponse";
import { AuthFormValues } from "../../models/AuthFormValues";

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
}

export const loginAction = createAsyncAction(
  AuthTypes.Login,
  AuthTypes.LoginSuccess,
  AuthTypes.LoginFailure
)<AuthFormValues, AuthResponse, string>();

export const registerAction = createAsyncAction(
  AuthTypes.Register,
  AuthTypes.RegisterSuccess,
  AuthTypes.RegisterFailure
)<AuthFormValues, AuthResponse, string>();

export const logoutAction = createAsyncAction(
  AuthTypes.Logout,
  AuthTypes.LogoutSuccess,
  AuthTypes.LogoutFailure
)<void, void, string>();

export const confirmRegisterAction = createAsyncAction(
  AuthTypes.ConfirmRegister,
  AuthTypes.ConfirmRegisterSuccess,
  AuthTypes.ConfirmRegisterFailure
)<{ userId: string; token: string }, AuthResponse, string>();

export type AuthActionUnion = ActionType<
  | typeof loginAction
  | typeof registerAction
  | typeof logoutAction
  | typeof confirmRegisterAction
>;
