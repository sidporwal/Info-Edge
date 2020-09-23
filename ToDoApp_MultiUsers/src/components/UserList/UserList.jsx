import React from 'react';
import {User} from './User/User';
import './UserList.css';

export const UserList = props => (
    <div className="userlist">
        {props.users.map(item => (
          <User item={item} handleUserClick={props.handleUserClick}/>
        ))}
    </div>
);