import React from 'react';
import './TodoList.css';

export const TodoList = props => (
    <div className="todolist"> 
        <input className="todolistcheckbox" type="checkbox" onChange={props.handleCheckbox} name={props.todo.time} checked={props.todo.checked}></input>
        <span className="todolisttext">{props.todo.name}</span>
        <button className="todolistbutton" type="button" onClick={props.handleDeleteTask} name={props.todo.time}>Delete {props.todo.name}</button>
    </div>
);