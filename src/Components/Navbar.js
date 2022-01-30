import React from 'react';
import Avatar from '@mui/material/Avatar';
import { Routes, Route, Link } from "react-router-dom";

export default function Navbar() {
    return <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div classNameName="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">My Profile</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Forum</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Log Out</a>
                        </li><li>
                            <Avatar sx={{position:'absolute', top:'6px',right:'16px',display:'flex',}}alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>;
}
