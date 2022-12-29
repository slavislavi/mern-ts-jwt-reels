import { createSelector } from "reselect";
import { AppState } from "../reducers";

const authStateSelector = (state: AppState) => state.auth;

export const authLoadingSelector = createSelector(
  authStateSelector,
  (state) => state.loading
);

export const isAuthSelector = createSelector(
  authStateSelector,
  (state) => state.isAuth
);

export const loginErrorSelector = createSelector(
  authStateSelector,
  (state) => state.error
);

export const signUpErrorSelector = createSelector(
  authStateSelector,
  (state) => state.registerError
);

export const currentUserSelector = createSelector(
  authStateSelector,
  (state) => state.currentUser
);
