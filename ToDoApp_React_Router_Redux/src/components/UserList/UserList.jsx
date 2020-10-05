import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUsers } from '../features/usersSlice';
import { fillDetails } from '../features/loginDetailsSlice';
import { useHistory } from 'react-router-dom';

import User from './User';
import './UserList.css';


const UserList = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  const users = useSelector(selectUsers);

  const handleUserClick = event => {
    let { id } = event.target;
    if (id) {
      dispatch(fillDetails({ username: id, password: id }));
      history.push("/LogIn");
    }
  }

  return (
    <div className="userlist">
      {users.map(item => (
        <User key={item.id} item={item} handleUserClick={handleUserClick} />
      ))}
    </div>
  );
};

export default UserList;