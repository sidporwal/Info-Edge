import React from 'react';
import './LogIn.css';

const LogIn = ({handleSubmit, handleChange, userName, passWord}) => (
    <div className="login">
        <form onSubmit={handleSubmit} className="loginform">
        <label className="loginlabel">User Name</label>
        <input type="text" value={userName} onChange={handleChange} className="logintext" name="userName"></input>
        
        <label className="loginlabel">Password </label>
        <input type="password" value={passWord} onChange={handleChange} name="passWord" className="logintext"></input>
        
        <input type="submit" value="submit" className="loginsubmit" />
        </form>
    </div>
);

export default LogIn;