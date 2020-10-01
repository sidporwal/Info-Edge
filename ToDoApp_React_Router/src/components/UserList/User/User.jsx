import React from 'react';

import './User.css'

const User = ({ item, handleUserClick }) => (
    <div className="user" onClick={handleUserClick} id={item.username}>
        <h1>{item.name}</h1>
        <p>{item.username}</p>
        <p>{item.email}</p>
        <p>{item.phone}</p>
    </div>
);

export default User;