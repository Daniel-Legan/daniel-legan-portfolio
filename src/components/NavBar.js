import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="nav-left">
                <Link to="/">
                    <button>Home</button>
                </Link>
            </div>
            <div className="nav-right">
                <Link to="/repos">
                    <button>Featured Repositories</button>
                </Link>
                <Link to="/contact">
                    <button>Contact Me</button>
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;
