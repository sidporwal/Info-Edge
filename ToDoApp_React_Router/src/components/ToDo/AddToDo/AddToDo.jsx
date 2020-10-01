import React from 'react';

import './AddToDo.css';

const AddToDo = ({ inputToDO, handleInputTodo, handleAddTodo }) => (
    <div className="addtodo">
        <form onSubmit={handleAddTodo}>
            <input type="text" value={inputToDO} onChange={handleInputTodo} name="inputToDO" className="addtodotext" />
            <input type="submit" className="addtodobutton" value="Add" />
        </form>
    </div>
);

export default AddToDo;