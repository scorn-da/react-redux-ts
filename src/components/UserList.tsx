import React from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';

const UserList: React.FC = () => {
  const { users, error, isLoading } = useTypedSelector(state => state.user);
  return (
    <div>
      
    </div>
  );
};

export default UserList;