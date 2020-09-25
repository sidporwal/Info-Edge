import React from 'react';
import './TodoList.css';

const TodoList = ({handleCheckbox, handleDeleteTask, todo}) => (
    <div className="todolist"> 
        <input className="todolistcheckbox" type="checkbox" onChange={handleCheckbox} name={todo.time} checked={todo.checked}></input>
        <span className="todolisttext">{todo.name}</span>
        <button className="todolistbutton" type="button" onClick={handleDeleteTask} name={todo.time}>Delete {todo.name}</button>
    </div>
);


export default TodoList;