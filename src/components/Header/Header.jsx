import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

export const Header = () => {
  return (
    <>
      <h1>React messenger</h1>
      <ul className="menu">
        <li>
          <Link to="/" />
          Profile
        </li>
        <li>
          <Link to="/chats" />
          Chats
        </li>
      </ul>
    </>
  );
};
