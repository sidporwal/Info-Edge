import React from 'react';
import TodoList from './TodoList'; 
import './TodoShow.css';

const TodoShow = ({toDoList, handleCheckbox, handleDeleteTask}) => (
    <div className="todoshow">
        {toDoList.map( todo => 
            <TodoList todo={todo} handleCheckbox={handleCheckbox} handleDeleteTask={handleDeleteTask}/>
        )}
    </div>
);

export default TodoShow;