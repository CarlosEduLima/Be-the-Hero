import React from 'react';
import { BrowserRouter as Router, Link, Switch, NavLink } from 'react-router-dom';
import './style.css';
export default function Header() {
    return (
        <React.Fragment>
            <div className="nav">
                <input type="checkbox" id="nav-check" />
                <div className="nav-header">
                    <div className="nav-title">
                        Be the hero
                    </div>
                </div>
                <div className="nav-btn">
                    <label for="nav-check">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>
                <div className="nav-links">
                        <Link  to='/'>Home</Link>
                        <Link  to='/organizations'>Organizations</Link>
                        <Link  to='/about'>About</Link>
                </div>
            </div>
        </React.Fragment>
    );
}