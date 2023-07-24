export enum UserActionTypes {
  FETCH_USERS = 'react-redux-ts/userReducer/FETCH_USERS',
  FETCH_USERS_SUCCESS = 'react-redux-ts/userReducer/FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR = 'react-redux-ts/userReducer/FETCH_USERS_ERROR',
}

export interface UserState {
  users: any[];
  isLoading: boolean;
  error: null | string;
}

interface FetchUsersAction {
  type: UserActionTypes.FETCH_USERS;
}

interface FetchUsersSuccessAction {
  type: UserActionTypes.FETCH_USERS_SUCCESS;
  payload: any[];
}

interface FetchUsersErrorAction {
  type: UserActionTypes.FETCH_USERS_ERROR;
  payload: string;
}

export type UserAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction;