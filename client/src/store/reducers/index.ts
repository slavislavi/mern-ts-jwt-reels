import "react-redux";
import { combineReducers } from "@reduxjs/toolkit";
import * as fromGetUsers from './getUsers';
import * as fromAuth from './auth';

export interface AppState {
  auth: fromAuth.State;
  users: fromGetUsers.State;
}

export const rootReducer = combineReducers<AppState>({
  auth: fromAuth.reducer,
  users: fromGetUsers.reducer,
});
