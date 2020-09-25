import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';

export const Home = props => (
    <div className="home">
        <header className="homehead">
            <Link to="/SignUp"><button type="button" onClick={props.handleSignUp} className="homeheadbutton">Sign Up</button></Link>
            <Link to="/LogIn"><button type="button" onClick={props.handleLogin} className="homeheadbutton">Log In</button></Link>
        </header>
        <main className="homemain">
            <h1 className="homemaintext">Enter to our first ToDo Application</h1>
        </main>
    </div>
);