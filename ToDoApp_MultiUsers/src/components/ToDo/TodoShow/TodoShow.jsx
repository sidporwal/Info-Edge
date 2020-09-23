import React from 'react';
import {TodoList} from './TodoList/TodoList'; 
import './TodoShow.css';

export const TodoShow = props => (
    <div className="todoshow">
        {props.toDoList.map( todo => 
            <TodoList todo={todo} handleCheckbox={props.handleCheckbox} handleDeleteTask={props.handleDeleteTask}/>
        )}
    </div>
);