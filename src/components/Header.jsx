import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <h1>TechyStar</h1>
      <main>
        <Link to={"/"}>Home</Link>
        <Link to={"/contact"}>Contact</Link>
        <a href={"/#about"}>about</a>
        <a href={"/#brands"}>Brands</a>
        <Link to={"/service"}>Services</Link>
      </main>
    </nav>
  );
};

export default Header;
