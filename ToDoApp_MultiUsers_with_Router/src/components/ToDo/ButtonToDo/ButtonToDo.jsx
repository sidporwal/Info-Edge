import React from 'react';
import './ButtonToDo.css'
import {useRouteMatch, Link} from 'react-router-dom';

const ButtonToDo = ({handleAllTask, handleActiveTask, handleCompletedTask}) => {
    //console.log(useRouteMatch());
    let match=useRouteMatch();
    return (
    <div className="buttontodo">
        <Link to={`${match.url}/allTask`}><button type="button" onClick={handleAllTask} className="todobutton">Show All Tasks</button></Link>
        <Link to={`${match.url}/activeTask`}><button type="button" onClick={handleActiveTask} className="todobutton">Show Active Tasks</button></Link>
        <Link to={`${match.url}/completedTask`}><button type="button" onClick={handleCompletedTask} className="todobutton">Show Completed Tasks</button></Link>
    </div>
    );
};

export default ButtonToDo;