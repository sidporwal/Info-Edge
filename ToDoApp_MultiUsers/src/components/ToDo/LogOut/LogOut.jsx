import React from 'react';
import './LogOut.css'

export const LogOut = props => (
    <div className="logout">
        <button type="button" onClick={props.handleLogOut} className="logoutbutton">Log Out</button>
    </div>
);