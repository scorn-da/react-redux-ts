interface TodoState {
  todos: [];
  isLoading: boolean;
  error: null | string;
  page: number;
  limit: number;
}

export enum TodoActionTypes {
  FETCH_TODOS = 'react-redux-ts/todosReducer/FETCH_TODOS',
  FETCH_TODOS_SUCCESS = 'react-redux-ts/todosReducer/FETCH_TODOS_SUCCESS',
  FETCH_TODOS_ERROR = 'react-redux-ts/todosReducer/FETCH_TODOS_ERROR',
  SET_TODO_PAGE = 'react-redux-ts/todosReducer/SET_TODO_PAGE',
}

interface FetchTodoAction {
  type: TodoActionTypes.FETCH_TODOS;
}

interface FetchTodoSuccessAction {
  type: TodoActionTypes.FETCH_TODOS_SUCCESS;
  payload: any[];
}

interface FetchTodoErrorAction {
  type: TodoActionTypes.FETCH_TODOS_ERROR;
  payload: string;
}

interface SetTodoPage {
  type: TodoActionTypes.SET_TODO_PAGE;
  payload: number;
}

export type TodosAction =
  FetchTodoAction |
  FetchTodoSuccessAction |
  FetchTodoErrorAction |
  SetTodoPage;