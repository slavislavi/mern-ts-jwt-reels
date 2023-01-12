import { ActionType, createAsyncAction } from "typesafe-actions";
import { User } from "../../models/User";

export enum UsersTypes {
  GetUsers = "[UsersTypes] GetUsers",
  GetUsersSuccess = "[UsersTypes] GetUsersSuccess",
  GetUsersFailure = "[UsersTypes] GetUsersFailure",
}

export const getUsersAction = createAsyncAction(
  UsersTypes.GetUsers,
  UsersTypes.GetUsersSuccess,
  UsersTypes.GetUsersFailure
)<void, User[], { message: string }>();

export type UsersActionUnion = ActionType<typeof getUsersAction>;
