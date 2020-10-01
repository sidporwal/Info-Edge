import React from 'react';
import { Link } from 'react-router-dom';

import './LogOut.css';

const LogOut = ({ userName, handleLogOut }) => (
    <header className="logout">
        <span className="todohead">User: {userName}</span>
        <Link to="/LogIn" className="logoutbutton">Log Out</Link>
    </header>
);

export default LogOut;