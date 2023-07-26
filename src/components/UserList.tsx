import React, { useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const UserList: React.FC = () => {
  const { users, error, isLoading } = useTypedSelector(state => state.user);
  const { fetchUsers } = useActions();

  useEffect(() => {
    const controller = new AbortController();
      fetchUsers();
    return () => controller.abort();
  }, [])

  if (isLoading) {
    return <h1>Загрузка...</h1>;
  }

  if (error) {
    return <h1>{ error }</h1>;
  }

  return (
    <ul>
      {users.map((user) => {
        return (
          <li key={user.id}>
          {user.name}
        </li>
        )}
      )}
    </ul>
  );
};

export default UserList;