import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                <button>Home</button>
            </Link>
            <Link to="/repos">
                <button>Featured Repositories</button>
            </Link>
            <Link to="/contact">
                <button>Contact Me</button>
            </Link>
        </nav>
    );
};

export default NavBar;
