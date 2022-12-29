import { createSelector } from "reselect";
import { AppState } from "../reducers";

const getUsersStateSelector = (state: AppState) => state.users;

export const getUsersLoadingSelector = createSelector(
  getUsersStateSelector,
  (state) => state.loading
);

export const getUsersErrorSelector = createSelector(
  getUsersStateSelector,
  (state) => state.error
);

export const allUsersSelector = createSelector(
  getUsersStateSelector,
  (state) => state.users
);