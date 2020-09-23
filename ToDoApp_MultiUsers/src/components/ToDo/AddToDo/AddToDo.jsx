import React from 'react';
import './AddToDo.css';

export const AddToDo = props => (
    <div className="addtodo">
        <input type="text" value={props.inputToDO} onChange={props.handleInputTodo} name="inputToDO" className="addtodotext"></input>
        <button type="button" onClick={props.handleAddTodo} className="addtodobutton">Add</button>
    </div>
);