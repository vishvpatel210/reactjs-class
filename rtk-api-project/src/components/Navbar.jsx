import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">MyLogo</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/api1">API1 (User by ID)</Link>
        <Link to="/api2">API2 (All Users)</Link>
      </div>
    </nav>
  );
};

export default Navbar;
