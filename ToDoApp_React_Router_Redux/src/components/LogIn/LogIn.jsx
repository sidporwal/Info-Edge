import React from 'react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { fillDetails, selectUsername } from '../features/loginDetailsSlice';

import './LogIn.css';



const LogIn = () => {
    let dispatch = useDispatch();
    let username = useSelector(selectUsername);
    let password = useSelector(selectUsername);

    const handleChange = event => {
        const { value, name } = event.target;
        if (name === "username") {
            username = value;
        }
        else if (name === "password") {
            password = value;
        }
    }

    const handleSubmit = event => {
        event.preventDefault();
        if (username !== password) {
            alert("Username and Password should be same");
        }
        else {
            dispatch(fillDetails({ username: username, password: password }));
        }
    }

    return (
        <div className="login">
            <header className="loginhead">
                <Link to="/" className="loginheadbutton">Home</Link>
                <Link to="/SignUp" className="loginheadbutton">Sign Up</Link>
            </header>
            <main>
                <form onSubmit={handleSubmit} className="loginform">
                    <label className="loginlabel">User Name</label>
                    <input type="text" value={username} onChange={handleChange} className="logintext" name="username" required />

                    <label className="loginlabel">Password </label>
                    <input type="password" value={password} onChange={handleChange} name="password" className="logintext" required />

                    <input type="submit" value="submit" className="loginsubmit" />
                </form>
            </main>
        </div>
    );
};

export default LogIn;