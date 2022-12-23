import 'react-redux';
import {combineReducers} from '@reduxjs/toolkit';
// import * as fromGetUsers from './getUsers';

export interface AppState {
  // users: fromGetUsers.State;
}

export const rootReducer = combineReducers<AppState>({
  // users: fromGetUsers.reducer,
});