import React from 'react';
import './ButtonToDo.css'

const ButtonToDo = ({handleAllTask, handleActiveTask, handleCompletedTask}) => (
    <div className="buttontodo">
        <button type="button" onClick={handleAllTask} className="todobutton">Show All Tasks</button>
        <button type="button" onClick={handleActiveTask} className="todobutton">Show Active Tasks</button>
        <button type="button" onClick={handleCompletedTask} className="todobutton">Show Completed Tasks</button>
    </div>
);

export default ButtonToDo;