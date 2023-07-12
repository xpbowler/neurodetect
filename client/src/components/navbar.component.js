import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class NavBar extends Component{
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">NeuroDetect</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/hiw" className="nav-link">How it Works</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">Create Account</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/login" className="nav-link">Login</Link>
                        </li>
                    </ul>
                </div>

            </nav>
        )
    }
}