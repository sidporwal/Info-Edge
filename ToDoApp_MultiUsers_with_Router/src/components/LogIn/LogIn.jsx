import React from 'react';
import './LogIn.css';

import {Link} from 'react-router-dom';

const LogIn = ({handleSubmit, handleChange, userName, passWord, handleSignUp, handleHome}) => (
    <div className="login">
        <header className="loginhead">
            <Link to="/"><button type="button" onClick={handleHome} className="loginheadbutton">Home</button></Link>
            <Link to="/SignUp"><button type="button" onClick={handleSignUp} className="loginheadbutton">Sign Up</button></Link>
        </header>
        <main>
            <form onSubmit={handleSubmit} className="loginform">
            <label className="loginlabel">User Name</label>
            <input type="text" value={userName} onChange={handleChange} className="logintext" name="userName" />
            
            <label className="loginlabel">Password </label>
            <input type="password" value={passWord} onChange={handleChange} name="passWord" className="logintext" />
            
            <Link to="/ToDo"><input type="submit" value="submit" className="loginsubmit" /></Link>
            </form>
        </main>
    </div>
);

export default LogIn;