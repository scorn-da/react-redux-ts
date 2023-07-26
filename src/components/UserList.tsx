import React, { useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../store/actionCreators/user';

const UserList: React.FC = () => {
  const { users, error, isLoading } = useTypedSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();
      dispatch(fetchUsers());
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