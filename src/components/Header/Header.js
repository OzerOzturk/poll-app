import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header__container">
      <h1 className="header__title">
        React <span>Poll </span>App
      </h1>
      <nav className="header__nav">
        <Link className="header__subtitle" to="/">
          Questions
        </Link>
        <Link className="header__subtitle" to="/createpoll">
          Create Poll
        </Link>
      </nav>
    </header>
  );
};

export default Header;
