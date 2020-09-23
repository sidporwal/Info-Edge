import React from 'react';
import './ButtonToDo.css'

export const ButtonToDo = props => (
    <div className="buttontodo">
        <button type="button" onClick={props.handleAllTask} className="todobutton">Show All Tasks</button>
        <button type="button" onClick={props.handleActiveTask} className="todobutton">Show Active Tasks</button>
        <button type="button" onClick={props.handleCompletedTask} className="todobutton">Show Completed Tasks</button>
    </div>
);