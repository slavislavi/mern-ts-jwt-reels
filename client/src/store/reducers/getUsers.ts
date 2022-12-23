import { createReducer } from "typesafe-actions";
import { UsersActionUnion, getUsersAction } from "../actions/getUsers";

export interface State {
  loading: boolean;
  users: string[];
  error: string;
}

const initialState: State = {
  loading: false,
  users: [],
  error: "",
};

export const reducer = createReducer<State, UsersActionUnion>(initialState)
  .handleAction(getUsersAction.request, (state) => ({
    ...state,
    loading: true,
  }))
  .handleAction(getUsersAction.success, (state, action) => ({
    ...state,
    loading: false,
    users: action.payload,
  }))
  .handleAction(getUsersAction.failure, (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
  }));
