import React from 'react';
import {Link} from 'react-router-dom';

import './LogIn.css';



const LogIn = ({handleSubmit, handleChange, userName, passWord, handleSignUp, handleHome}) => (
    <div className="login">
        <header className="loginhead">
            <Link to="/" className="loginheadbutton">Home</Link>
            <Link to="/SignUp" className="loginheadbutton">Sign Up</Link>
        </header>
        <main>
            <form onSubmit={handleSubmit} className="loginform">
                <label className="loginlabel">User Name</label>
                <input type="text" value={userName} onChange={handleChange} className="logintext" name="userName" required/>
                
                <label className="loginlabel">Password </label>
                <input type="password" value={passWord} onChange={handleChange} name="passWord" className="logintext" required/>
                
                <input type="submit" value="submit" className="loginsubmit" />
            </form>
        </main>
    </div>
);

export default LogIn;