import { TodosAction, TodosActionTypes, TodosState } from '../../types/todo';

const initialState: TodosState = {
  todos: [],
  page: 1,
  error: null,
  limit: 10,
  isLoading: false,
};

export const todosReducer = (state: TodosState = initialState, action: TodosAction): TodosState => {
  switch (action.type) {
    case TodosActionTypes.FETCH_TODOS:
      return { ...state, isLoading: true };
    case TodosActionTypes.FETCH_TODOS_SUCCESS:
      return { ...state, isLoading: false, todos: action.payload };
    case TodosActionTypes.FETCH_TODOS_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    case TodosActionTypes.SET_TODO_PAGE:
      return { ...state, page: action.payload };
    default:
      return state;
  }
}