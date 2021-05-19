import React from "react";
import { Link } from "react-router-dom";

const ChatList = (props) => {
  return (
    <ul className="chatlist">
      {props.chats.map((chat) => {
        <li key={chat.id}>
          <Link to={`/${chat.id}`}>{chat.name}</Link>
        </li>;
      })}
    </ul>
  );
};

export default ChatList;
