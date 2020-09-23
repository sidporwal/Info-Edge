import React from 'react';
import './LogIn.css';

export const LogIn = props => (
    <div className="login">
        <form onSubmit={props.handleSubmit} className="loginform">
        <label className="loginlabel">User Name</label>
        <input type="text" value={props.userName} onChange={props.handleChange} className="logintext" name="userName"></input>
        
        <label className="loginlabel">Password </label>
        <input type="password" value={props.passWord} onChange={props.handleChange} name="passWord" className="logintext"></input>
        
        <input type="submit" value="submit" className="loginsubmit" />
        </form>
    </div>
);