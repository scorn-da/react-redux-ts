enum UserActionTypes {
  FETCH_USERS = 'react-redux-ts/userReducer/FETCH_USERS',
  FETCH_USERS_SUCCESS = 'react-redux-ts/userReducer/FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR = 'react-redux-ts/userReducer/FETCH_USERS_ERROR',
}

interface UserState {
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

type UserAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction;

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: null,
}

export const userReducer = (state = initialState, action: UserAction): UserState | undefined => {
  switch (action.type) {
    case UserActionTypes.FETCH_USERS:
      return { isLoading: true, error: null, users: []};
    case UserActionTypes.FETCH_USERS_SUCCESS:
      return { isLoading: false, error: null, users: action.payload};
    case UserActionTypes.FETCH_USERS_ERROR:
      return { isLoading: false, error: action.payload, users: []};
    default:
      return state;
  }
}