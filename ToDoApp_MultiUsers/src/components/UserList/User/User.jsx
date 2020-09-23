import React from 'react';
import './User.css'

export const User = props =>(
    <div className="user" onClick={props.handleUserClick} id={props.item.username}>
        <h1>{props.item.name}</h1>
        <p>{props.item.username}</p>
        <p>{props.item.email}</p>
        <p>{props.item.phone}</p>
    </div>
);