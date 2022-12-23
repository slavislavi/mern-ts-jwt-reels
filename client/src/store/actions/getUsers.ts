import { ActionType, createAsyncAction } from "typesafe-actions";

export enum UsersTypes {
  GetUsers = "[UsersTypes] GetUsers",
  GetUsersSuccess = "[UsersTypes] GetUsersSuccess",
  GetUsersFailure = "[UsersTypes] GetUsersFailure",
}

export const getUsersAction = createAsyncAction(
  UsersTypes.GetUsers,
  UsersTypes.GetUsersSuccess,
  UsersTypes.GetUsersFailure
)<void, string[], string>();

export type UsersActionUnion = ActionType<typeof getUsersAction>;
