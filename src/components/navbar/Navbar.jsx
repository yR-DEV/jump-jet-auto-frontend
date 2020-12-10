import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">JumpJetAuto</Link>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/vehicle">Vehicle</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/employee">Employee</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/customer">Customer</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/jobcards">JobCard</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/appointment">Appointment</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;