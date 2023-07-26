import React, { useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const TodosList: React.FC = () => {
  const { todos, isLoading, error, page, limit } = useTypedSelector(state => state.todo);
  const { fetchTodos, setTodoPage } = useActions();
  const pages = [1, 2, 3, 4, 5];

  useEffect(() => {
    const controller = new AbortController();
    fetchTodos(page, limit);
    return () => controller.abort();
  }, [page]);

  if (isLoading) {
    return <h1>Загрузка...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }


  return (
    <ul>
      {todos.map((todo) => {
          return (
            <li key={todo.id}>
              {todo.id}. {todo.title}
            </li>
          )
        }
      )}
      {
        pages.map((pageItem) => {
          return (
            <button
              onClick={() => setTodoPage(pageItem)}
              style={{
                border: pageItem === page
                  ? '2px solid green'
                  : '2px solid grey',
                background: 'transparent',
                padding: '10px'
              }}
            >{pageItem}</button>
          )
        })
      }
    </ul>
  );
};

export default TodosList;