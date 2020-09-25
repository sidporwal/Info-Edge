import React from 'react';
import './SignUp.css';
import {Link} from 'react-router-dom';

export const SignUp = props => (
    <div className="signup">
        <header className="signuphead">
            <Link to="/"><button type="button" onClick={props.handleHome} className="signupheadbutton">Home</button></Link>
            <Link to="/LogIn"><button type="button" onClick={props.handleLogin} className="signupheadbutton">Log In</button></Link>
        </header>
        <main className="signupmain"> 
            <form onSubmit={props.handleSignUpSubmit} className="signupform">
                <label className="signuplabel">Name</label>
                <input type="text" value={props.name} onChange={props.handleChange} className="signuptext" name="name" />

                <label className="signuplabel">UserName</label>
                <input type="text" value={props.uName} onChange={props.handleChange} className="signuptext" name="uName" />

                <label className="signuplabel">E-Mail</label>
                <input type="text" value={props.eMail} onChange={props.handleChange} className="signuptext" name="eMail" />

                <label className="signuplabel">Phone</label>
                <input type="text" value={props.phone} onChange={props.handleChange} className="signuptext" name="phone" />

                <Link to="/ToDO"><input type="submit" value="submit" className="signupsubmit" /></Link>
            </form>
        </main>
    </div>
);