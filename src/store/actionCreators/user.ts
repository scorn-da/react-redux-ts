import { UserActionTypes } from '../../types/user';
import { Dispatch } from 'redux';
import axios from 'axios';

export const fetchUsers = (): any => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USERS  });
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      setTimeout(() => {
        dispatch( { type: UserActionTypes.FETCH_USERS_SUCCESS, payload: res.data });
      }, 500)
    } catch (e: unknown) {
      let message = 'Произошла ошибка при загрузке пользователей';

      if (e instanceof Error) {
        message += ': ' + e.message.toLowerCase();
      }

      dispatch({
        type: UserActionTypes.FETCH_USERS_ERROR,
        payload: message
      });
    }
  }
}