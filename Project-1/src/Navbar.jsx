import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "./Navbar.css";

const Nav = () => {
  return (
      <div className="container">
        <Link to="/">Home</Link>
        <Link to="/Food">Food</Link>
        <Link to="/recipes">Recipes</Link>
        <Link to="/Movies">Movies</Link>
        <Link to="/FakeStore">FakeStore</Link>
      </div>

  );
};

export default Nav;
