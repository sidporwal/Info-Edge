import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css';


export const Home = props => {
    return (
        <div className="home">
            <header className="homehead">
                <Link to="/SignUp" className="homeheadbutton">Sign Up</Link>
                <Link to="/LogIn" className="homeheadbutton">Log In</Link>
            </header>
            <main className="homemain">
                <h1 className="homemaintext">Enter to our first ToDo Application</h1>
            </main>
        </div>
    );
};