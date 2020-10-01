import React from 'react';
import './AddToDo.css';

const AddToDo = ({inputToDO, handleInputTodo, handleAddTodo}) => (
    <div className="addtodo">
        <input type="text" value={inputToDO} onChange={handleInputTodo} name="inputToDO" className="addtodotext"></input>
        <button type="button" onClick={handleAddTodo} className="addtodobutton">Add</button>
    </div>
);

export default AddToDo;