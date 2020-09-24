import React from 'react';
import User from './User';
import './UserList.css';

const UserList = ({users, handleUserClick}) => (
    <div className="userlist">
        {users.map(item => (
          <User item={item} handleUserClick={handleUserClick} />
        ))}
    </div>
);

export default UserList;