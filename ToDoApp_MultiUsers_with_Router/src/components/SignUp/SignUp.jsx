import React from 'react';
import './SignUp.css';
import {Link} from 'react-router-dom';

import {withRouter} from 'react-router-dom';

const SignUp = props => {
    return (
    <div className="signup">
        <header className="signuphead">
            <Link to="/"><button type="button" onClick={props.handleHome} className="signupheadbutton">Home</button></Link>
            <Link to="/LogIn"><button type="button" onClick={props.handleLogin} className="signupheadbutton">Log In</button></Link>
        </header>
        <main className="signupmain"> 
            <form onSubmit={props.handleSignUpSubmit} className="signupform">
                <label className="signuplabel">Name</label>
                <input type="text" value={props.name} onChange={props.handleChange} className="signuptext" name="name" required/>

                <label className="signuplabel">UserName</label>
                <input type="text" value={props.uName} onChange={props.handleChange} className="signuptext" name="uName" required/>

                <label className="signuplabel">E-Mail</label>
                <input type="text" value={props.eMail} onChange={props.handleChange} className="signuptext" name="eMail" required/>

                <label className="signuplabel">Phone</label>
                <input type="text" value={props.phone} onChange={props.handleChange} className="signuptext" name="phone" required/>

                <input type="submit" value="submit" className="signupsubmit" />
            </form>
        </main>
    </div>
    );
};

export const SignUpWithRouter= withRouter(SignUp);