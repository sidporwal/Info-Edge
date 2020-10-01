import React from 'react';
import './LogOut.css'

const LogOut = ({userName, handleLogOut}) => (
    <header className="logout">
        <span className="todohead">User: {userName}</span>
        <button type="button" onClick={handleLogOut} className="logoutbutton">Log Out</button>
    </header>
);

export default LogOut;