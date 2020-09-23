import React from 'react';
import {AddToDo} from './AddToDo/AddToDo';
import {ButtonToDo} from './ButtonToDo/ButtonToDo';
import {TodoShow} from './TodoShow/TodoShow';
import {LogOut} from './LogOut/LogOut';
import './ToDo.css'

export const ToDoComponent = props => (
    <div className="todocomponent">
        <LogOut handleLogOut={props.handleLogOut} />
        <AddToDo inputToDO={props.inputToDO} handleInputTodo={props.handleInputTodo} handleAddTodo={props.handleAddTodo}/>
        <ButtonToDo handleAllTask={props.handleAllTask} handleActiveTask={props.handleActiveTask} handleCompletedTask={props.handleCompletedTask}/>
        <TodoShow toDoList={props.toDoList} handleCheckbox={props.handleCheckbox} handleDeleteTask={props.handleDeleteTask}/>
    </div>
); 