import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <h1>React messenger</h1>
      <ul className="menu">
        <li>Chats</li>
        <li>Other stuff</li>
      </ul>
    </>
  );
};

export default Header;
