import React from 'react';
import './LogOut.css';
import {Link} from 'react-router-dom';

const LogOut = ({userName, handleLogOut}) => (
    <header className="logout">
        <span className="todohead">User: {userName}</span>
        <Link to="/LogIn"><button type="button" onClick={handleLogOut} className="logoutbutton">Log Out</button></Link>
    </header>
);

export default LogOut;