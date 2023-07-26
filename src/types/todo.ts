export interface TodosState {
  todos: [];
  isLoading: boolean;
  error: null | string;
  page: number;
  limit: number;
}

export enum TodosActionTypes {
  FETCH_TODOS = 'react-redux-ts/todosReducer/FETCH_TODOS',
  FETCH_TODOS_SUCCESS = 'react-redux-ts/todosReducer/FETCH_TODOS_SUCCESS',
  FETCH_TODOS_ERROR = 'react-redux-ts/todosReducer/FETCH_TODOS_ERROR',
  SET_TODO_PAGE = 'react-redux-ts/todosReducer/SET_TODO_PAGE',
}

interface FetchTodosAction {
  type: TodosActionTypes.FETCH_TODOS;
}

interface FetchTodosSuccessAction {
  type: TodosActionTypes.FETCH_TODOS_SUCCESS;
  payload: any[];
}

interface FetchTodosErrorAction {
  type: TodosActionTypes.FETCH_TODOS_ERROR;
  payload: string;
}

interface SetTodosPage {
  type: TodosActionTypes.SET_TODO_PAGE;
  payload: number;
}

export type TodosAction =
  FetchTodosAction |
  FetchTodosSuccessAction |
  FetchTodosErrorAction |
  SetTodosPage;