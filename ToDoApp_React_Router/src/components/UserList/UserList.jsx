import React from 'react';

import User from './User';

import './UserList.css';

const UserList = ({ users, handleUserClick }) => (
  <div className="userlist">
    {users.map(item => (
      <User key={item.id} item={item} handleUserClick={handleUserClick} />
    ))}
  </div>
);

export default UserList;