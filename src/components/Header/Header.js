import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header__container">
      <h1 className="header__title">
        React <span>Poll </span>App
      </h1>
      <nav className="header__nav">
        <h2 className="header__questions">Questions</h2>
        <h2 className="header__newquestions">Create Poll</h2>
      </nav>
    </header>
  );
};

export default Header;
