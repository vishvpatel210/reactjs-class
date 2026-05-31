import React from "react";
import "./nav.css";
import Logo  from "./Logo.jsx";
import Link from "./Link";
import Menu from "./MenubarSpan.jsx"

const NavBar = () => {
  return (
   <>
    <div className="navbar">
      <Logo/>
      <Link/>
      <Menu/>
     
    </div>
    </>
  );
};

export default NavBar;
