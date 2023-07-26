import { Dispatch } from 'redux';
import axios from 'axios';
import { TodosAction, TodosActionTypes } from '../../types/todo';

export const fetchTodos = (page = 1, limit = 10): any => {
  return async (dispatch: Dispatch<TodosAction>) => {
    try {
      dispatch({ type: TodosActionTypes.FETCH_TODOS });
      const res = await axios.get('https://jsonplaceholder.typicode.com/todos', {
        params: { _page: page, _limit: limit }
      });
      setTimeout(() => {
        dispatch( { type: TodosActionTypes.FETCH_TODOS_SUCCESS, payload: res.data });
      }, 500)
    } catch (e: unknown) {
      let message = 'Произошла ошибка при загрузке списка дел';

      if (e instanceof Error) {
        message += ': ' + e.message.toLowerCase();
      }

      dispatch({
        type: TodosActionTypes.FETCH_TODOS_ERROR,
        payload: message
      });
    }
  }
}

export const setTodoPage = (page: number): TodosAction => {
  return {
    type: TodosActionTypes.SET_TODO_PAGE,
    payload: page,
  }
}